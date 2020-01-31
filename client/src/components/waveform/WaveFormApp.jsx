import React from 'react';
import styled from 'styled-components';
import img from './waveformtransparent.png';

function WaveFormApp(props) {
  const freqData = [];

  for (let i = 0; i < 200; i++) {
    freqData.push(Math.floor(Math.random() * Math.floor((1000 - 300)) + 300) / 10);
  }

  console.log(freqData);

  return (
    // <div>
      <DataWrap >
      {freqData.map((value, i) => <Bar height={value} key={i}/>)}
      </DataWrap>
      /*<Waveform src={img}>
      </Waveform> */
    // </div>
  );
}

const Waveform = styled.img`
  height: 100%;
  width: 100%;
`;

const Bar = styled.div`
  width: 0.5%;
  height: ${props => props.height}%;
  background-color: white;
  border: lightgrey solid 0.5px;
`;

const DataWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  border: black solid 1px;
`;

const test = styled.canvas`

`;

export default WaveFormApp;