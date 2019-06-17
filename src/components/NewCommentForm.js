import React, { Component, Fragment } from 'react';

class NewCommentForm extends Component {

  handleClick = (event) => {
    event.preventDefault()
    // console.log(event.target.firstChild.value);
    let commentObj = {
      content: document.querySelector(`input[name]`).value,
      user: this.props.user,
      post: this.props.post
    }
    this.props.addNewComment(commentObj)
    this.props.handleAddComment(commentObj)
  }

  render() {
    return (
      <Fragment>

        <div>
          <form >
            <input type="text" name="comment" placeholder="comment here"></input>
            <input onClick={this.handleClick} type="button" value="Comment"></input>
          </form>
        </div>
      </Fragment>
    );
  }

}

export default NewCommentForm;
