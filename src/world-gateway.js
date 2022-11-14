const router = require('express').Router()
const { worldcupResolver } = require('./core/index')


router.all('*', async (req, res, next) => {
    const path = req.originalUrl.slice(9);
    const uri = `http://api.cup2022.ir${path}`
    worldcupResolver(res, uri);
})

module.exports = router