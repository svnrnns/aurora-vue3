import Aurora from './Aurora.js';

// Aurora Instance
const defaultAurora = new Aurora();

// Hooks
const useCall = (method, endpoint, headers, params, config, abortController) =>
  defaultAurora.call(
    method,
    endpoint,
    headers,
    params,
    config,
    abortController
  );
const useGet = (endpoint, headers, params, config, abortController) =>
  defaultAurora.get(endpoint, headers, params, config, abortController);
const usePost = (endpoint, headers, params, config, abortController) =>
  defaultAurora.post(endpoint, headers, params, config, abortController);
const usePut = (endpoint, headers, params, config, abortController) =>
  defaultAurora.put(endpoint, headers, params, config, abortController);
const usePatch = (endpoint, headers, params, config, abortController) =>
  defaultAurora.patch(endpoint, headers, params, config, abortController);
const useDelete = (endpoint, headers, params, config, abortController) =>
  defaultAurora.delete(endpoint, headers, params, config, abortController);

export default Aurora;
export { useCall, useGet, usePost, usePut, usePatch, useDelete };
