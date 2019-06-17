import React, { Fragment, Component } from 'react';
import Faker from 'faker'
import TimeAgo from 'timeago-react';
import NewCommentForm from './NewCommentForm'

class PostModal extends Component {

  state = {
    postToView: this.props.post,
    commentsOnPost: this.props.post.comments
  }

  handleModalClick = () => {
    // console.log(this.state.postToView)

  }

  handleAddComment = (commentObj) => {
    console.log("comment obj", commentObj)
    this.setState({
      commentsOnPost: [...this.state.commentsOnPost, commentObj]
    })

  }



  render() {
    console.log(this.state.commentsOnPost)
    // debugger
    return (
      <div  className={"modal fade bd-example-modal-lg-" + this.props.post.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            {
              this.props.post.user ?
              <Fragment>
                <section className="post-header">
                  <div className="avatar-username">
                    <img style={{position: "bottom"}} src={Faker.image.avatar()} width="auto" height="auto" alt="..."/>
                  </div>
                  <div className="title">
                    <h2 style={{float:"right", marginBottom: "10%"}}>{this.props.post.title}</h2>
                    <h4 className="media-heading" style={{float:"left", marginLeft:"2%"}}>Author: {this.props.post.user? this.props.post.user.username : null}
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
                    <div>
                      <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>({this.props.post.likes.length}) Like</button>
                      <button  data-toggle="modal" data-target={".bd-example-modal-lg-" + this.props.post.id} type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button>
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
                <div className="comments-div">
                  <NewCommentForm handleAddComment={this.handleAddComment} post={this.props.post} user={this.props.post.user} addNewComment={this.props.addNewComment}/>
                  {
                    this.state.commentsOnPost.map(comment => {
                      return <div>{comment.content}</div>
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
