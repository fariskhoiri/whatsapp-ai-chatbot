const express = require("express");
const router = express.Router();
const asyncHandler = require("../middlewares/asyncHandler");

const {
    receiveWebhook
} = require("../controllers/webhookController");

router.post(
    "/",
    asyncHandler(receiveWebhook)
);

module.exports = router;