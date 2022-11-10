const { worldcupResolver } = require('./worldcup/request_resolver')
const { nbaResolver } = require('./nba/request_resolver')
const healthCheck= require("./healthchecker")

module.exports = {
    worldcupResolver,
    nbaResolver,
    healthCheck
}