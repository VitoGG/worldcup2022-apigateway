function resolveError(res, err) {
    if (err.statusCode) {
        return res.status(err.statusCode).send({
            message: err.message
        });
    }
    return res.status(400).send({
        message: "Bad Request"
    });
}

module.exports = {
    resolveError
}