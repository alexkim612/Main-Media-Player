import React from 'react';
import styled, { keyframes, css } from 'styled-components';

function WaveFormApp(props) {

  const isFilled = (index) => {
    if (index <= props.currTime / props.duration * 250) {
      return true;
    }
    return false;
  }

  return (
    <DataWrap isPaused={props.isPaused}>
      {props.wfdata.map((value, index) => <Bar
        height={value}
        key={index}
        id={index}
        active={isFilled(index)}
        onClick={(e) => props.handleClickTimeUpdate(e.target.id)}
      />)}
    </DataWrap>
  );
}

//CSS styled-components
const DataWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;

  opacity: ${props => props.isPaused ? '0.8;' : '1;'}

  &:hover {
    opacity: 1;
  }
`;

const SmoothTrans = keyframes`
  0% {
    left: 0;
    background: orange;
  }
  100% {
    left: 100%;
    background: orange;
  }
`;

const Bar = styled.div.attrs(props => ({
  style: {
    height: props.height + '%'
  },
}))`
  width: 0.4%;
  border: lightgrey solid 1px;
  background: white;
  ${({ active }) => active && `
  background: linear-gradient(to bottom, #db6a23, #db3f21, #dba386);
  `}
  //on hover while playing
`;

export default WaveFormApp;