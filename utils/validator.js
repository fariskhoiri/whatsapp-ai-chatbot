function validateIncomingMessage(payload) {
    if (!payload) {
        return false;
    }

    if (!payload.sender) {
        return false;
    }

    if (!payload.message) {
        return false;
    }

    if (payload.message.trim().length === 0) {
        return false;
    }

    return true;
}
module.exports = {
    validateIncomingMessage
};