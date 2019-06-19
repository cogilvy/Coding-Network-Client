import React, { Component } from 'react';
import ProfilePost from "../components/ProfilePost"


class CommentsContainer extends Component {

  render() {
    return (
      <div style={{marginBottom:"5%"}} className="container">
        <h1>Comments:</h1>
        {
          this.props.comments ?
          this.props.comments.map(comment => {
            return <ProfilePost post={comment.content}/>
          })
          :
          <h3>You haven't written any comments yet!</h3>
        }
      </div>
    );
  }

}

export default CommentsContainer;
