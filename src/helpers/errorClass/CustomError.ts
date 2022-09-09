class CustomError extends Error {
  statusCode: number;
  error: string;
  message: string;

  constructor(statusCode: number, message: string, error: string) {
    super();
    this.statusCode = statusCode;
    this.error = error;
    this.message = message;
  }
}

export default CustomError;
