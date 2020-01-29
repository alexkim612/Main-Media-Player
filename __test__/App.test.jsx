import React from 'react';
import { shallow, mount, render } from 'enzyme';
import fetch from 'jest-fetch-mock';
import App from '../client/src/components/App.jsx';


describe('Unit Tests', () => {
  //mock a request using jest-fetch-mock
  jest.mock('jest-fetch-mock', () => {
    const songs = [
      {
        name: 'Dancing Queen',
        artist: 'ABBA',
        posted: '1999-02-15',
        tag: 'pop',
        albumName: 'ABBA Gold',
        albumURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7.jpg?ts=1561547030',
        songURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7.jpg?ts=1561547030',
        waveformURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7.jpg?ts=1561547030',
        comments: [
          { id: 0, user: 'Abba lover', comment: 'I love ABBA!!', timeStamp: '90', avatarpicURL: 'S3' },
          { id: 1, user: 'Queen', comment: 'I feel like a queen', timeStamp: '45', avatarpicURL: 'S3' },
          { id: 2, user: 'Dancer', comment: 'Im dancing!', timeStamp: '23', avatarpicURL: 'S3' },
          { id: 3, user: 'King', comment: 'should be dancingking', timeStamp: '14', avatarpicURL: 'S3' },
          { id: 4, user: 'Singer', comment: 'should be singingqueen', timeStamp: '118', avatarpicURL: 'S3' }]
      },
      {
        name: 'I Dont Want To Miss A Thing',
        artist: 'Aerosmith',
        posted: '1998-07-28',
        tag: 'rock/pop',
        albumName: 'I Dont Want To Miss A Thing',
        albumURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7.jpg?ts=1561547030',
        songURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7.jpg?ts=1561547030',
        waveformURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jazz-dark-album-cover-template-966020e215ba3c34a2b5d68b2d386cd7.jpg?ts=1561547030',
        comments: [
          { id: 0, user: 'Rockon', comment: 'hellyea', timeStamp: '1', avatarpicURL: 'S3' },
          { id: 1, user: 'A', comment: 'bumpin', timeStamp: '3', avatarpicURL: 'S3' },
          { id: 2, user: 'B', comment: 'to', timeStamp: '5', avatarpicURL: 'S3' },
          { id: 3, user: 'D', comment: 'the beat', timeStamp: '7', avatarpicURL: 'S3' },
          { id: 4, user: 'YAYAYAYAYYAYAAA', comment: 'im crying', timeStamp: '87', avatarpicURL: 'S3' },
          { id: 5, user: 'shalala', comment: 'shimmyshimmy', timeStamp: '64', avatarpicURL: 'S3' },
          { id: 6, user: 'rockgod', comment: 'my hair so long, dont cur', timeStamp: '100', avatarpicURL: 'S3' },]
      }
    ];

    return {
      get: jest.fn(() => Promise.resolve(songs)),
    };
  });

  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});

describe('Integration Tests', () => {

});
