import React from 'react';
import styled, { keyframes } from 'styled-components';

function Comment(props) {
  const showComment = (timeStamp) => {
    if (props.currTime > timeStamp - 1 && props.currTime < timeStamp + 1)  {
      return true;
    }
    return false;
  }

  return (
    <div>
      {showComment(props.comment.timeStamp) && <CommentLineWrapper position={props.comment.timeStamp / props.duration * 100}>
        <User>{props.comment.user}</User>
        <Text position={props.comment.timeStamp / props.duration * 100}>{props.comment.comment}</Text>
      </CommentLineWrapper>}
    </div>
  )
}

const Visible = keyframes`
  100% {
    visibility: visible;
  }
`;

const CommentLineWrapper = styled.div`
  display: ${prop => prop.shown};
  left: ${prop => prop.position}%;
  width: ${prop => 100 - prop.position}%;
  display: flex;
  position: absolute;
  padding-top: 30px;
  border-left: solid 1px;
  border-image: linear-gradient( to bottom, #f75913, #db5d2b82 ) 1 100%;
  visibility: hidden;
  animation: ${Visible};
  animation-duration: 2s;
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