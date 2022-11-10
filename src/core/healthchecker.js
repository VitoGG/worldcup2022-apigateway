/**
 * 
 * @param {Request} req 
 * @param {*} res 
 * @param {*} next 
 */
const healthCheck = (req, res, next) => {
    console.log(req.body);
    next();
} 

module.exports = healthCheck