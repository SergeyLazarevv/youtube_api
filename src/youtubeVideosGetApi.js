var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/videos';

module.exports = function (options, callback) {

  var params = {
    chart:'mostPopular',
    part: 'snippet,statistics',
    maxResults: 50,
    key: options.key
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
}
