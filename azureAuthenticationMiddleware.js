const aad = require('azure-ad-jwt');

let authMiddleware = (req, res, next) => {
  const audience = process.env.jwtAudience;
  const authorization = req.headers['authorization']
  if (!authorization) {
    res.status(401).send('Authorization header not present');
    return;
  }

  const jwt = authorization.split(" ")[1]; // The authorization header has structure 'Bearer xyz' where xyz is the token
  if(!jwt) {
    res.status(401).send('Error while retrieving the jwt token from header');
    return;
  }

  aad.verify(jwt, { audience: audience}, function(error, result) {
    if (result) {
      next();
    } else {
      res.status(401).send('Jwt token is invalid');
    }
  })
}

module.exports = authMiddleware;