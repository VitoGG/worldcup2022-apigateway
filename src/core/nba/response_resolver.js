const request = require('request-promise-native');

async function resolveResponse(res, uri) {
    res.send({
        message: "aqui ficaria outra api (exemplo: " + uri
    })
}

module.exports = {
    resolveResponse
}