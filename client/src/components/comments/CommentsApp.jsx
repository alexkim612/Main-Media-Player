import React from 'react';
import styled from 'styled-components';
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
        {this.props.comments.map((comment, i) => <Comment comment={comment} duration={this.props.duration} key={comment.id}/>)}
      </CommentWrapper>
    )
  }
}

//CSS 
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%:
`;

export default CommentsApp;