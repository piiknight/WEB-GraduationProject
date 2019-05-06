export const ResponseHandling = {
  extractErrorMessage(error) {
    const originalMessage = error.data.message;
    const defaultMessageIndex = originalMessage.lastIndexOf(
      "default message ["
    );
    return originalMessage.slice(
      defaultMessageIndex + 17,
      originalMessage.length - 1
    );
  }
};
