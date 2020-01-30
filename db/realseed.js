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
  albumURL: 'https://soundclone-main-media-player.s3.us-west-1.amazonaws.com/album-art/%28Club%29%20Modjo%20-%20Lady_%28Pryda_Mashup%29.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLWVhc3QtMSJHMEUCIQCYpcOtg8hYl4%2BhKRit2dRA3EFcPCtl9gr0kXjjUFN0QwIgLkoAYHSkYFSJpDl2rcOc1yCLpRskQKV55gRbfLWYs3gqlgII4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzMyNDkzODcwMjIiDGW0omZIZJNEUaP%2FTSrqATSVnKgUgsM6CWPRXTu8BmOFWLu4ob7PCfgW80BSw338lW9JYNcEelv6wd6k9hwX%2FWO28HZBEkAJSZ7eSTIykO8cmDVWzcLHREL2pnJ8yKbeH8M%2FW9kJNkO%2Bhv%2FI0n3OjK%2FyAGUKajJ9mvEGHqD5yPVBp%2FGjXNRCpoyvrDLbW74sZ%2BTX8%2FL3%2FX1Mzdxa%2BAU8ZQclMbhWa5e3wmxX9Q2OExpmNLsxDncRxxFTbJasNGGtYMF72b0iDW0SYQ9GebI8PxXbBQ08mCf4ebAjWwVY0skweZyHSQySYSekbCiNQSACuk2PRMajbN2o9DCf5cjxBTqCA4RqZa6%2Fs%2FiWFJgb43qtbsbY3JBCspzcVyiAUBsYeX%2FrGlk1mQN0A%2BvdbWT1kqf0cODngAFJcicLexupmhnDRDfYoZKJqkEevMX7aizcTCZarnYa9FWkYLXvCyjy7vInP3vIfJms2k5cJGGOfs5K85VnlLsXPB9M458fpGemIK%2BUYMwoQvkmL2whfRPkNFLSiLFUYz%2BXtL8asVfRr61fpWSfF0PJFS9fEl03CKlAltf7KK%2BaZTdP1bKr6xxLUhdjYJHcxg0g4T%2F3AvbWiokxBwR8PJMceDzvS6uBlGqhJfrZ10z5N1zSq1o7Qzdsb0U1fhpSSXr16%2B0iErJlg97cCYZ6OAIpxqdL8n0yRgCbdTSs9Gdyp2qoNpVA9W9c6%2Bkzco52neIQSDKWqIbcjEfa%2BN6yJZnL1%2FEfA2eXDFZXITe426YA6Cn2VL2RyZnCeEzL5K5xebGidd92EA7XynHR4hKGCUDwUqGyBPP%2FByKKJ7K8f9JtbEyAAXD9JX%2FL%2FKOWsq1Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200130T034009Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMTV7GIHBAINRE4T%2F20200130%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=3a1ef441dc4d815051412fa8793648168f7da56d73bb7739c70e63f1dcc3dbae',
  songURL: 'https://soundclone-main-media-player.s3.us-west-1.amazonaws.com/songs/%28Club%29%20Modjo%20-%20Lady_%28Pryda_Mashup%29.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLWVhc3QtMSJHMEUCIQCYpcOtg8hYl4%2BhKRit2dRA3EFcPCtl9gr0kXjjUFN0QwIgLkoAYHSkYFSJpDl2rcOc1yCLpRskQKV55gRbfLWYs3gqlgII4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzMyNDkzODcwMjIiDGW0omZIZJNEUaP%2FTSrqATSVnKgUgsM6CWPRXTu8BmOFWLu4ob7PCfgW80BSw338lW9JYNcEelv6wd6k9hwX%2FWO28HZBEkAJSZ7eSTIykO8cmDVWzcLHREL2pnJ8yKbeH8M%2FW9kJNkO%2Bhv%2FI0n3OjK%2FyAGUKajJ9mvEGHqD5yPVBp%2FGjXNRCpoyvrDLbW74sZ%2BTX8%2FL3%2FX1Mzdxa%2BAU8ZQclMbhWa5e3wmxX9Q2OExpmNLsxDncRxxFTbJasNGGtYMF72b0iDW0SYQ9GebI8PxXbBQ08mCf4ebAjWwVY0skweZyHSQySYSekbCiNQSACuk2PRMajbN2o9DCf5cjxBTqCA4RqZa6%2Fs%2FiWFJgb43qtbsbY3JBCspzcVyiAUBsYeX%2FrGlk1mQN0A%2BvdbWT1kqf0cODngAFJcicLexupmhnDRDfYoZKJqkEevMX7aizcTCZarnYa9FWkYLXvCyjy7vInP3vIfJms2k5cJGGOfs5K85VnlLsXPB9M458fpGemIK%2BUYMwoQvkmL2whfRPkNFLSiLFUYz%2BXtL8asVfRr61fpWSfF0PJFS9fEl03CKlAltf7KK%2BaZTdP1bKr6xxLUhdjYJHcxg0g4T%2F3AvbWiokxBwR8PJMceDzvS6uBlGqhJfrZ10z5N1zSq1o7Qzdsb0U1fhpSSXr16%2B0iErJlg97cCYZ6OAIpxqdL8n0yRgCbdTSs9Gdyp2qoNpVA9W9c6%2Bkzco52neIQSDKWqIbcjEfa%2BN6yJZnL1%2FEfA2eXDFZXITe426YA6Cn2VL2RyZnCeEzL5K5xebGidd92EA7XynHR4hKGCUDwUqGyBPP%2FByKKJ7K8f9JtbEyAAXD9JX%2FL%2FKOWsq1Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200130T034549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMTV7GIHBAINRE4T%2F20200130%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=a3d1de822bd0c964445f0f1cb494bdbccf679a3901ee75b5c20548ac7ff13535',
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