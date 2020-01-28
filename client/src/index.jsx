import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PlayButtonApp from './components/playbutton/PlayButtonApp.jsx';
import SongArtistApp from './components/songartist/SongArtistApp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: [{
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
      }]
    }
  }

  //grab songs from db
  componentDidMount() {
    fetch('/song')
      .then(response => {
        return response.json();
      })
      .then(songs => {
        this.setState({
          song: songs
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <MainPlayerWrapper >

        <PlayPauseSongHeader>
          <PlayButtonApp />
          <SongArtistApp song={this.state.song[0]}/>
        </PlayPauseSongHeader>

        <DateTag>
          {/* Date */}
          {/* Tag */}
        </DateTag>

        <Album>
          {/* Album Art */}
        </Album>

        <WaveFormComments>
          {/* WaveForm */}
          {/* Comments */}
        </WaveFormComments>

      </MainPlayerWrapper>
    );
  }

}

//CSS Styled-components
const MainPlayerWrapper = styled.div`
  width: 85%;
  height: 350px;
  margin: auto;
  margin-top: 50px;
  background: linear-gradient(to right, #d3d3d3 -3%, #a9a9a9 105%);
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 20px;
`;

const PlayPauseSongHeader = styled.div`
  width: 40%;
  height: 60px;
  border: orange solid 1px;
  float: left;
  display: inline-block;
`;

const DateTag = styled.div`
  width: 10%;
  height: 60px;
  border: blue solid 1px;
  float: left;
  display: inline-block;
  margin-left: 230px;
`;

const Album = styled.div`
  width: 29%;
  height: 100%;
  border: red solid 1px;
  float: right;
  display: inline-block;
`;

const WaveFormComments = styled.div`
  width: 69%;
  height: 30%;
  border: green solid 1px;
  display: inline-block;
  position: relative;
  top: 50%;
`;


ReactDOM.render(<App />, document.getElementById('app'));