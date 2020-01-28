import React from 'react';
import styled from 'styled-components';

function DateTagApp(props) {
  const dateDiff = () => {
    const postedDate = new Date(props.song.posted);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - postedDate);
    //current date - posted date = remaining date
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    //if remaining date < 30 days: return #days
    if (diffDays <= 30) {
      return diffDays === 1 ? `${Math.floor(diffDays)} day ago` : `${Math.floor(diffDays)} days ago`;
      // if remaining date > 30 days and < 365 days: return #months
    } else if (diffDays > 30 && diffDays <= 365) {
      let months = Math.floor(diffDays/30);
      return months === 1 ? `${months} month ago` : `${months} months ago`;
      // if remaining date > 365 days: return #years
    } else {
      let years = Math.floor(diffDays/365);
      return years === 1 ? `${years} year ago` : `${years} years ago`;
    }
  }

  return (
    <Container>
      <Dated>{dateDiff()}</Dated>
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