import React, { Fragment, Component } from 'react';
import Faker from 'faker'
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import PostModal from './PostModal'

class Post extends Component {

  state = {
    isViewingModal: false,
    likes: this.props.post.likes ? this.props.post.likes.length : null
  }

  renderLikes = () => {
    switch (this.props.post.likes) {
      case 0:
        return <Fragment>{this.state.likes} Likes</Fragment>
        // break;
      case 1:
        return <Fragment>{this.state.likes} Like</Fragment>
        // break;
      default:
        return <Fragment>{this.state.likes} Likes</Fragment>
    }
  }

  h3Style = {
    color:'rgb(54, 124, 255)', fontWeight:'400', lineHeight:'.69', verticalAlign: 'top',borderBottom: '2px solid rgb(54, 124, 255)', width: "75%", float: "right"
  }

  handleModalClick = (event) => {
    this.setState({
      isViewingModal: !this.state.isViewingModal
    })
  }

  addLike = () => {
    fetch("http://localhost:3000/api/v1/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        post_id: this.props.post.id
      })
    })
    this.setState({
      likes: this.state.likes + 1
    })
  }

  deleteLike = (likeID) => {
    fetch(`http://localhost:3000/api/v1/likes/${likeID}`, {
      method: "DELETE"
    })
    this.setState({
      likes: this.state.likes - 1
    })
  }

  handleUserClick = (event) => {
    event.preventDefault()
    console.log(event.target.otherUser);
    if (event.target.name === "otherUser") {
      const userObj = this.props.post.user
      this.props.changeProfileToView(userObj)
    } else {
      const userObj = this.props.post.user
      this.props.changeProfileToView(userObj)
    }

    document.querySelector("body").classList.toggle("modal-open")

    // $('.modal').modal('hide')
  }

  render() {
    const content = this.props.post.content
    return (
      <Fragment>
        <div onClick={this.handleModalClick} data-toggle="modal" data-target={".bd-example-modal-lg-" + this.props.post.id} key={this.props.post.id} className="single-post">
        {
          this.props.post.user ?
          <Fragment>
            <strong><p>{this.props.post.title}</p></strong>
            <p className="post-content">{content.substring(0,110)}...</p>
            <section className="post-footer">
              <hr></hr>
              <div className="post-footer-option container" style={{"display":"flex", "width":"auto", "justifyContent":"space-between"}}>
                <div>
                  {this.renderLikes()}
                  <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button>
                  <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-share-alt"></i> Share</button>
                </div>
                <section className="post-heading">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img src={Faker.image.avatar()} width="40" height="40" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading"><a onClick={this.handleUserClick} href="">{this.props.post.user? this.props.post.user.username : null}</a></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-user" style={this.h3Style}>
                    <p className="post-user" style={{fontSize:'10px',float:'right',marginTop:"10%"}}> <TimeAgo datetime={this.props.post.created_at}/></p>
                  </div>
                </section>
              </div>
            </section>
          </Fragment>
          :
          null
        }
        </div>
        <div>
          <PostModal openProfile={this.handleUserClick} likes={this.state.likes} addLike={this.addLike} changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} postObjToView={this.props.postObjToView} setCurrentUserAfter={this.props.setCurrentUserAfter} currentUser={this.props.currentUser} addNewComment={this.props.addNewComment} post={this.props.post}/>

        </div>
      </Fragment>
    );
  }

}

export default Post;
