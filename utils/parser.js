function extractMessage(data) {

    try {
        // Langflow terbaru
        const outputs = data?.outputs?.[0]?.outputs?.[0];
        if (outputs?.results?.message?.text) {
            return outputs.results.message.text.trim();
        }
        if (outputs?.messages?.[0]?.message) {
            return outputs.messages[0].message.trim();
        }
        // fallback
        if (data?.message) {
            return data.message.trim();
        }
        return null;

    } catch {
        return null;
    }
}

module.exports = {
    extractMessage
};