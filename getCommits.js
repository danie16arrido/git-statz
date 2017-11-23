let request = require('superagent');
let cheerio = require('cheerio');

exports.scraper = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, resp, body) => {
            if (error) {
                reject(error);
            }
            let $ = cheerio.load(resp.text);
            let $commits = $('.js-contribution-graph').find('h2').text()

            // respond with the final result
            console.log('scraped data: ', $commits);
            resolve($commits);
        });
    })
}