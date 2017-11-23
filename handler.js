'use strict';

module.exports.authorization = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Authorization was called!',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.git_statz = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'git statz was called!',
      input: event,
    }),
  };

  callback(null, response);
};
