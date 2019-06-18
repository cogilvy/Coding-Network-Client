import React, {Fragment, Component} from 'react';

class LikeButton extends Component {

  state = {
    likes: this.props.post.likes
  }



  render() {
    return(
      <Fragment>
        <button type="button" style={{position:"absolute", border:"1px solid lightblue", height:"44px"}} className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i></button>
      </Fragment>
    )
  }
}
// <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-thumbs-up"></i>
//   ({this.props.post.likes.length}) Like
//
// </button>
export default LikeButton
