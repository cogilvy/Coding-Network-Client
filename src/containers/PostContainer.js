import React, { Component, Fragment } from 'react';
import Post from '../components/Post'
import NewPostForm from '../components/NewPostForm'
import PostFilter from '../components/PostFilter'

class PostContainer extends Component {

  state = {
    posts: [1],
    filteredPosts:[],
    postToModalize: {},
    commentsOnThisPost: []
  }
  // https://threes-nutz-backend.herokuapp.com/api/v1/

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/posts`)
    // fetch(`https://threes-nutz-backend.herokuapp.com/api/v1/posts`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data,
        filteredPosts: data
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

  handleSelectChange = (selectValue) => {
    if (selectValue.target.value !== "All Posts"){
      const filteredArray = this.state.posts.filter(post => {
         // debugger
        return post.category === selectValue.target.value
      })
      console.log(filteredArray);
      this.setState({
        filteredPosts: filteredArray
      })
    } else {
      this.setState({
        filteredPosts: this.state.posts
      })
    }

  }

  handleSubmitSearch = (event) => {
    event.preventDefault()
    let searchTerm = event.target.firstElementChild.value
    let searchCat = event.target.firstElementChild.nextElementSibling.value

    // let postsAfterSearch = []
    if(searchCat === "Username"){
      let postsAfterSearch = this.state.posts.filter(post => {
        return post.user.username.includes(searchTerm)
      })
      this.setState({
        filteredPosts: postsAfterSearch
      })
    } else if (searchCat === "Post Title") {
      let postsAfterSearch = this.state.posts.filter(post => {
        return post.title.includes(searchTerm)
      })
      this.setState({
        filteredPosts: postsAfterSearch
      })
    } else if (searchCat === "Category") {
      let postsAfterSearch = this.state.posts.filter(post => {
        return post.category.includes(searchTerm)
      })
      this.setState({
        filteredPosts: postsAfterSearch
      })
    }
    event.target.firstElementChild.value = ""

  }

  render() {
    console.log(this.state.filteredPosts);
    return (

      <Fragment>

        {
          this.props.isCreatingNewPost ?
          <NewPostForm currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} createNewPost={this.props.createNewPost}/>
          :
          <Fragment>
          <PostFilter handleSubmitSearch={this.handleSubmitSearch} handleSelectChange={this.handleSelectChange}/>
          <div className="post-container">
            <h1>News Feed:</h1>
          {
            this.state.posts === [1] ?
            null
            :
            this.state.filteredPosts.map(post => {
              return (
                <Fragment>
                  <Post changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} addNewComment={this.props.addNewComment} onClick={this.viewSinglePost} key={post.id} post={post} />
                </Fragment>
              )
            })
          }
          </div>
          </Fragment>
        }
      </Fragment>
    );
  }

}
// <PostModal  postObjToView={this.props.postObjToView}  currentUser={this.props.currentUser} addNewComment={this.props.addNewComment} post={post}/>

export default PostContainer;
