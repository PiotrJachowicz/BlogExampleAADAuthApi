const aad = require('azure-ad-jwt');

let authMiddleware = (req, res, next) => {
  const audience = process.env.jwtAudience;
  const authorization = req.headers['authorization']
  if (authorization) {
    const jwt = authorization.split(" ")[1];

    if (jwt) {
      aad.verify(jwt, { audience: audience}, function(error, result) {
        if (result) {
          next();
        } else {
          res.status(401).send('Jwt token is invalid');
        }
      })
    } else {
      res.status(401).send('Error while retrieving the jwt token from header');
    }
  } else {
    res.status(401).send('Authorization header not present')
  }
}

module.exports = authMiddleware;