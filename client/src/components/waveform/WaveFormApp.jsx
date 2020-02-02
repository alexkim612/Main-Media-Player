import React from 'react';
import styled, {keyframes, css} from 'styled-components';

class WaveFormApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //250 indexes
      index: 0
    }

  }

  isFilled(index) {
    if(index <= this.props.currTime / this.props.duration * 250) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <DataWrap isPaused={this.props.isPaused}>
        {this.props.wfdata.map((value, index) => <Bar
          height={value}
          key={index}
          id={index}
          active={this.isFilled(index)}
          onClick={(e) => this.props.handleClickTimeUpdate(e.target.id)}
          />)}
      </DataWrap>
    );
  }
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