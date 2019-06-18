import React, { Component } from 'react';
import Faker from 'faker'


class Profile extends Component {

  state = {
    postsArray: null,
    postsCommentedOn: null,
    postsLiked: null,
    currentUser: null
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/posts`)
    // fetch(`https://threes-nutz-backend.herokuapp.com/api/v1/posts`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        postsArray: data,
        currentUser: this.props.currentUser
      })
      this.getCommentedPosts()
    })
  }

  getCommentedPosts = () => {
    let myUserCommentArray = this.props.currentUser.comments.map(comment => {
      this.state.postsArray.filter(post => {
        return post.id === comment.post_id
      })
    })
    this.setState({
      postsCommentedOn: myUserCommentArray
    })
    debugger
  }

  render() {
    console.log(this.state.postsCommentedOn)
    // debugger
    return (
      <div className="profile-container">
        <div className="profile-image">
          <img src={Faker.image.avatar()}/>
        </div>
        <div className="details-container">
          <h2>{this.props.currentUser.username}</h2>

        </div>
      </div>
    );
  }

}

export default Profile;
