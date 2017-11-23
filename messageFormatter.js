'use strict';

module.exports = (data, user) => {
    //delete two or more whitespaces
    data = data.replace(/\s{2,10}/g, ' ')
    //delete end of line
    data = data.replace(/\r?\n|\r/, '')
    //taken from slack formatter
    const attachments = {
        title: user + "'s GitHub account",
        text: "has " + data,
        mrkdwn_in: [
            "text"
        ]
    }

    const response ={
        attachments: [attachments]
    }
    return response;
}