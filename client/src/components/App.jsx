import React from 'react';
import styled from 'styled-components';

import PlayButtonApp from './playbutton/PlayButtonApp.jsx';
import SongArtistApp from './songartist/SongArtistApp.jsx';
import DateTagApp from './datetag/DateTagApp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: []
    }
  }

  // grab songs from db
  componentDidMount() {
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

  render() {
    return (
      <MainPlayerWrapper >

        <PlayPauseSongHeader>
          <PlayButtonApp />
          {!this.state.song.length ? <div /> : <SongArtistApp song={this.state.song[0]}/>}
        </PlayPauseSongHeader>

        <DateTag>
          {!this.state.song.length ? <div /> : <DateTagApp song={this.state.song[0]}/>}
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
  display: grid;
  grid-template-columns: repeat(4, 1fr) repeat(3, 10%);
  grid-template-rows: 20% auto 35%;
  grid-gap: 15px;
`;

const PlayPauseSongHeader = styled.div`
  border: orange solid 1px;
  grid-column: span 3 / auto;
  display: flex;
`;

const DateTag = styled.div`
  border: blue solid 1px;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
`;

const Album = styled.div`
  border: red solid 1px;
  grid-column: span 3 / auto;
  grid-row: span 3 / auto;
`;

const WaveFormComments = styled.div`
  border: green solid 1px;
  grid-column: span 4 / auto;
  grid-row-start: 3;
`;

export default App;
