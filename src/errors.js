class AuroraPromiseError {
  constructor(axiosError) {
    this.name = "AuroraPromiseError";
    this.msg = axiosError.message;
    this.errorCode = axiosError.code;
    this.requestStatus = axiosError.request.status;
    this.responseStatus = axiosError.response.status;
    this.axiosInstanceConfig = axiosError.config;
  }
}

class AuroraInstanceError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuroraInstanceError";
  }
}

class AuroraClassError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuroraClassError";
  }
}

export { AuroraPromiseError, AuroraInstanceError, AuroraClassError };
