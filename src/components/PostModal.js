import React, { Fragment, Component } from 'react';
import Faker from 'faker'
import TimeAgo from 'timeago-react';

class PostModal extends Component {

  state = {
    commentsOnThisPost: []
  }

  // componentDidMount() {
  //   this.setState({
  //     post:
  //     commentsOnThisPost:
  //   })
  // }

  render() {
    return (
      <div className={"modal fade bd-example-modal-lg-" + this.props.post.id} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            {
              this.props.post.user ?
              <Fragment>
                <section className="post-header">
                  <div className="avatar-username">
                    <img src={Faker.image.avatar()} width="auto" height="auto" alt="..."/>
                  </div>
                  <div className="title">
                    <h2 style={{float:"right", margin: "none"}}>{this.props.post.title}</h2>
                    <h4 className="media-heading" style={{float:"left", marginLeft:"2%"}}>Author: {this.props.post.user? this.props.post.user.username : null}
                      <br/><p className="post-user" style={{fontSize:'10px', float:"left", marginLeft: "5%"}}>Created: <TimeAgo datetime={this.props.post.created_at}/></p></h4>
                  </div>
                </section>
                <hr style={{marginTop:"none"}}></hr>
                <section className="post-footer">
                  <div>
                    <p className="post-content">{this.props.post.content}</p>
                  </div>

                  <hr></hr>
                  <div className="post-footer-option container" style={{"display":"flex", "width":"auto", "justify-content":"space-between"}}>
                    <div>
                      <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>({this.props.post.likes.length}) Like</button>
                      <button data-toggle="modal" data-target={".bd-example-modal-lg-" + this.props.post.id} type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button>
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

<<<<<<< HEAD
                            </div>
                          </div>
=======
                                   </div>
                                   <div class="comment">
                                        <div class="media">
                                          <div class="media-left">
                                            <a href="#">
                                              <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="32" height="32" alt="..."/>
                                            </a>
                                          </div>
                                          <div class="media-body">
                                            <NewCommentForm post={this.props.post} currentUser={this.props.currentUser} addNewComment={this.props.addNewComment}/>
                                          </div>
                                        </div>
                                  </div>
                                </div>
                           </section>
>>>>>>> implementing-comments-frontend
                        </div>
                      </div>
                      <div className="post-user" style={this.h3Style}>

                      </div>
                    </section>
                  </div>
                </section>
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
