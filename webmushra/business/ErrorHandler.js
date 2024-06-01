class ErrorHandler {
  constructor() {
    this.errors = []
  }

  sendError(message) {
    this.errors.push(message)
    console.error("ERROR: " + message)
  }

  errorOccurred() {
    return this.errors.length > 0
  }

  getErrors() {
    return this.errors
  }
}

export default ErrorHandler
