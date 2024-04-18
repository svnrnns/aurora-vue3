# Aurora

Aurora is a package designed to elevate the Axios experience within Vue 3 applications. It replaces traditional asynchronous handling with Vue proxies, offering advanced features such as:

- Automatic loading state management.
- Setting limits for unresolved ongoing calls.
- Request cancellation.
- Authentication support.
- Reactive calls.
- Call timeouts.
- Call intervals.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Making a simple request](#make-a-request)
  - [Instance configuration](#instance-configuration)
- [Advanced Usage](#advanced-usage)
- [API](#api)

## Features

### Enhanced Axios Integration:

- Seamless integration with Axios, leveraging its powerful features.

### Loading State:

- Automatic handling of loading indicators.
- Simplifies state management during data fetching.

### Recall Functionality:

- Introducing a "recall" feature allowing developers to re-trigger Axios calls and update computed data.

### Reactivity:

- Automatically trigger a call to update whenever there are changes or updates to the value of the endpoint, header, or parameter.

### Request Cancellation:

- Mechanism to cancel unresolved requests, specially useful in scenarios like navigating away from a component while a request is still pending.
- Utilizes the modern AbortController for request cancellation.

### Authentication Support:

- Support for handling authentication tokens and headers.
- Easy configuration for adding authentication tokens to requests.

### Custom Headers and Params:

- Ability to add custom headers and query parameters to HTTP requests.
- Easy-to-use functions for adding and removing headers.

### Concurrency Control:

- Efficiently manage concurrent requests to avoid race conditions.
- Option to limit the number of simultaneous requests.

### Timeouts:

- Implement timeout options for requests to prevent long-running requests from impacting the user experience.
- Easily add and remove timeout configurations.

### Intervals:

- Implement an interval to repeat the same call after a specified number of milliseconds.
- Utility function within the instance to clear the interval if necessary

### Error Handling:

- Improved error handling with customized error messages and formats for a better understanding and handling.

## Installation

```bash
$ npm install aurora-vue3 --save-dev
```

## Usage

[Install](#Installation) the Aurora package. <br>

Create an instance of Aurora, optionally specifying a base URL.<br>
If a URL is provided during instantiation, it will serve as the base URL for all subsequent calls. Each call made will take the endpoint parameter as an API endpoint, combining it with the specified URL. <br>

```js
import Aurora from "aurora-vue3";

const auroraInstance = new Aurora("https://api.example.com");
const response = auroraInstance.get("/users");
```

On the other hand, if the constructor does not receive a URL, then the endpoint parameter will serve as the complete URL for the call. This provides flexibility in specifying either a base URL or a complete URL depending on the requirements of your application.

```js
import Aurora from "aurora-vue3";

const auroraInstance = new Aurora();
const response = auroraInstance.get("https://api.example.com/users");
```

When creating an Aurora instance, this is bounded by default to an AbortController and set to a maximum number of concurrent requests of Infinite.

```js
const auroraInstance = new Aurora("https://api.example.com", 5); // Set the max concurrent requests to 5
const auroraInstance = new Aurora(
  "https://api.example.com",
  null,
  abortController
); // Use a custom AbortController
```

### Make a Request

Any Aurora request returns a Vue computed variable with the following properties:

- **isLoading**: Indicates whether or not the request has been resolved.
- **response**: The request response.
- **error**: An imperative error if the request fails.
- **abortController**: The linked AbortController of this call. Aurora uses the instance AbortController by default in every request.
- **recall( )**: A callable function that repeats the same request.
- **stop( )**: If the request is under an interval, use this function to clear it.

```js
// Make a simple GET request
const computedResponse = auroraInstance.get("/api/data");

// Access the computed properties
console.log(computedResponse.value.isLoading);
console.log(computedResponse.value.response);
```

There are 5 available methods to make a call, being **GET, POST, PUT, PATCH and DELETE**. <br>

> See futher information in [API](#api)

### Instance Configuration

Aurora offers several tools to customize the instance, such as base URL, headers, params, custom AbortController for handling request cancellation, and the option to set a maximum of ongoing unresolved requests.

- To add a **base URL**, use the Aurora constructor. This URL will be used when making a request using this instance.

```js
new Aurora("https://api.example.com");
```

- To set a max concurrent number of unresolved request, use the Aurora constructor or the following function. If the Aurora instance exceeds the limit of unresolved requests, every further request will fail.

```js
new Aurora(null, 5);
// or
auroraInstance.setMaxConcurrentRequestsLimit(5); // Pass no params to reset the max limit to Infinite
```

- To use a custom **AbortController**, address it to the Aurora constructor.

```js
customAbortController = new AbortController();
new Aurora(null, null, customAbortController);
```

- To add **default headers** to the Aurora instance, use the following functions.

```js
// Adding default headers
auroraInstance.addHeaders({
  Authorization: "Bearer YOUR_ACCESS_TOKEN",
  "Content-Type": "application/json",
  "Custom-Header": "CustomValue",
});

// Removing specific headers
auroraInstance.removeHeaders(["Authorization", "Custom-Header"]);

// Removing all headers
auroraInstance.removeHeaders();
```

- Follow the same structure above to add **default query params**.

```js
// Add default query parameters
auroraInstance.addParams({ page: 1, limit: 10 });

// Remove specific query parameters
auroraInstance.removeParams(["page"]);

// Remove all query parameters
auroraInstance.removeParams();
```

- Finally, it is possible to add a **default timeout** for all the requests of an Aurora instance.

```js
// Add a default timeout of 1s for every request of the instance
auroraInstance.addTimeout(1000);

// Remove it
auroraInstance.removeTimeout();
```

## Advanced Usage

The existing functions **get( )**, **post( )**, **put( )**, **patch( )** and **delete( )** are alias of the main function **call( )**. <br>
A **get( )** function simply uses the method **call( )** passing "get" as a param.

```js
auroraInstance.get("https://api.example.com");
auroraInstance.call("get", "https://api.example.com");
// both are the same thing
```

Those are the main methods of Aurora and has a lot of configuration and features.

### Additional headers & params

Headers and params can be added to the Aurora instance as we saw in [configuration](#instance-configuration), but can also be passed to a specific call.

```js
// Make a GET request with custom headers
const headers = {
  {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Custom-Header": "CustomValue",
  }
}

const customHeadersRequest = auroraInstance.get(
  "/api/data",
  headers);

// Make a GET request with custom query parameters
const queryParams = {
  {
    page: 1,
    pageSize: 10,
    sortBy: "date",
  }
}
const customQueryParamsRequest = auroraInstance.get(
  "/api/data",
  null,
  queryParams
);
```

> We are passing `null` above as we are not adding headers to that call.

### Usage of the config parameter

An Aurora instance call can receive a config object that indicates the behavior of the call. <br>
In the current version of the package, the available options for the config object are [interval](#the-config-param-interval), [timeout](#the-config-param-timeouts) and [reactive](#how-reactivity-works).

### The config param: Interval

Make repeated requests at a specified interval. Useful for real-time data updates.

```js
// Make repeated requests every 10 seconds
const config = {
  interval: 1000,
};
const intervalResponse = auroraInstance.get("/api/data", null, null, config);

// Stop the interval-based requests after 30 seconds
setTimeout(() => {
  intervalResponse.stop();
}, 30000);
```

### The config param: Timeout

Set a custom timeout for the request to ensure it doesn't run indefinitely, even if it does not receive a response.

```js
// Make a request that will expire after 5 seconds
const config = {
  timeout: 5000,
};
const timeoutResponse = auroraInstance.get("/api/data", null, null, config);
```

### How Reactivity works

In Aurora, you can make a call reactive, allowing it to automatically recall itself whenever there is a change in any value of the endpoint, headers, or parameters. For example, if a parameter initially has a value of `page: 10`, but later updates to `page: 11`, a reactive call will automatically repeat the API call using the updated parameter value. <br>
This reactivity also applies to changes in endpoints and headers, as mentioned earlier. <br>

To enable this feature, simply set the option reactive: true in the configuration parameter.

```js
const config = { reactive: true };
```

Ensure the usage of reactive objects in the call metod parameters. <br>
Use `ref/computed` for a reactive endpoint and the `reactive` Vue object for the headers and params.

```js
// Define reactive variables
const selectedLimit = ref(10);
const selectedPokemon = ref("ditto");
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

// Create a reactive reference to the base URL
const refURL = ref(baseURL);

// Compute the URL dynamically based on selectedPokemon value
const computedURL = computed(() => {
  return baseURL + selectedPokemon.value;
});

// Define reactive parameters using Vue's reactive function
const reactiveParams = reactive({
  limit: selectedLimit,
});

// Invoke the Aurora instance's get method
auroraInstance.get(computedURL, null, reactiveParams, config);
```

> To clarify, in the provided code snippet, any changes or updates to the values of `reactiveParams` or `computedURL` will dynamically reflect in the computed response of the **get()** method. This is facilitated by setting the config option to reactive: true and utilizing reactive Vue objects for both endpoint and parameters.

### The Recall function

Use the `recall( )` function to trigger the Axios request again and update the computed properties. <br>
This is useful to make the same call once again without creating a new Aurora instance or a new computed variable.

```js
// Make a request
const initialRequest = auroraInstance.get("/api/data");

// Recall the request after 10 seconds
setTimeout(() => {
  initialRequest.recall();
}, 10000);
```

## API

### Constructor

| Param                 | Type            | Nullable | Desc                                          |
| --------------------- | --------------- | -------- | --------------------------------------------- |
| url                   | String          | &check;  | Base URL                                      |
| maxConcurrentRequests | Number          | &check;  | Maximum number of ongoing unresolved requests |
| abortController       | AbortController | &check;  | Linked AbortController                        |

### setMaxConcurrentRequestsLimit

Sets the maximum concurrent requests limit for the Aurora instance. <br>
Throws an **AuroraClassError** if the parameter is not a number or is an infinite number.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------------------|
| limit | Number | &check; | The maximum concurrent requests limit. If null or undefined (left empty), or if 0, concurrency control is effectively disabled. If a positive number, sets the maximum concurrent requests to that value. |

### addHeaders

Adds common headers to the Aurora instance.<br>
Throws an **AuroraClassError** if the parameter is not of type 'object' or is null.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|------------------------------------------------------------------------|
| headers | Object | &cross; | An object containin key-paired values representing headers to be added |

### removeHeaders

Removes specified headers from the common headers Aurora instance. If no parameters are provided, removes all headers.
Throws an **AuroraClassError** if the parameter is not an array when provided.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------|
| headerNames | Array<String> | &check; | An optional array containing the header names to be removed. If not provided, remove all headers |

### addParams

Adds common query parameters to the Aurora instance. <br>
Throws an **AuroraClassError** if the parameter is not of type 'object' or is null.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|------------------------------------------------------------------------|
| params | Object | &cross; | An object containin key-paired values representing query params to be added |

### removeParams

Removes specified query params from the common parameters Aurora instance. If no parameters are provided, removes all headers.<br>
Throws an **AuroraClassError** if the parameter is not an array when provided.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------|
| paramNames | Array<String> | &check; | An optional array containing the param names to be removed. If not provided, remove all parameters |

### addTimeout

Adds a timeout configuration to the Aurora instance defaults.<br>
Throws an **AuroraClassError** if the parameter is not a Number.
| Param | Type | Nullable | Desc |
|---------|--------|----------|---------------------|
| timeout | Number | &check; | Timeout value in ms |

### removeTimeout

Removes the timeout configuration from the Aurora instance defaults.

### abortAll

Simply cancells all ongonig requests that are using the instance AbortController's signal.

### call

Makes an HTTP request.<br>
Returns a **Vue computed variable** which contains a loading indicator, the endpoint response if exists or has been successfully called and and the linked AbortController.<br>
Throws an **AuroraInstanceError** if the `endpoint` is either empty or null.<br>
Throws an **AuroraInstanceError** if the `method` is not of type String.<br>
Throws an **AuroraInstanceError** if the `params` parameter is not of type object (if given).<br>
Throws an **AuroraInstanceError** if the `config` parameter is not of type object (if given).<br>
Throws an **AuroraInstanceError** if the `abortController` parameter is not of type AbortController (if given).

| Param           | Type            | Nullable | Desc                                                                                                                                                                                                                               |
| --------------- | --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| method          | String          | &cross;  | The HTTP method. (get/post/put/patch/delete)                                                                                                                                                                                       |
| endpoint        | String          | &cross;  | The endpoint url.                                                                                                                                                                                                                  |
| headers         | Object          | &check;  | Additional headers to include in the request.                                                                                                                                                                                      |
| params          | Object          | &check;  | Additional query params to include in the request.                                                                                                                                                                                 |
| config          | Object          | &check;  | The configuration variable to define the call behavior. It can contain [timeout](#the-config-param-timeouts) (number in ms), [interval](#the-config-param-interval) (number in ms) and [reactive](#how-reactivity-works) (boolean) |
| timeout         | Number          | &check;  | The call will expire after a certain timeout if is not resolved. Pass 0 or leave empty this param for no timeout. (Expressed in ms)                                                                                                |
| AbortController | AbortController | &check;  | The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request.                                                        |

### get post put patch delete

Alias for the **call( )** function that replace the **method** param for the function name.

```js
auroraInstance.call("get", "/api/data");
auroraInstance.get("/api/data");
```
