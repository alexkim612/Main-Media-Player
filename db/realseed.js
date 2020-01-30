const Song = require('./index.js');

//fake data generator
var faker = require('faker');

//comments creator
const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));
const commentGenerator = () => {
  comments = [];
  for (let j = 0; j < randomizer(20); j++) {
    newComment = {
      id: j,
      user: faker.internet.userName(),
      comment: faker.random.words(randomizer(25)),
      timeStamp: faker.random.number({ min: 2, max: this.runtime }),
      avatarpicURL: faker.random.image()
    }
    comments.push(newComment);
  }
  return comments;
}


//(Club) Modjo - Lady_(Pryda_Mashup)
let modjoladyprydamashup = new Song({
  name: 'Lady (Pryda Mashup)',
  artist: 'Modjo',
  posted: '2000-06-25',
  tag: 'House',
  runtime: '474',
  albumName: 'Lady (Hear Me Tonight)',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: commentGenerator()
});

//(Country) Blanco Brown - The Git Up
let blancobrownthegitup = new Song({
  name: 'The Git Up',
  artist: 'Blanco Brown',
  posted: '2019-05-03',
  tag: 'Country',
  runtime: '198',
  albumName: 'Honeysuckle & Lightning Bugs',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: commentGenerator()
});

//(Dance) Black Caviar ft G.L.A.M. - Alright Alright, Okay (Dirty)
let blackcaviaralrightalrightokay = new Song({
  name: 'Alright Alright, Okay (Dirty)',
  artist: 'Black Caviar ft G.L.A.M.',
  posted: '2019-06-07',
  tag: 'Dance',
  runtime: '184',
  albumName: 'Alright Alright, Okay',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: commentGenerator()
});

//(Dance) Calum Scott - Dancing On My Own (Tiesto Remix)
let calumscottdancingonmyowntiestoremix = new Song({
  name: 'Dancing On My Own (Tiesto Remix)',
  artist: 'Calum Scott',
  posted: '2016-04-15',
  tag: 'Dance',
  runtime: '224',
  albumName: 'Dancing On My Own (Tiesto Remix)',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: commentGenerator()
});

//(Dance) Fresh Mode, Montell Jordan - This Is How We Do It (Original Mix)
let freshmodemontelljordanthisishowwedoit = new Song({
  name: 'This Is How We Do It (Original Mix)',
  artist: 'Fresh Mode, Montell Jordan',
  posted: '2019-05-17',
  tag: 'Dance',
  runtime: '149',
  albumName: 'This Is How We Do It',
  albumURL: 'S3',
  songURL: 'S3',
  waveformURL: 'S3',
  comments: commentGenerator()
});

const songs = [modjoladyprydamashup, blancobrownthegitup, blackcaviaralrightalrightokay, calumscottdancingonmyowntiestoremix, freshmodemontelljordanthisishowwedoit];

Song.insertMany(
  songs, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('data seeded');
    }
  }
);