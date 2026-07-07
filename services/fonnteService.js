const axios = require("../config/axios");
const config = require("../config/env");

async function sendMessage(target, message) {
    return axios.post(

        "https://api.fonnte.com/send",
        {
            target,
            message
        },
        
        {
            headers: {
                Authorization: config.fonnte.token
            }
        }
    );
}

module.exports = {
    sendMessage
};