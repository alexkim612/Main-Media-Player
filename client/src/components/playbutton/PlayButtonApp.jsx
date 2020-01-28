import React from 'react';
import styled from 'styled-components';

function PlayButtonApp(props) {
  return (
    <PlayPauseButton>
      play
    </PlayPauseButton>
  );
}

//CSS Styled-components
const PlayPauseButton = styled.button`
display: flex;
align-self: center;
height: 65px;
width: 65px;
background-color: #ff5722;
border-radius: 50%;
border: 1px solid ff5722;

&:hover {
  background: #f44336;
}
`;

export default PlayButtonApp;

