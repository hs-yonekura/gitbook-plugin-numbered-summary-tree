const cheerio = require('cheerio');

module.exports = {
  hoos: {
    'page:before': function(page) {
      console.log(JSON.stringfy(page));
    }
  }
}
