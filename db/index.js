//mongodb
var mongoose = require('mongoose');

//open database @mediaplayer
mongoose.connect('mongodb://database/mediaplayer', {useNewUrlParser: true});

//log if opened or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mediaplayer Databased')
});

//create schema
const songSchema = mongoose.Schema({
  name: String,
  artist: String,
  posted: { type: Date, default: Date.now },
  tag: String,
  runtime: String,
  albumName: String,
  albumURL: String,
  songURL: String,
  waveformURL: String,
  comments: [{ id: Number, user: String, comment: String, timeStamp: String, avatarpicURL: String }]
});

const Song = mongoose.model('Song', songSchema);


module.exports = Song;