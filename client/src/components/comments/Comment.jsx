import React from 'react';
import styled from 'styled-components';

function Comment(props) {
  const truncate = (string) => {
    //if string is longer than width
      //truncate + '...'
    //else return string
  }

  return (
    <CommentLineWrapper position={props.comment.timeStamp / props.duration * 100}>
      <User>{props.comment.user}</User>
      <Text position={props.comment.timeStamp / props.duration * 100}>{props.comment.comment}</Text>
    </CommentLineWrapper>
  )
}

const CommentLineWrapper = styled.div`
  display: flex;
  left: ${prop => prop.position}%;
  width: ${prop => 100 - prop.position}%;
  position: absolute;
  padding-top: 30px;
  border-left: solid 1px;
  border-image: linear-gradient( to bottom, #f75913, #db5d2b82 ) 1 100%;

  ${({ active }) => active && `
  background: linear-gradient(to bottom, #db6a23, #db3f21, #dba386);
  `}
`;

const User = styled.div`
  padding-left: 10px;
  color: #ff5721;
  font-size: 14px;
`;

const Text = styled.div`
  padding-left: 10px;
  color: white;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 16px;
  white-space: nowrap;
  width: ${prop => (100 - prop.position)}%;
`;

export default Comment;