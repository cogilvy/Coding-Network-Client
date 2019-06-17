import React, { Fragment, Component } from 'react';
import Faker from 'faker'
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

class Post extends Component {

  renderLikes = () => {
    switch (this.props.post.likes) {
      case 0:
        return <p>{this.props.post.likes.length} Likes</p>
        // break;
      case 1:
        return <p>{this.props.post.likes.length} Like</p>
        // break;
      default:
        return <p>{this.props.post.likes.length} Likes</p>
    }
  }

  h3Style = {
    color:'rgb(54, 124, 255)', fontWeight:'400', lineHeight:'.69', verticalAlign: 'top',borderBottom: '2px solid rgb(54, 124, 255)', width: "75%", float: "right"
  }



  render() {
    const content = this.props.post.content

    return (
      <Fragment>

        <div key={this.props.post.id} className="single-post">
        {
          this.props.post.user ?
          <Fragment>
            <h2 >{this.props.post.title}</h2>
            <p className="post-content">{content.substring(0,100)}...</p>
            <section className="post-footer">
              <hr></hr>
              <div className="post-footer-option container" style={{"display":"flex", "width":"auto", "justify-content":"space-between"}}>
                <div>
                  <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>({this.props.post.likes.length}) Like</button>
                  <button data-toggle="modal" data-target={".bd-example-modal-lg-" + this.props.post.id} type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button>
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
                          <h4 className="media-heading">{this.props.post.user? this.props.post.user.username : null}</h4>
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
      </Fragment>
    );
  }

}

export default Post;
