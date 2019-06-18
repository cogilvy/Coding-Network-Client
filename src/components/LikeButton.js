import React, {Fragment, Component} from 'react';

class LikeButton extends Component {

  return() {
    render(
      <div className="like-button-div">
        <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>({this.props.post.likes.length}) Like</button>

      </div>
    )
  }
}
