# Aurora Vue 3

Aurora is a powerful utility for enhancing HTTP requests in Vue 3 applications, providing an easy-to-use interface for making HTTP calls with advanced features like concurrency control, common headers, and reactive request handling.

- Hooks
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
  - [Importing Aurora](#importing-aurora)
  - [Creating the instance](#creating-an-aurora-instance)
  - [Making HTTP Requests](#making-http-requests)
  - [Adding Headers and Params](#adding-headers-and-parameters)
  - [Removing Headers and Params](#removing-headers-and-parameters)
  - [Setting timeout](#setting-timeout)
- [Advanced Usage](#advanced-usage)
  - [Base URL](#base-url)
  - [Default Headers and Params](#defaults-headers-and-parameters)
  - [Max Concurrent Request Limit](#max-concurrent-request-limit)
  - [Custom AbortController](#custom-abort-controller)
  - [Call method](#call-method)
  - [Recall method](#recall-method)
- [Usage of the config parameter](#usage-of-the-config-parameter)
  - [Interval](#interval)
  - [Timeout](#timeout)
  - [Reactivity](#how-reactive-calls-works)
- [Example](#example)
- [API Reference](#api-reference)

## Features

### Enhanced Axios Integration:

- Seamless integration with Axios, leveraging its powerful features.

### Hooks

- Use the package just by importing what you need.

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

You can install Aurora Vue 3 using npm:

```bash
npm install aurora-vue3
```

Or yarn:

```bash
yarn add aurora-vue3
```

## Usage

### Importing Aurora

First, you need to import Aurora and the necessary hooks into your Vue components:

```js
import Aurora, {
  useCall,
  useGet,
  usePost,
  usePut,
  usePatch,
  useDelete,
} from 'aurora-vue3';
```

### Creating an Aurora Instance

You can create an Aurora instance with the following options:

- `url`: The base URL for all HTTP requests.
- `maxConcurrentRequests`: The maximum number of concurrent requests.
- `abortController`: An instance of AbortController for handling request cancellations.

```js
const auroraInstance = new Aurora('https://api.example.com', 5, null);
```

### Making HTTP Requests

You can use the provided hooks to make HTTP requests. Each hook returns a Vue computed variable containing the loading state, response data, error information, and control methods.

#### Example with useGet

```js
const response = useGet('/endpoint', headers, params);
// or
const { isLoading, response, error, recall, stop } = useGet(
  '/endpoint',
  headers,
  params
);
```

#### Example using auroraInstance.get()

```js
const response = auroraInstance.get('/endpoint', headers, params);
```

### Adding Headers and Parameters

Aurora allows you to add common headers and parameters to be included in all requests:

```js
auroraInstance.addHeaders({
  Authorization: 'Bearer YOUR_ACCESS_TOKEN',
  'Content-Type': 'application/json',
  'Custom-Header': 'CustomValue',
});
auroraInstance.addParams({ page: 1, limit: 10, lang 'en' });
```

### Removing Headers and Parameters

You can also remove specific headers or parameters by providing an array with the keys you want to remove:

```js
auroraInstance.removeHeaders(['Authorization']);
auroraInstance.removeParams(['lang']);

// removing all headers or params
auroraInsance.removeHeaders();
auroraInstance.removeParams();
```

### Setting Timeout

Aurora allows you to set a timeout for all requests. Requests will expire if it are not resolved after the specified timeout:

```js
auroraInstance.addTimeout(5000); // timeout in milliseconds
auroraInstance.removeTimeout(); // remove it
```

## Advanced Usage

### Base URL

To add a default URL, use the Aurora constructor. This URL will be used when making a request using this instance.

```js
const auroraInstance = new Aurora('https://api.example.com');
```

### Defaults Headers and Parameters;

Use the following functions t add default headers and params to the Aurora Instnance.

```js
auroraInstance.addHeaders({ 'Custom-Header': 'CustomValue' });
auroraInstance.removeHeaders(['Custom-Header']);

auroraInstance.addParams({ page: 1, limit: 10 });
auroraInstance.removeParams(['page']);
```

### Max Concurrent Request Limit

To set a max concurrent number of unresolved request, use the Aurora constructor or the following function. If the Aurora instance exceeds the limit of unresolved requests, every further request will fail.

```js
const auroraInstance = new Aurora(null, 5);
// or
auroraInstance.setMaxConcurrentRequestsLimit(5);

// pass no params to reset the max limit to Infinite
auroraInstance.setMaxConcurrentRequestsLimit();
```

### Custom Abort Controller

To use a custom **AbortController**, address it to the Aurora constructor.

```js
customAbortController = new AbortController();
const auroraInstance = new Aurora(null, null, customAbortController);
```

### Call method

The existing functions **get( )**, **post( )**, **put( )**, **patch( )** and **delete( )** are alias of the main function **call( )**. <br>
A **get( )** function simply uses the method **call( )** passing "get" as a param.

### Recall method

Use the `recall( )` function to trigger the Axios request again and update the computed properties. <br>
This is useful to make the same call once again without creating a new Aurora instance or a new computed variable.

```js
const initialRequest = auroraInstance.get('/api/data');

// Recall the request after 10 seconds
setTimeout(() => initialRequest.recall(), 10000);
```

```js
auroraInstance.get('/endpoint');
auroraInstance.call('get', '/endpoint');
```

## Usage of the config parameter

An Aurora instance call can receive a config object that indicates the behavior of the call. <br>
In the current version of the package, the available options for the config object are [interval](#tinterval), [timeout](#timeout) and [reactive](#how-reactivity-works).

### Interval

Make repeated requests at a specified interval. Useful for real-time data updates.

```js
// Make repeated requests every 10 seconds
const config = { interval: 10000 };
const response = auroraInstance.get('/api/data', null, null, config);

// Stop the interval-based requests after 30 seconds
setTimeout(() => response.stop(), 30000);
```

### Timeout

Set a custom timeout for the request to ensure it doesn't run indefinitely, even if it does not receive a response.

```js
// Make a request that will expire after 5 seconds
const config = { timeout: 5000 };
const timeoutResponse = auroraInstance.get('/api/data', null, null, config);
```

### How Reactive calls works

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
const selectedPokemon = ref('ditto');
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

// Create a reactive reference to the base URL
const refURL = ref(baseURL);

// Compute the URL dynamically based on selectedPokemon value
const computedURL = computed(() => {
  return baseURL + selectedPokemon.value;
});

// Define reactive parameters using Vue's reactive function
const reactiveParams = reactive({ limit: selectedLimit });

// Invoke the Aurora instance's get method
auroraInstance.get(computedURL, null, reactiveParams, config);
```

> To clarify, in the provided code snippet, any changes or updates to the values of `reactiveParams` or `computedURL` will dynamically reflect in the computed response of the **get( )** method. This is facilitated by setting the config option to `reactive: true` and utilizing reactive Vue objects for both endpoint and parameters.

### Mix them

You can mix all the configurations in a single object.

```js
const config = {
  timeout: 10000,
  interval: 100,
  reactive: true,
};

const response = auroraInstance.get('/endpoint', null, null, config);
```

## Example

Here is a full example of using Aurora in a Vue 3 component:

```js
<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error.msg }}</div>

    <div v-if="response">{{ response.data }}</div>
    <button @click="recall">Retry</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useGet } from 'aurora-vue3';

export default {
  setup() {
    const { isLoading, response, error, recall } = useGet('/endpoint');
    return { isLoading, response, error, recall };
  }
}
</script>
```

## API Reference

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

### call (hook: useCall)

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

### hooks: useGet usePost usePut usePatch useDelete

Alias for the **call( )** function that replace the **method** param for the function name.

```js
auroraInstance.call('get', '/api/data');
auroraInstance.get('/api/data');

useCall('get', '/api/data');
useGet('/api/data');
```
