const model = require('./model.js');

module.exports = {
  song: {
    get: (req, res) => {
      model.song.get((error, data) => {
        if (error) {
          console.log(error);
        } else {
          res.send(data);
        }
      });
    }
  }
}