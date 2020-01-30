import React from 'react';
import styled from 'styled-components';
import img from './waveformtransparent.png';


function WaveFormApp(props) {
  return(
    <Waveform src={img}>
    </Waveform>
  );
}

const Waveform = styled.img`
  height: 100%;
  width: 100%;
`;

export default WaveFormApp;