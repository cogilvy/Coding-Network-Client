import React, { Component } from 'react';

class ProfilePost extends Component {



  render() {
    return (
      <div className="single-post">
        <h2>{this.props.post}</h2>
      </div>
    );
  }

}

export default ProfilePost;
