const logger = require("../utils/logger");

const {
    validateIncomingMessage
} = require("../utils/validator");

const {
    askAI
} = require("../services/langflowService");

const {
    sendMessage
} = require("../services/fonnteService");
const requestId = require("../middlewares/requestId");

async function receiveWebhook(req, res) {
    const payload = req.body;
    res.status(200).json({
        success: true
    });

    if (!validateIncomingMessage(payload)) {
        logger.warn({
            requestId: req.requestId,
            payload
        });
        return;
    }

    const sender = payload.sender;
    const message = payload.message.trim();
    logger.info({
        requestId: req.requestId,
        sender,
        message
    });

    const reply = await askAI(
        message,
        sender
    );

    logger.info({
        requestId: req.requestId,
        aiReply: reply
    });

    await sendMessage(
        sender,
        reply
    );

    logger.info({
        requestId: req.requestId,
        status: "Message sent"
    });
}

module.exports = {
    receiveWebhook
};
