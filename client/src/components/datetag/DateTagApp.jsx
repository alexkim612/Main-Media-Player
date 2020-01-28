import React from 'react';
import styled from 'styled-components';

function DateTagApp(props) {
  const remainingDate = new Date(props.song.posted);
  console.log(remainingDate);
  return (
    <Container>
      {/* <Dated>{remainingDate.setDate}</Date> */}
      <Tag>#{props.song.tag}</Tag>
    </Container>
  );
}

//CSS Styled-components

const Container = styled.div`
  height: 100%;
`;

const Dated = styled.div`
  height: 50%;
  color: white;
  display: inline-block;
  float: right
`;

const Tag = styled.div`
  background: lightgrey;
  color: white;
  padding: 2px 8px;
  display: inline-block;
  float: right;
  border-radius: 25px;
`;

export default DateTagApp;