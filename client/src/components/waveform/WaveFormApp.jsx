import React from 'react';
import styled from 'styled-components';

function WaveFormApp(props) {

  return (

    <DataWrap >
      {props.wfdata.map((value, i) => <Bar height={value} key={i} />)}
    </DataWrap>

  );
}

const Bar = styled.div.attrs(props => ({
  style: {
    height: props.height + '%'
  },
}))`
  width: 0.4%;
  background-color: white;
  border: lightgrey solid 0.5px;
`;

const DataWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const test = styled.canvas`

`;

export default WaveFormApp;