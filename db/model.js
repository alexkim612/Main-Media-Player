const Song = require('./index.js');

module.exports = {
  song: {
    get: (callback) => {
      Song.find((err, data) => {
        if (err) {
          console.log('Could not find data in DB')
          callback(err);
        } else {
          console.log(data);
          callback(null, data);
        }
      });
    }
  }
}