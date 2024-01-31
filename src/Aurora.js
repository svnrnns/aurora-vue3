import axios from "axios";
import {
  AuroraPromiseError,
  AuroraInstanceError,
  AuroraClassError,
} from "./errors.js";
import { ref, computed, watch, reactive } from "vue";

/**
 * Aurora class to ehnance HTTP requests in Vue.
 */
class Aurora {
  #ongoingRequests;

  constructor(
    url = "",
    maxConcurrentRequests = Number.POSITIVE_INFINITY,
    abortController = new AbortController()
  ) {
    if (typeof url !== "string") {
      throw new AuroraClassError("Variable must be of type String");
    }
    this.axiosInstance = axios.create();
    this.axiosInstance.defaults.baseURL = url;
    this.abortController = abortController;

    // Handle Max Concurrent Requests
    this.#ongoingRequests = 0;
    this.axiosInstance.defaults.maxConcurrentRequests = maxConcurrentRequests;
    this.axiosInstance.interceptors.request.use(
      (config) => Aurora.requestInterceptor(config, this),
      (error) => Aurora.simpleFailureInterceptor(error, this)
    );
    this.axiosInstance.interceptors.response.use(
      (response) => Aurora.simpleSuccessInterpector(response, this),
      (error) => Aurora.simpleFailureInterceptor(error, this)
    );
  }

  static requestInterceptor(config, object) {
    object.#ongoingRequests++;
    if (
      config.maxConcurrentRequests &&
      Aurora.isMaxConcurrentRequestsReached(
        object,
        config.maxConcurrentRequests
      )
    ) {
      const cancelTokenSource = axios.CancelToken.source();
      config.cancelToken = cancelTokenSource.token;
      cancelTokenSource.cancel("Too many concurrent requests");
    }
    return config;
  }

  static simpleFailureInterceptor(error, object) {
    object.#ongoingRequests--;
    return Promise.reject(error);
  }

  static simpleSuccessInterpector(response, object) {
    object.#ongoingRequests--;
    return response;
  }

  static isMaxConcurrentRequestsReached(object, maxConcurrentRequests) {
    return object.#ongoingRequests > maxConcurrentRequests;
  }

  /**
   * Sets the maximum concurrent requests limit for the Aurora Axios instance.
   *
   * @param {number|null|undefined} limit - The maximum concurrent requests limit.
   *   If null or undefined (left empty), or if 0, concurrency control is effectively disabled.
   *   If a positive number, sets the maximum concurrent requests to that value.
   * @throws {AuroraClassError} Throws an error if the parameter is not a number or is an infinite number.
   */
  setMaxConcurrentRequestsLimit(limit) {
    if (limit === null || limit === undefined || limit === 0) {
      // Set to a large number or a value that effectively disables concurrency control
      this.axiosInstance.defaults.maxConcurrentRequests =
        Number.POSITIVE_INFINITY;
    } else if (typeof limit === "number" && Number.isFinite(limit)) {
      this.axiosInstance.defaults.maxConcurrentRequests = limit;
    } else {
      throw new AuroraClassError("Param must be of type Number of left empty");
    }
  }

  /**
   * Adds common headers to the Axios instance.
   *
   * @param {Object} headers - An object containing key-value pairs representing headers to be added.
   * @throws {AuroraClassError} Throws an error if the parameter is not of type 'object' or is null.
   */
  addHeaders(headers) {
    if (typeof headers === "object" && headers !== null) {
      for (const [key, value] of Object.entries(headers)) {
        this.axiosInstance.defaults.headers.common[key] = value;
      }
    } else {
      throw new AuroraClassError("Param must be of type Object");
    }
  }

  /**
   * Removes specified headers from the common headers Axios instance. If no parameters are provided, removes all headers.
   *
   * @param {Array<string>?} headerNames - An optional array of header names to be removed. If not provided, removes all headers.
   * @throws {AuroraClassError} Throws an error if the parameter is not an array when provided.
   */
  removeHeaders(headerNames) {
    if (headerNames === undefined) {
      this.axiosInstance.defaults.headers.common = {};
    } else if (Array.isArray(headerNames)) {
      headerNames.forEach((header) => {
        delete this.axiosInstance.defaults.headers.common[header];
      });
    } else {
      throw new AuroraClassError(
        "Invalid input. Please provide an array of header names or no params to remove all headers."
      );
    }
  }

