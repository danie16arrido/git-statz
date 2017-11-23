'use strict';
const authorizer = require('./authorizer');
const getCommits = require('./getCommits');
const formatedMessage = require('./messageFormatter')
const param = require('./getParams.js');

module.exports.authorization = (event, context, callback) => {
  const code = event.queryStringParameters.code;
  console.log(code);

  authorizer(code)
    .then(() => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Authorization was called',
          input: event,
        }),
      };

      callback(null, response);
    })
    .catch((error) => {
      console.log("Authentication error Slack's OAuth");

      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: error,
          input: event,
        }),
      };

      callback(null, response);
    });
};

module.exports.git_statz = (event, context, callback) => {
  console.log('Github API called');

  let user = param.fromUri(event.body)
  let url = 'https://github.com/' + user;

  getCommits.scraper(url)
    .then((data) => {
      console.log('data from scraper received ');
      const message = formatedMessage(data, user)

      const response = {
        statusCode: 200,
        body: JSON.stringify(message),
      };
      callback(null, response);
    })
    .catch((error) => {
      console.log('Error scraping data', error);
    })
}
