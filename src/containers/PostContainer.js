import React, { Component, Fragment } from 'react';
import Post from '../components/Post'
import NewPostForm from '../components/NewPostForm'
import PostFilter from '../components/PostFilter'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class PostContainer extends Component {

  state = {
    posts: [1],
    filteredPosts:[],
    postToModalize: {},
    commentsOnThisPost: []
  }
  // https://threes-nutz-backend.herokuapp.com/api/v1/

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    fetch(`http://the-coding-network-backend.herokuapp.com/api/v1/posts`)
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
    let searchTerm = event.target.searchBar.value
    let searchCat = event.target.category.value
    const MySwal = withReactContent(Swal)

    // let postsAfterSearch = []
    if(searchCat === "Username"){
      let postsAfterSearch = this.state.posts.filter(post => {
        return post.user.username.toLowerCase().includes(searchTerm.toLowerCase())
      })
      postsAfterSearch.length > 0 ?
      this.setState({
        filteredPosts: postsAfterSearch
      })
      :
      MySwal.fire(<p>There were no users with the username `'${searchTerm}'`.<br></br><br></br> Please try again.</p>)
    } else if (searchCat === "Post Title") {
      let postsAfterSearch = this.state.posts.filter(post => {
        return post.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
      postsAfterSearch.length > 0 ?
      this.setState({
        filteredPosts: postsAfterSearch
      })
      :
      MySwal.fire(<p>There were no posts with a title containing `'${searchTerm}'`. <br></br><br></br> Please try again.</p>)
    } else if (searchCat === "Category") {
      let postsAfterSearch = this.state.posts.filter(post => {
        return post.category.toLowerCase().includes(searchTerm.toLowerCase())
      })
      postsAfterSearch.length > 0 ?
      this.setState({
        filteredPosts: postsAfterSearch
      })
      :
      MySwal.fire(<p>There were no categories with the name `'${searchTerm}'`. <br></br><br></br> Please try again.</p>)
    }
    event.target.searchBar.value = ""
  }

  render() {
    return (
      <Fragment>
        {
          this.props.isCreatingNewPost ?
          <NewPostForm currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} createNewPost={this.props.createNewPost}/>
          :
          <div>
            <h1 style={{textAlign: "center"}}>News Feed:</h1>
            <div className="post-page">
              <div className="side-filter">
                <PostFilter fetchPosts={this.fetchPosts} handleSubmitSearch={this.handleSubmitSearch} handleSelectChange={this.handleSelectChange}/>
              </div>
              <div className="post-container">

              {
                this.state.posts === [1] ?
                null
                :
                this.state.filteredPosts.map(post => {
                  return (

                      <Post changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} currentUser={this.props.currentUser} setCurrentUserAfter={this.props.setCurrentUserAfter} addNewComment={this.props.addNewComment} onClick={this.viewSinglePost} key={post.id} post={post} />
                    
                  )
                })
              }
              </div>
            </div>
          </div>
        }
      </Fragment>
    );
  }

}
// <PostModal  postObjToView={this.props.postObjToView}  currentUser={this.props.currentUser} addNewComment={this.props.addNewComment} post={post}/>

export default PostContainer;
