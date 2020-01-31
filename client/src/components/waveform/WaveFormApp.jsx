import React from 'react';
import styled from 'styled-components';

class WaveFormApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }

  }

  render() {
    return (
      <DataWrap isPaused={this.props.isPaused}>
        {this.props.wfdata.map((value, i) => <Bar height={value} key={i} />)}
      </DataWrap>
    );
  }
}

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

const Bar = styled.div.attrs(props => ({
  style: {
    height: props.height + '%'
  },
}))`
  width: 0.4%;
  background-color: white;
  border: lightgrey solid 0.5px;

  //on hover while playing
`;

export default WaveFormApp;