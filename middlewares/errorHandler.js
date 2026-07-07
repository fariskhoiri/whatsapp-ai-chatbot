const logger = require("../utils/logger");

module.exports = (err, req, res, next) => {
    logger.error({
        requestId: req.requestId,
        message: err.message,
        stack: err.stack
    });

    res.status(500).json({
        success: false,
        requestId: req.requestId,
        message: "Internal Server Error"
    });
};