import React, { Component, Fragment } from 'react';
import Post from '../components/Post'
import TestPost from '../components/TestPost'
import PostModal from "../components/PostModal"
import NewPostForm from '../components/NewPostForm'


class PostContainer extends Component {

  state = {
    posts: [1]
  }
  // https://threes-nutz-backend.herokuapp.com/api/v1/

  componentDidMount() {
    // fetch(`http://localhost:3000/api/v1/posts`)
    fetch(`https://threes-nutz-backend.herokuapp.com/api/v1/posts`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  render() {

    return (
      <Fragment>
        {
          this.props.isCreatingNewPost ?
          <NewPostForm currentUser={this.props.currentUser} createNewPost={this.props.createNewPost}/>
          :


        <div className="post-container">
          {
            this.state.posts === [1] ?
            null
            :
            this.state.posts.map(post => {
              return (
                <Fragment>
                  <Post key={post.id} post={post} />
                  <PostModal post={post}/>
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

export default PostContainer;