  /**
   * Adds common query parameters to the Axios instance.
   *
   * @param {Object} params - An object containing key-value pairs representing query parameters to be added.
   * @throws {AuroraClassError} Throws an error if the parameter is not of type 'object'.
   */
  addParams(params) {
    if (typeof params === "object" && params !== null) {
      for (const [key, value] of Object.entries(params)) {
        this.axiosInstance.defaults.params[key] = value;
      }
    } else {
      throw new AuroraClassError("Param must be of type Object");
    }
  }

  /**
   * Removes specified query parameters from the common parameters in the Axios instance. If no parameters are provided, removes all parameters.
   *
   * @param {Array<string>?} paramNames - An optional array of parameter names to be removed. If not provided, removes all parameters.
   * @throws {AuroraClassError} Throws an error if the parameter is not an array when provided.
   */
  removeParams(paramNames) {
    if (paramNames === undefined) {
      this.axiosInstance.defaults.params = {};
    } else if (Array.isArray(paramNames)) {
      paramNames.forEach((param) => {
        delete this.axiosInstance.defaults.params[param];
      });
    } else {
      throw new AuroraClassError(
        "Invalid input. Please provide an array of parameter names or no params to remove all parameters."
      );
    }
  }

  /**
   * Adds a timeout configuration to the Axios instance defaults.
   *
   * @param {number} timeout - Timeout value in milliseconds.
   * @throws {AuroraClassError} Throws an error if the parameter is not a Number.
   */
  addTimeout(timeout) {
    if (typeof timeout === "number") {
      this.axiosInstance.defaults.timeout = timeout;
    } else {
      throw new AuroraClassError("Timeout must be a number in milliseconds.");
    }
  }

  /**
   * Removes the timeout configuration from the Axios instance defaults.
   */
  removeTimeout() {
    delete this.axiosInstance.defaults.timeout;
  }

  /**
   * Simply cancells all ongoing requests that are using the main class controller signal.
   */
  abortAll() {
    this.abortController.abort();
  }

  static validateCall(
    method,
    url,
    baseURL,
    headers,
    params,
    config,
    abortController
  ) {
    // Fail if url is an object but the call is not reactive
    if (config && !config.reactive && typeof url == "object") {
      throw new AuroraInstanceError(
        "URL cannot be of type object if the call is not reactive."
      );
    }

    // Fail if url is emtpy
    if (config && config.reactive ? baseURL.url.trim() === "" : baseURL.trim())
      throw new AuroraInstanceError("URL cannot be null");

    // Fail if method is not a string
    if (typeof method !== "string") {
      throw new AuroraInstanceError(
        "Method must be of type string (get/post/put/patch/delete)"
      );
    }
  }
  /**
   * Makes an HTTP request.
   *
   * @param {string} method - The HTTP method (get/post/put/patch/delete).
   * @param {string} url - The endpoint url.
   * @param {Object} headers - Additional headers to include in the request.
   * @param {Object} params - Query parameters to include in the request.
   * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
   * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
   * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called and and the linked AbortController.
   * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
   * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
   */
  call(method, url, headers, params, config = null, abortController = null) {
    // Call config
    let baseURL = url != null ? url : this.axiosInstance.defaults.baseURL;

    if (config && config.reactive) {
      baseURL = reactive({
        url: url != null ? url : this.axiosInstance.defaults.baseURL,
      });
    }

    let abortControllerReference =
      abortController != null ? abortController : this.abortController;

    let timeoutReference =
      config && config.timeout
        ? config.timeout
        : this.axiosInstance.defaults.timeout;

    let intervalReference = config && config.interval ? config.interval : 0;

    Aurora.validateCall(
      method,
      url,
      baseURL,
      headers,
      params,
      config,
      abortController
    );

    // Call
    const isLoading = ref(true);
    const response = ref(null);
    const error = ref(null);

    const makeRequest = () => {
      isLoading.value = true;
      this.axiosInstance({
        url: config && config.reactive ? baseURL.url : baseURL,
        method: method.toLowerCase(),
        headers,
        params,
        signal: abortControllerReference.signal,
        timeout: timeoutReference,
      })
        .then((axiosResponse) => {
          response.value = axiosResponse;
        })
        .catch((axiosError) => {
          error.value = new AuroraPromiseError(axiosError);
        })
        .finally(() => {
          isLoading.value = false;
        });
    };

    // Call behavior
    const intervalId = setInterval(makeRequest, intervalReference);

    if (intervalReference <= 0) {
      setTimeout(() => {
        clearInterval(intervalId);
      }, intervalReference + 1);
    }

    const recall = () => {
      makeRequest();
    };

    const stop = () => {
      clearInterval(intervalId);
    };

    // Reactivity
    if (config && config.reactive) {
      if (baseURL) {
        watch(baseURL, () => {
          makeRequest();
        });
      }

      if (headers) {
        watch(headers, () => {
          makeRequest();
        });
      }

      if (params) {
        watch(params, () => {
          makeRequest();
        });
      }
    }

    return computed(() => ({
      isLoading: isLoading.value,
      response: response.value,
      abortController: abortControllerReference,
      error: error.value,
      recall,
      stop,
    }));
  }

