const path = require('path');

const Song = require('./index.js');

//fake data generator
var faker = require('faker');

/*
-----------Fake data creation-----------
*/

//store fake data
const fakedata = [];

//create fake data
for (let i = 0; i < 100; i++) {
  const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));

  const runtime = faker.random.number({min: 100, max: 300});
  
  //create comments
  var comments = [];
  for (let j = 0; j < randomizer(25); j++) {
    newComment = {
      id: j,
      user: faker.internet.userName(),
      comment: faker.random.words(randomizer(25)),
      timeStamp: faker.random.number({min: 2, max: runtime}),
      avatarpicURL: faker.random.image()
    }
    comments.push(newComment);
  }

  //create new song with comments
  let newSong = {
    name: faker.random.words(randomizer(8)),
    artist: faker.fake("{{name.firstName}}, {{name.lastName}}"),
    posted: faker.date.past(),
    tag: faker.random.words(1),
    runtime: runtime,
    albumName: faker.random.words(randomizer(3)),
    albumURL: 'https://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg',
    songURL: faker.internet.url(),
    // waveformURL: "client/src/components/waveform/waveformtransparent.png",
    comments: comments
  }
  fakedata.push(newSong);
}


let dancingqueen = new Song({
  name: 'Dancing Queen',
  artist: 'ABBA',
  posted: '1999-02-15',
  tag: 'pop',
  albumName: 'ABBA Gold',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: [
    { id: 0, user: 'Abba lover', comment: 'I love ABBA!!', timeStamp: '90', avatarpicURL: 'S3' },
    { id: 1, user: 'Queen', comment: 'I feel like a queen', timeStamp: '45', avatarpicURL: 'S3' },
    { id: 2, user: 'Dancer', comment: 'Im dancing!', timeStamp: '23', avatarpicURL: 'S3' },
    { id: 3, user: 'King', comment: 'should be dancingking', timeStamp: '14', avatarpicURL: 'S3' },
    { id: 4, user: 'Singer', comment: 'should be singingqueen', timeStamp: '118', avatarpicURL: 'S3' }]
});

let idontwanttomissathing = new Song({
  name: 'I Dont Want To Miss A Thing',
  artist: 'Aerosmith',
  posted: '1998-07-28',
  tag: 'rock/pop',
  albumName: 'I Dont Want To Miss A Thing',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: [
    { id: 0, user: 'Rockon', comment: 'hellyea', timeStamp: '1', avatarpicURL: 'S3' },
    { id: 1, user: 'A', comment: 'bumpin', timeStamp: '3', avatarpicURL: 'S3' },
    { id: 2, user: 'B', comment: 'to', timeStamp: '5', avatarpicURL: 'S3' },
    { id: 3, user: 'D', comment: 'the beat', timeStamp: '7', avatarpicURL: 'S3' },
    { id: 4, user: 'YAYAYAYAYYAYAAA', comment: 'im crying', timeStamp: '87', avatarpicURL: 'S3' },
    { id: 5, user: 'shalala', comment: 'shimmyshimmy', timeStamp: '64', avatarpicURL: 'S3' },
    { id: 6, user: 'rockgod', comment: 'my hair so long, dont cur', timeStamp: '100', avatarpicURL: 'S3' },]
});

let smackthat = new Song({
  name: 'Smack That',
  artist: 'Akon',
  posted: '2006-10-06',
  tag: 'pop',
  albumName: 'Smack That',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: [
    { id: 0, user: 'smack', comment: 'smack', timeStamp: '30', avatarpicURL: 'S3' },
    { id: 1, user: 'them', comment: 'them', timeStamp: '33', avatarpicURL: 'S3' },
    { id: 2, user: 'booty', comment: 'booty', timeStamp: '36', avatarpicURL: 'S3' },
    { id: 3, user: 'cheeks', comment: 'cheeks', timeStamp: '39', avatarpicURL: 'S3' },
    { id: 4, user: 'pewpewpew', comment: 'i know you want me', timeStamp: '2', avatarpicURL: 'S3' },
    { id: 5, user: 'gimmiegimmie', comment: 'look back and watch me', timeStamp: '6', avatarpicURL: 'S3' },
    { id: 6, user: 'xXx420xXx', comment: 'blazeupXxXX', timeStamp: '54', avatarpicURL: 'S3' },]
});

let baby = new Song({
  name: 'Baby',
  artist: 'Justin Beiber',
  posted: '2009-03-17',
  tag: 'banger3000',
  albumName: 'My Environment',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: [
    { id: 0, user: 'oh', comment: 'this song sucks', timeStamp: '24', avatarpicURL: 'S3' },
    { id: 1, user: 'em', comment: 'my ears are bleeding', timeStamp: '9', avatarpicURL: 'S3' },
    { id: 2, user: 'gee', comment: 'im crying from happiness', timeStamp: '64', avatarpicURL: 'S3' },
    { id: 3, user: 'this', comment: '...', timeStamp: '39', avatarpicURL: '76' },
    { id: 4, user: 'song', comment: 'LET ME AT THIS KID', timeStamp: '7', avatarpicURL: 'S3' },
    { id: 5, user: 'makes', comment: 'AHHHHHHHH', timeStamp: '7', avatarpicURL: 'S3' },
    { id: 6, user: 'me', comment: 'why', timeStamp: '23', avatarpicURL: 'S3' },
    { id: 7, user: 'gag', comment: 'DOES ANYONE HAVE ANY CHEESE', timeStamp: '101', avatarpicURL: 'S3' },
    { id: 8, user: 'but', comment: 'did you guys see the new batman movie', timeStamp: '111', avatarpicURL: 'S3' },
    { id: 9, user: 'iloveit', comment: 'i got pinkeye from listening to this', timeStamp: '89', avatarpicURL: 'S3' },
    { id: 10, user: 'belieber', comment: 'OMGOMGOMG I LOVE JBIEBS, MARRY ME HO', timeStamp: '2', avatarpicURL: 'S3' }]
});

let smackthattwo = new Song({
  name: 'Smack That Two',
  artist: 'Akon',
  posted: '2006-10-06',
  tag: 'pop',
  albumName: 'Smack That',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: [
    ]
});

Song.insertMany(
  fakedata, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('data seeded');
    }
  }
);