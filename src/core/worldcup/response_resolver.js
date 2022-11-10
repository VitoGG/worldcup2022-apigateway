const request = require('request-promise-native');

async function resolveResponse(res, uri) {
    const user = await request(uri);
    res.json(user);
}

module.exports = {
    resolveResponse
}