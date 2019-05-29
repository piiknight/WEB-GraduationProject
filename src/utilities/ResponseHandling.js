export const ResponseHandling = {
    extractErrorMessage(error) {
        console.log("extractErrorMessage: " + JSON.stringify(error.data.error.details.messages));
        var messages = error.data.error.details.messages[0] || undefined;
        const originalMessage = messages[Object.keys(messages)[0]] || undefined;
        if (messages === undefined || originalMessage === undefined) return "Can't read property";
        const defaultMessageIndex = originalMessage.lastIndexOf(
            "default message ["
        );
        return "[" + messages.name + "] " + originalMessage.slice(
            defaultMessageIndex + 17,
            originalMessage.length - 1
        );
    },

    extractErrorObject(error) {
        console.log("extractErrorMessage: " + JSON.stringify(error.data.error.details.messages));
        var messages = error.data.error.details.messages[0] || undefined;
        const originalMessage = messages[Object.keys(messages)[0]] || undefined;
        if (messages === undefined || originalMessage === undefined) return "Can't read property";
        const defaultMessageIndex = originalMessage.lastIndexOf(
            "default message ["
        );
        return {
            name: messages.name,
            messages: originalMessage.slice(
                defaultMessageIndex + 17,
                originalMessage.length - 1)
        }
    }
};
