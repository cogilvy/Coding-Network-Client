import React, { Component } from 'react';
import Faker from 'faker'

class TestPost extends Component {

  render() {
    return (
      <div classname="post-card">
        <div className="panel panel-default">
          <div className="panel-body">
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
                      <h4 className="media-heading">{this.props.post.user? this.props.post.user.username : null}</h4>
                      <a href="#" className="anchor-time">{Math.floor(Math.random() * 60)} mins ago</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <strong>{this.props.post.title}</strong>
                </div>
              </div>
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
