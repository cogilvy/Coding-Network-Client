import React, { Component } from 'react';
import ProfilePost from "../components/ProfilePost"


class MyPostsContainer extends Component {

  render() {
    return (
      <div className="container" style={{marginBottom: "8%"}}>
      <h1>Posts:</h1>
        {
          this.props.posts ?
          this.props.posts.map(post => {
            return <ProfilePost post={post.title}/>
          })
          :
          <h3>You haven't written any posts yet!</h3>
        }
      </div>
    );
  }

}

export default MyPostsContainer;
