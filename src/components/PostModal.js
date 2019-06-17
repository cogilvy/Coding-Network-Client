import React, { Component } from 'react';
import NewCommentForm from './NewCommentForm';

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
                  <div class="col-md-9">
                    <div class="panel panel-default">
                        <div class="panel-body">
                          <section class="post-body">
                            <ul class="list-group list-group-flush">
                              {
                                this.props.post.user ?

                                this.props.post.comments.map(comment => {
                                  return <li class="list-group-item">{comment.content}</li>
                                })
                                :
                                null
                              }

                            </ul>
                          </section>
                           <section class="post-heading">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <div class="media">
                                          <div class="media-body">
                                            <h4 class="media-heading">Leave A Comment:</h4>
                                          </div>
                                        </div>
                                    </div>
                                     <div class="col-md-1">
                                         <a href="#"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                     </div>
                                </div>
                           </section>

                           <section class="post-footer">
                               <hr></hr>
                               <div class="post-footer-comment-wrapper">
                                   <div class="comment-form">

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
                        </div>
                    </div>
            	</div>
                </div>
              </div>
            </div>
    );
  }

}

export default PostModal;
