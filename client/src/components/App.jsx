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
      currTime: 0,
      waveformData: []
    }

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.changeCurrTime = this.changeCurrTime.bind(this);
    this.setWaveformData = this.setWaveformData.bind(this);
    this.changeToMinutes = this.changeToMinutes.bind(this);
    this.sound = new Audio(mp3);
  }

  //handle isPaused
  handlePlayPause() {
    const interval = () => { setInterval(this.changeCurrTime, 500) };

    if (this.state.isPaused) {
      interval();
    } else {
      clearInterval(interval);
    }

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

  setWaveformData() {
    const freqData = [];
    for (let i = 0; i < 250; i++) {
      freqData.push(Math.floor(Math.random() * Math.floor((1000 - 300)) + 300) / 10);
    }
    this.setState({
      waveformData: freqData
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

  changeToMinutes(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60).toString();
    return `${min}:${sec.padStart(2, '0')}`;
  }

  // grab songs from db
  componentDidMount() {
    this.fetchData();
    this.setWaveformData();
  }

  render() {

    //play/pause music
    if (!this.state.isPaused) {
      this.sound.play();
    } else {
      this.sound.pause();
    }

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

          <TimeStampContainer>
            <CurrentTimeStamp>{this.changeToMinutes(this.state.currTime)}</CurrentTimeStamp>
            {!this.state.song.length ? <div/> : <DurationTimeStamp>{this.changeToMinutes(this.sound.duration)}</DurationTimeStamp>}
          </TimeStampContainer>

          {/* Comments */}

          {!this.state.song.length ? <div /> : <WaveFormApp songinfo={this.state.song[0]} song={this.sound} wfdata={this.state.waveformData} />}

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
  grid-template-rows: 20% auto 32%;
  grid-gap: 15px;
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
  margin-left: 15px;
`;

const WaveFormComments = styled.div`
  // border: green solid 1px;
  grid-column: span 4 / auto;
  grid-row-start: 3;
  margin-bottom: 25px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;

const TimeStampContainer = styled.div`
  width: 101%;
  height: 13px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  top: 55%;
  border-bottom: black solid 1px;
`;

const TimeStamp = styled.div`
  height: 100%;
  width: 28px;
  border: black solid 1px;
  background-color: black;
  font-size: 12px;
  text-align: center;
`;

const CurrentTimeStamp = styled(TimeStamp)`
  color: #f44336;
`;

const DurationTimeStamp = styled(TimeStamp)`
  color: darkgrey;
`;

export default App;
