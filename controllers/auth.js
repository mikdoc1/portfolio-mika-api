const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const request = require('request');
const config = require('../config');
const axios = require('axios');

// Authentication middleware
// This middleware will check access token in authorization headers
// of a request
// It will verify access token against Auth0 JSON web key set
exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: 'https://mrx21d8.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://mrx21d8.eu.auth0.com/api/v2/',
  issuer: 'https://mrx21d8.eu.auth0.com/',
  algorithms: ['RS256'],
});

// exports.checkRole = (role) => async (req, res, next) => {
//   const user = req.user;
//   if (user && user[config.AUTH0_NAMESPACE + '/roles'].includes(role)) {
//     next();
//   } else {
//     return res.status(401).send('You are not authorized to access this resource!');
//   }
// };

exports.getAccessToken = () => {
  const options = {
    method: 'POST',
    url: config.AUTH0_TOKEN_URL,
    headers: { 'content-type': 'application/json' },
    data: {
      grant_type: 'client_credentials',
      client_id: config.AUTH0_CLIENT_ID,
      client_secret: config.AUTH0_CLIENT_SECRET,
      audience: config.AUTH0_AUDIENCE,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

exports.getAuth0User = (accessToken, userId) => {
  const options = {
    method: 'GET',
    url: `${config.AUTH0_DOMAIN}/api/v2/users/${userId}`,
    headers: { authorization: `Bearer ${accessToken}` },
  };

  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};
