function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function retry(fn, retries = 3, delay = 1000) {

    let lastError;
    
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            if (i < retries - 1) {
                await sleep(delay);
            }
        }
    }
    
    throw lastError;
}
module.exports = retry;