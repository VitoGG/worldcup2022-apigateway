const { resolveError } = require('./error_resolver')
const { resolveResponse } = require('./response_resolver')

const worldcupResolver = async (res, uri) => {
    try {
        await resolveResponse(res, uri)
    } catch(err) {
        resolveError(res, err)
    }
}

module.exports = {
    worldcupResolver
}