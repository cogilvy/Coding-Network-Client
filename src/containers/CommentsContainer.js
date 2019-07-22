import React, { Component } from 'react';
import ProfilePost from "../components/ProfilePost"


class CommentsContainer extends Component {

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
      return <div className="comments">{post.title}<br></br> <strong style={{marginLeft: "7%"}}>- {yourComments[post.id].content}</strong><br></br></div>
    })
  }

  render() {
    return (
      <div id='user' style={{marginBottom:"5%"}} className="container" data-profile-id={this.state.profileToView.id}>
        <h1 >Comments:</h1>
        <br></br>
        {this.getCommentsAndPosts()}
      </div>
    );
  }

}

export default CommentsContainer;
