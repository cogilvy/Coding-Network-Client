import React, { Component } from 'react';
import Faker from 'faker'
import Post from './Post'
import PostModal from './PostModal'
//<Post changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} addNewComment={this.props.addNewComment} onClick={this.viewSinglePost} key={post.id} post={post} />


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
    fetch(`http://the-coding-network-backend.herokuapp.com/api/v1/posts`)
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

    fetch(`http://the-coding-network-backend.herokuapp.com/api/v1/comments`)
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
    let profileId = this.state.profileToView.id
    console.log("proftoview",this.state.profileToView);
    let h2WithUserId = document.querySelector('user-')//.split('-')[1]

    this.state.commentsArray.map(comment => {
      return this.state.postsArray.map(post => {

        if (post.id === comment.post_id && comment.user_id === parseInt(document.querySelector("#user").dataset.profileId)) {
          yourComments[post.id] = comment
          postsYouCommentedOn.push(post)
        }
      })
    })

  const myPosts = this.state.postsArray.filter(post => {
    return Object.keys(yourComments).includes(post.id.toString())
  })

  return myPosts.map(post =>{
    return <div>{post.title} - {yourComments[post.id].content}</div>
  })
  // return myPosts.map(post => {
  //   return <Post changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} addNewComment={this.props.addNewComment} onClick={this.viewSinglePost} key={post.id} post={post} />
  // })
  }


  render() {
    return (
      <div className="profile-container">
        <div className="profile-image">
          <img src={Faker.image.avatar()}/>
        </div>
        <div className="details-container">
          <h2 id='user' data-profile-id={this.state.profileToView.id}>{this.state.profileToView.username}</h2>
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
