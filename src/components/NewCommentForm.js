import React, { Component, Fragment } from 'react';

class NewCommentForm extends Component {

  handleClick = (event) => {
    event.preventDefault()
    // console.log(event.target.firstChild.value);


    let commentObj = {
      content: event.target.parentElement.firstChild.nextElementSibling.value,
      user: this.props.currentUser,
      post: this.props.post
    }
    console.log("this.props.currentUser:",this.props.currentUser)
    this.props.addNewComment(commentObj)
    this.props.handleAddComment(commentObj)
  }

  render() {
    return (
      <Fragment>

            <textarea id="comment-textarea" type="text" name="comment" style={{width:"500px", marginLeft:"39px"}} placeholder="comment here"></textarea>
            <input id="comment-button" onClick={this.handleClick} style={{position:"absolute", height:"44px"}} type="button" value="Comment !"></input>
      </Fragment>
    );
  }

}

export default NewCommentForm;
