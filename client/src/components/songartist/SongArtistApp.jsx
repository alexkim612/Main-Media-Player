import React from 'react';
import styled from 'styled-components';

function SongArtistApp(props) {
  return (
    <Container>
      <div>
        <Artist>{props.song.artist}</Artist>
      </div>
      <SongTitle>{props.song.name}</SongTitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 4px;
`;

const Artist = styled.div`
  display: inline-block;
  background-color: black;
  color: lightgrey;
  padding: 4px;
`;

const SongTitle = styled.div`
  display: flex;
  flex-basis: auto;
  background-color: black;
  color: white;
  padding: 5px;
  font-size: larger;
`;

export default SongArtistApp;