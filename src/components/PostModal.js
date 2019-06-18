import React, { Fragment, Component } from 'react';
import Faker from 'faker'
import TimeAgo from 'timeago-react';
import NewCommentForm from './NewCommentForm'
import LikeButton from './LikeButton'
class PostModal extends Component {

  state = {
    postToView: this.props.post,
    commentsOnPost: this.props.post.comments
  }

  renderLikes = () => {
    switch (this.props.post.likes) {
      case 0:
        return <Fragment>{this.props.likes} Likes</Fragment>
        // break;
      case 1:
        return <Fragment>{this.props.likes} Like</Fragment>
        // break;
      default:
        return <Fragment>{this.props.likes} Likes</Fragment>
    }
  }

  handleAddComment = (commentObj) => {
    console.log("comment obj", commentObj)
    this.setState({
      commentsOnPost: [...this.state.commentsOnPost, commentObj]
    })
  }

  render() {
    return (
      <div className={"modal fade bd-example-modal-lg-" + this.props.post.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {
              this.props.post.user ?
              <Fragment>
                <section className="post-header">
                  <div className="avatar-username">
                    <img style={{position: "bottom"}} src={Faker.image.avatar()} width="auto" height="auto" alt="..."/>
                  </div>
                  <div className="title">
                    <strong><p style={{fontSize:"150%", marginLeft:"10%", marginTop:"2%", float:"right", width:"100%"}}>{this.props.post.title}</p></strong>
                    <h4 className="media-heading" style={{float:"left", marginLeft:"2%", marginTop:"5%"}}>Author: {this.props.post.user? this.props.post.user.username : null}
                    <br/><p className="post-user" style={{fontSize:'10px', float:"left", marginLeft: "5%"}}>Created: <TimeAgo datetime={this.props.post.created_at}/></p></h4>
                  </div>
                </section>
                <hr></hr>
                <section className="post-footer">
                  <div>
                    <p className="post-content">{this.props.post.content}</p>
                  </div>
                  <hr></hr>
                  <div className="post-footer-option container" style={{"display":"flex", "width":"auto", "justifyContent":"space-between"}}>



                  <div className="category-likes">
                    <p>Category: {this.props.post.category}    </p>
                    {this.renderLikes()}
                  </div>




                    <section className="post-heading">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="media">
                            <div className="media-left">
                              <a href="#">

                              </a>
                            </div>
                            <div className="media-body">

                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
                <div className="comment-like-wrapper">
                  <LikeButton addLike={this.props.addLike} post={this.props.post} user={this.props.post.user}/>
                  <NewCommentForm handleAddComment={this.handleAddComment} post={this.props.post} user={this.props.post.user} addNewComment={this.props.addNewComment}/>
                </div>
                  <div className="comments-div">
                    {
                      this.state.commentsOnPost.map(comment => {
                        return <div key={comment.id}>{comment.content}</div>
                      })
                    }
                  </div>

              </Fragment>
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }

}

export default PostModal;
//                       <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>({this.props.post.likes.length}) Like</button>
// <div>
//   <LikeButton post={this.props.post} user={this.props.post.user}/>
//   <button  data-toggle="modal" data-target={".bd-example-modal-lg-" + this.props.post.id} type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button>
// </div>
