import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PlayButtonApp from './components/playbutton/PlayButtonApp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <MainPlayerWrapper >

        <PlayPauseSongHeader>
          {/* play/pause button */}
          {/* song title and artist */}
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
  background-color: orange;
  float: left;
  display: inline-block;
`;

const DateTag = styled.div`
  width: 10%;
  height: 60px;
  background-color: blue;
  float: left;
  display: inline-block;
  margin-left: 230px;
`;

const Album = styled.div`
  width: 29%;
  height: 100%;
  background-color: yellow;
  float: right;
  display: inline-block;
`;

const WaveFormComments = styled.div`
  width: 69%;
  height: 30%;
  background-color: green;
  display: inline-block;
  position: relative;
  top: 50%;
`;


ReactDOM.render(<App />, document.getElementById('app'));