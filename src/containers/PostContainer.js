import React, { Component, Fragment } from 'react';
import Post from '../components/Post'
import NewPostForm from '../components/NewPostForm'


class PostContainer extends Component {

  state = {
    posts: [1],
    postToModalize: {},
    commentsOnThisPost: []
  }
  // https://threes-nutz-backend.herokuapp.com/api/v1/

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/posts`)
    // fetch(`https://threes-nutz-backend.herokuapp.com/api/v1/posts`)
    .then(res => res.json())
    .then(data => {
      console.log("Daat",data);
      this.setState({
        posts: data
      })
    })
  }

  handleModalClick = (post) => {
    // this.props.setPostObjToView(post)
  }

  viewSinglePost = (postObj) => {
    this.setState({
      postToModalize: postObj,
      commentsOnThisPost: postObj.comments
    })
  }

  render() {
    return (
      <Fragment>
        {
          this.props.isCreatingNewPost ?
          <NewPostForm currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} createNewPost={this.props.createNewPost}/>
          :
          <div className="post-container">
          {
            this.state.posts === [1] ?
            null
            :
            this.state.posts.map(post => {
              return (
                <Fragment>
                  <Post changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} addNewComment={this.props.addNewComment} onClick={this.viewSinglePost} key={post.id} post={post} />
                </Fragment>
              )
            })
          }
          </div>
        }
      </Fragment>
    );
  }

}
// <PostModal  postObjToView={this.props.postObjToView}  currentUser={this.props.currentUser} addNewComment={this.props.addNewComment} post={post}/>

export default PostContainer;
