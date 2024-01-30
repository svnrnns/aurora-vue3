# Aurora

Aurora is a package that enhances the Axios experience in **Vue 3**, offering advanced features like automatic loading state management, limit max ongoing calls, request cancellation, authentication support, call timeouts, call intervals, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Making a simple request](#make-a-request)
  - [Instance configuration](#instance-configuration)
- [Advanced Usage](#advanced-usage)
- [API](#api)

## Features

### Enhanced Axios Integration

- Seamless integration with Axios, leveraging its powerful features.

### Loading State

- Automatic handling of loading indicators for asynchronous requests.
- Simplifies state management during data fetching.

### Error Handling:

- Improved error handling with customizable error messages and formats.
- Support for handling specific HTTP error codes. (not yet implemented)

### Request Cancellation:

- Mechanism to cancel requests, especially useful in scenarios like navigating away from a component while a request is still pending.
- Utilizes the modern AbortController for request cancellation.

### Authentication Support:

- Support for handling authentication tokens and headers.
- Easy configuration for adding authentication tokens to requests.

### Custom Headers and Params:

- Ability to add custom headers and query parameters to HTTP requests.
- Easy-to-use functions for adding and removing headers.

### Timeouts:

- Implement timeout options for requests to prevent long-running requests from impacting the user experience.
- Easily add and remove timeout configurations.

### Concurrency Control:

- Efficiently manage concurrent requests to avoid race conditions.
- Option to limit the number of simultaneous requests.

### Recall Functionality:

- Introduces a "recall" feature allowing users to re-trigger Axios calls and update computed data.

## Installation

```bash
$ npm install @svnrnns/aurora --save-dev
```

## Usage

[Install](#Installation) the Aurora package. <br>

Create an instance of Aurora with an optional URL. This instance is bounded by default to an AbortController and set to a maximum number of concurrent requests of Infinite.

```js
import Aurora from "@svnrnns/aurora";

const auroraInstance = new Aurora();
const auroraInstance = new Aurora("https://api.example.com"); // Link a default url to the instance
const auroraInstance = new Aurora("https://api.example.com", 5); // Set the max concurrent requests to 5
const auroraInstance = new Aurora(
  "https://api.example.com",
  5,
  abortController
); // Use a custom AbortController
```

### Make a Request

Any Aurora request returns a computed variable with the following properties:

- **isLoading**: Indicates whether or not the request has received a response.
- **response**: The request response.
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

Aurora offers several tools to customize the instance, such as default url, headers, params, custom AbortController for handling request cancellation, and setting a maximum of ongoing requests.

- To add a **default url**, use the Aurora constructor. This url will be used by default when making a request using this instance.

```js
new Aurora("https://api.example.com");
```

- To set a max concurrent request limit, use the Aurora constructor or the following function. If the Aurora instance exceeds the limit of unresolved requests, every further request will fail.

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
// Add a default timeout of 1s
auroraInstance.addTimeout(1000);

// Remove it
auroraInstance.removeTimeout();
```

## Advanced Usage

The existing functions **get( )**, **post( )**, **put( )**, **patch( )** and **delete( )** are alias of the main function **call( )**. <br>
A get( ) function simply uses the method call( ) passing "get" as a param.

```js
auroraInstance.get("https://api.example.com");
auroraInstance.call("get", "https://api.example.com");
```

This is the main method of Aurora and has a lot of configuration and features.

### Additional headers & params

Headers and params can be added to the Aurora instance as we saw in [configuration](#instance-configuration), but can also be added to a specific call.

```js
// Make a GET request with custom headers
const customHeadersRequest = auroraInstance.get("/api/data", {
  Authorization: "Bearer YOUR_ACCESS_TOKEN",
  "Custom-Header": "CustomValue",
});

// Make a GET request with query parameters
const queryParamsRequest = auroraInstance.get(
  "/api/data",
  {},
  {
    page: 1,
    pageSize: 10,
    sortBy: "date",
  }
);

// Make a POST request with custom headers and data
const customHeadersAndParamsRequest = auroraInstance.post(
  "/api/create",
  {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    age: 30,
  }
);
```

### Intervals

Make repeated requests at a specified interval. Useful for real-time data updates.

```js
// Make repeated requests every 10 seconds
const intervalResponse = auroraInstance.get("/api/data", { interval: 10000 });

// Stop the interval-based requests after 30 seconds
setTimeout(() => {
  intervalResponse.stop();
}, 30000);
```

### Timeouts

Set a custom timeout for the request to ensure it doesn't run indefinitely, even if it does not receive a response.

```js
// Make a request that will expire after 5 seconds
const timeoutResponse = auroraInstance.get("/api/data", { timeout: 5000 });
```

### The Recall function

Use the recall function to trigger the Axios request again and update the computed properties. <br>
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
Throws an **Error** if the parameter is not a number or is an infinite number.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------------------|
| limit | Number | &check; | The maximum concurrent requests limit. If null or undefined (left empty), or if 0, concurrency control is effectively disabled. If a positive number, sets the maximum concurrent requests to that value. |

### addHeaders

Adds common headers to the Aurora instance.<br>
Throws an **Error** if the parameter is not of type 'object' or is null.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|------------------------------------------------------------------------|
| headers | Object | &cross; | An object containin key-paired values representing headers to be added |

### removeHeaders

Removes specified headers from the common headers Aurora instance. If no parameters are provided, removes all headers.
Throws an **Error** if the parameter is not an array when provided.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------|
| headerNames | Array<String> | &check; | An optional array containing the header names to be removed. If not provided, remove all headers |

### addParams

Adds common query parameters to the Aurora instance. <br>
Throws an **Error** if the parameter is not of type 'object' or is null.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|------------------------------------------------------------------------|
| params | Object | &cross; | An object containin key-paired values representing query params to be added |

### removeParams

Removes specified query params from the common parameters Aurora instance. If no parameters are provided, removes all headers.<br>
Throws an **Error** if the parameter is not an array when provided.
| Param | Type | Nullable | Desc |
|-----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------|
| paramNames | Array<String> | &check; | An optional array containing the param names to be removed. If not provided, remove all parameters |

### addTimeout

Adds a timeout configuration to the Aurora instance defaults.<br>
Throws an **Error** if the parameter is not a Number.
| Param | Type | Nullable | Desc |
|---------|--------|----------|---------------------|
| timeout | Number | &check; | Timeout value in ms |

### removeTimeout

Removes the timeout configuration from the Aurora instance defaults.

### abortAll

Simply cancells all ongonig requests that are using the instance AbortController's signal.

### call

Makes an HTTP request.<br>
Returns a **Vue Computed** variable which contains a loading indicator, the endpoint response if exists or has been successfully called and and the linked AbortController.<br>
Throws an **Error** if the URL is either empty or null.<br>
Throws an **Error** if the method is not of type String.

| Param           | Type            | Nullable | Desc                                                                                                                                                                        |
| --------------- | --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| method          | String          | &cross;  | The HTTP method. (get/post/put/patch/delete)                                                                                                                                |
| url             | String          | &cross;  | The endpoint.url                                                                                                                                                            |
| headers         | Object          | &check;  | Additional headers to include in the request.                                                                                                                               |
| params          | Object          | &check;  | Additional query params to include in the request.                                                                                                                          |
| interval        | Number          | &check;  | The endpoint will be called repeatedly if this number is greater than 0. (Expressed in ms)                                                                                  |
| timeout         | Number          | &check;  | The call will expire after a certain timeout if is not resolved. Pass 0 or leave empty this param for no timeout. (Expressed in ms)                                         |
| AbortController | AbortController | &check;  | The call with be linked to an AbortController signal. If this param is left empty, it will use the object AbortController, which is the default controller for all request. |

### get post put patch delete

Alias for the **call( )** function that replace the **method** param for the function name.

```js
auroraInstance.call("get", "/api/data");
auroraInstance.get("/api/data");
```
