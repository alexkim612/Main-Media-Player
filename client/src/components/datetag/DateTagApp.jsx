import React from 'react';
import styled from 'styled-components';

function DateTagApp(props) {
  return (
    <Container>
      <Date>9 months</Date>
      <Tag># whoa</Tag>
    </Container>
  );
}

//CSS Styled-components

const Container = styled.div`
  height: 100%;
`;

const Date = styled.div`
  height: 50%;
  color: white;
  display: inline-block;
  float: right
`;

const Tag = styled.div`
  background: lightgrey;
  color: white;
  padding: 3px;
  display: inline-block;
  float: right;
  border-radius: 25px;
`;

export default DateTagApp;