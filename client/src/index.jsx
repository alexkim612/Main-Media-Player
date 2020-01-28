import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PlayButtonApp from './components/playbutton/PlayButtonApp.jsx';
import SongArtistApp from './components/songartist/SongArtistApp.jsx';


import DateTagApp from './components/datetag/DateTagApp.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: []
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
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 25%;
  grid-gap: 15px;
`;

const PlayPauseSongHeader = styled.div`
  border: orange solid 1px;
  grid-column: span 3 / auto;
`;

const DateTag = styled.div`
  border: blue solid 1px;
  margin-left: 230px;
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


ReactDOM.render(<App />, document.getElementById('app'));