  /**
   * Alias for making an HTTP GET request using the 'call' method.
   *
   * @function
   * @memberof Aurora
   * @name get
   * @param {string} method - The HTTP method (get/post/put/patch/delete).
   * @param {string} url - The endpoint url.
   * @param {Object} headers - Additional headers to include in the request.
   * @param {Object} params - Query parameters to include in the request.
   * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
   * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
   * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
   * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
   * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
   */
  get = this.call.bind(this, "get");

  /**
   * Alias for making an HTTP POST request using the 'call' method.
   *
   * @function
   * @memberof Aurora
   * @name post
   * @param {string} method - The HTTP method (get/post/put/patch/delete).
   * @param {string} url - The endpoint url.
   * @param {Object} headers - Additional headers to include in the request.
   * @param {Object} params - Query parameters to include in the request.
   * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
   * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
   * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
   * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
   * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
   */
  post = this.call.bind(this, "post");

  /**
   * Alias for making an HTTP PUT request using the 'call' method.
   *
   * @function
   * @memberof Aurora
   * @name put
   * @param {string} method - The HTTP method (get/post/put/patch/delete).
   * @param {string} url - The endpoint url.
   * @param {Object} headers - Additional headers to include in the request.
   * @param {Object} params - Query parameters to include in the request.
   * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
   * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
   * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
   * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
   * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
   */
  put = this.call.bind(this, "put");

  /**
   * Alias for making an HTTP PATCH request using the 'call' method.
   *
   * @function
   * @memberof Aurora
   * @name patch
   * @param {string} method - The HTTP method (get/post/put/patch/delete).
   * @param {string} url - The endpoint url.
   * @param {Object} headers - Additional headers to include in the request.
   * @param {Object} params - Query parameters to include in the request.
   * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
   * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
   * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
   * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
   * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
   */
  patch = this.call.bind(this, "patch");

  /**
   * Alias for making an HTTP DELETE request using the 'call' method.
   *
   * @function
   * @memberof Aurora
   * @name delete
   * @param {string} method - The HTTP method (get/post/put/patch/delete).
   * @param {string} url - The endpoint url.
   * @param {Object} headers - Additional headers to include in the request.
   * @param {Object} params - Query parameters to include in the request.
   * @param {Object} config - A configuration object to inject an additional behavior to the call. For further info visit the docu on GitHub.
   * @param {AbortController?} abortController - The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.
   * @returns {computed} - A Vue computed variable which contains a loading indicator, the endpoint response if exists or has been successfully called, a custom error if thrown and and the linked AbortController.
   * @throws {AuroraInstanceError} Throws an error if the URL is either empty or null.
   * @throws {AuroraInstanceError} Throws an error if the method is not of type String.
   */
  delete = this.call.bind(this, "delete");
}

export default Aurora;
