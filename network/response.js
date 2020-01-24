exports.success = function (req, res, message, status) {
  const statusCode = status || 200;
  const statusMessage = message || '';

  res.status(status).send({
    error: false,
    status,
    body: message
  })
}

exports.error = function (req, res, message, status) {
  const statusCode = status || 500;
  const statusMessage = message || 'Internal Server Error';

  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: message
  })
}