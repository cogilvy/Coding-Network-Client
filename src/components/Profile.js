import React, { Component } from 'react';
import Faker from 'faker'


class Profile extends Component {

  state = {
    postsArray: [],
    postsCommentedOn: [],
    commentsArray: [],
    postsLiked: [],
    postsCommentedOnDict: {},
    currentUser: this.props.currentUser,
    profileToView: this.props.profileToView
  }


  componentWillMount() {
    fetch(`http://localhost:3000/api/v1/posts`)
    .then(res => res.json())
    .then(postsData => {
      let allCommentDict = {}
      let allCommentObjsArray = postsData.map(post => {
        if (post.comments.length > 1) {
          return allCommentDict[post.id] = post.comments
        }
      })
      this.setState({
        postsArray: postsData
      })
    })

    fetch(`http://localhost:3000/api/v1/comments`)
    .then(res => res.json())
    .then(commentsData => {
      this.setState({
        commentsArray: commentsData
      })
    })
  }

  getCommentsAndPosts = () => {
    let postsYouCommentedOn = []
    let yourComments = {}
    this.state.commentsArray.map(comment => {
      return this.state.postsArray.map(post => {

        if (post.id === comment.post_id && comment.user_id === this.state.currentUser.id) {
          yourComments[post.id] = comment
          postsYouCommentedOn.push(post)
        }
      })
    })

  const myPosts = this.state.postsArray.filter(post => {
    return Object.keys(yourComments).includes(post.id.toString())
  })
    // console.log(check);
    // debugger
  return myPosts.map(post =>{
    return <div>{post.title} - {yourComments[post.id].content}</div>
  })

  }


  render() {
    // console.log(this.state);
    // this.getCommentsAndPosts()
    return (
      <div className="profile-container">
        <div className="profile-image">
          <img src={Faker.image.avatar()}/>
        </div>
        <div className="details-container">
          <h2>{this.state.profileToView.username}</h2>
          <div>
            <h3>Posts {this.state.profileToView.username} has commented on: </h3>
            {
              this.getCommentsAndPosts()
            }
          </div>
        </div>
      </div>
    );
  }

}

export default Profile;
