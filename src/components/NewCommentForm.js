import React, { Component, Fragment } from 'react';

class NewCommentForm extends Component {

  handleClick = (event) => {
    event.preventDefault()
    // console.log(event.target.firstChild.value);


    let commentObj = {
      content: event.target.parentElement.firstElementChild.value,
      user: this.props.currentUser,
      post: this.props.post
    }
    // debugger

    console.log("this.props.currentUser:",this.props.currentUser)
    this.props.addNewComment(commentObj)
    this.props.handleAddComment(commentObj)
  }

  render() {
    return (
      <Fragment>
<<<<<<< HEAD

            <textarea id="comment-textarea" type="text" name="comment" style={{width:"500px", marginLeft:"39px"}} placeholder="comment here"></textarea>
            <input id="comment-button" onClick={this.handleClick} style={{position:"absolute", height:"44px"}} type="button" value="Comment !"></input>
=======
        <textarea id="comment-textarea" type="text" name="comment" style={{height:"44px", width:"500px", display: "inline-block"}} placeholder="Write your comment here..."></textarea>
        <input id="comment-button" onClick={this.handleClick} style={{height:"44px", display: "inline-block"}} type="button" value="Comment"></input>
>>>>>>> 749fcd9f7f8d2b773efa20ca34d1399f9217fb2f
      </Fragment>
    );
  }

}

export default NewCommentForm;
