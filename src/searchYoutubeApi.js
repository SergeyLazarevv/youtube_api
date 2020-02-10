var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }
console.log('agggga')
  var params = {
    part: 'snippet',
    maxResults: 50,
    key: options.key,
    q: options.term,
    type: 'video'
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      //console.log(response)
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
}
//axios.get
