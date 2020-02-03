import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.jsx';
import Comment from './Comment.jsx';

class CommentsApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {}
    }
  }

  

  render() {
    return(
      <CommentWrapper>
        {this.props.comments.map((comment, i) => <Avatar comment={comment} duration={this.props.duration} key={comment.id}/>)}
        {this.props.comments.map((comment, i) => <Comment currTime={this.props.currTime} comment={comment} duration={this.props.duration} key={comment.id}/>)}
      </CommentWrapper>
    )
  }
}

//CSS styled-components
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%:
`;

export default CommentsApp;