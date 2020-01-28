import React from 'react';
import styled from 'styled-components';

function SongArtistApp(props) {
  console.log(props);
  return (
    <Container>
      <Artist>{props.song.artist}</Artist>
      <SongTitle>{props.song.name}</SongTitle>
    </Container>
  );
}

const Container = styled.div`
  height: 100%
`;

const Artist = styled.div`
  height: 25%;
  background: black;
  color: lightgrey;
  padding: 4px;
  display: inline-table;
  margin-bottom: 5px;
`;

const SongTitle = styled.div`
  height: 75%;
  background: black;
  color: white;
  padding: 5px;
  display: table-cell;
  font-size: larger;
`;

export default SongArtistApp;