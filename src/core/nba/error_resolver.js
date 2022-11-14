function resolveError(res, err) {
    res.status(err.statusCode).send({
        message: err.message
    });
}

module.exports = {
    resolveError
}