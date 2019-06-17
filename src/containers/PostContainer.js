import React, { Component, Fragment } from 'react';
import Post from '../components/Post'
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
              return <Post key={post.id} post={post} />
            })
          }
          <div>
            Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
            from <a href="https://www.flaticon.com/"
            title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </div>
        }
      </Fragment>
    );
  }

}

export default PostContainer;
