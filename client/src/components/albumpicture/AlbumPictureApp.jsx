import React from 'react';
import styled from 'styled-components';

function AlbumPictureApp(props) {
  return(
    <CoverArt src={`${props.song.albumURL}`}/>
  );
}

//CSS Styled-components

const CoverArt = styled.img`
  width: 100%;
`;

export default AlbumPictureApp