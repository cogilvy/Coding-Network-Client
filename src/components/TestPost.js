import React, { Component } from 'react';
import Faker from 'faker'

class TestPost extends Component {

  render() {
    return (
      <div classname="post-card">
        <div className="panel panel-default">
          <div className="panel-body">
            <section className="post-heading">
              
            </section>
            <section className="post-body">
              <p>{this.props.post.content}</p>
            </section>
            <section className="post-footer">
              <hr></hr>
              <div className="post-footer-option container">
                <ul className="list-unstyled">
                  <li>({this.props.post.user? this.props.post.likes.length: null})<button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>  Like</button></li>
                  <li><button data-toggle="modal" data-target=".bd-example-modal-lg" type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button></li>
                  <li><button type="button" className="btn btn-light"><i className="glyphicon glyphicon-share-alt"></i> Share</button></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

}

export default TestPost;
