const router = require('express').Router()
const { worldcupResolver } = require('./core/index');
const nbaResolver = require('./core/nba/request_resolver');


router.all('*', async (req, res, next) => {
    const path = req.originalUrl.slice(9);
    const uri = `http://nba-api.com${path}`
    nbaResolver(res, uri);
})

module.exports = router