import React from 'react';
import styled from 'styled-components';

import PlayButtonApp from './playbutton/PlayButtonApp.jsx';
import SongArtistApp from './songartist/SongArtistApp.jsx';
import DateTagApp from './datetag/DateTagApp.jsx';
import AlbumPicture from './albumpicture/AlbumPictureApp.jsx';
import WaveFormApp from './waveform/WaveFormApp.jsx';
import mp3 from '/Users/alexanderkim/Desktop/MediaPlayer/songs/\(Club\)\ Modjo\ -\ Lady_\(Pryda_Mashup\).mp3';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: [],
      isPaused: true,
      currTime: 0
    }

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.changeCurrTime = this.changeCurrTime.bind(this);
    this.sound = new Audio(mp3);
  }

  //handle isPaused
  handlePlayPause() {
    this.setState({
      isPaused: this.state.isPaused ? false : true
    });
  }

  fetchData() {
    fetch('http://localhost:9000/song')
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

  //setstate of current time
  changeCurrTime() {
    this.sound.ontimeupdate = () => {
      this.setState({
        currTime: this.sound.currentTime
      });
    }
  }

  // grab songs from db
  componentDidMount() {
    this.fetchData();
  }

  render() {

    //play/pause music
    if (!this.state.isPaused) {
      this.sound.play();
    } else {
      this.sound.pause();
    }

    setInterval(this.changeCurrTime, 500);

    return (
      <MainPlayerWrapper >

        <PlayPauseSongHeader>
          <PlayButtonApp isPaused={this.state.isPaused} handlePlayPause={this.handlePlayPause} />
          {!this.state.song.length ? <div /> : <SongArtistApp song={this.state.song[0]} />}
        </PlayPauseSongHeader>

        <DateTag>
          {!this.state.song.length ? <div /> : <DateTagApp song={this.state.song[0]} />}
        </DateTag>

        <Album>
          {!this.state.song.length ? <div /> : <AlbumPicture song={this.state.song[0]} />}
        </Album>

        <WaveFormComments>
          {!this.state.song.length ? <div /> : <WaveFormApp songinfo={this.state.song[0]} song={this.sound} />}
          {/* Comments */}
        </WaveFormComments>



      </MainPlayerWrapper>
    );
  }

}

//CSS Styled-components
const MainPlayerWrapper = styled.div`
  max-width: 1240px;
  min-width: 960px;
  height: auto;
  margin: auto;
  background: linear-gradient(to right,#919191 -3%,#4b4a4a 105%);
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr) repeat(3, 10%);
  grid-template-rows: 20% auto 35%;
  grid-gap: 15px;
  position: fixed;
`;

const PlayPauseSongHeader = styled.div`
  // border: orange solid 1px;
  grid-column: span 3 / auto;
  display: flex;
`;

const DateTag = styled.div`
  // border: blue solid 1px;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
`;

const Album = styled.div`
  // border: red solid 1px;
  grid-column: span 3 / auto;
  grid-row: span 3 / auto;
`;

const WaveFormComments = styled.div`
  // border: green solid 1px;
  grid-column: span 4 / auto;
  grid-row-start: 3;
`;

export default App;
