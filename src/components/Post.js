import React, { Fragment, Component } from 'react';
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
    color:'rgb(54, 124, 255)', fontWeight:'400', lineHeight:'.69', verticalAlign: 'top',borderBottom: '2px solid rgb(54, 124, 255)', width: "15%"
  }

  render() {

    return (
      <Fragment>

        <div key={this.props.post.id} className="single-post">
        {
          this.props.post.likes ?
          <Fragment>
            <h2 >{this.props.post.title}</h2>
            <div className="post-user" style={this.h3Style}>
              <p>- {this.props.post.user.username}</p>
              <p className="post-user" style={{fontSize:'10px',float:'right'}}> <TimeAgo datetime={this.props.post.created_at}/></p>
            </div>
            <p className="post-content">{this.props.post.content}</p>
            <p>{this.props.post.likes.length} Like(s)</p>

            Comments:
            <ul>
            {
              this.props.post.comments.map(comment => {
                return <li key={comment.id}>{comment.content}</li>
              })
            }
            </ul>

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
