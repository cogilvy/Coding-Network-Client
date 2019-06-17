import React, { Component, Fragment } from 'react';

class NewPostForm extends Component {

  handleSubmit = (event) => {
    // event.preventDefault()
    let postObj = {
      title: document.querySelector(`input[name]`).value,
      content: document.querySelector(`textarea[name]`).value,
      category: document.querySelector("select").value,
      user_id: this.props.currentUser.id
    }
    console.log(postObj)
    this.props.createNewPost(postObj)
  }

  render() {
    return (
      <Fragment>

        <div>
          <form className="form-style-9" onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <input type="text" name="title" className="field-style field-split align-left" placeholder="Post Title" />
              </li>
              <li>
                <textarea name="content" className="field-style" placeholder="Content"></textarea>
              </li>
              <li>
                <select className="select-css">
                  <option value="" default>Select A Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Pop-Culture">Pop-Culture</option>
                  <option value="Sports">Sports</option>
                </select>
              </li>
              <li>
                <input type="submit" value="Create Post" />
              </li>
            </ul>
          </form>
        </div>
      </Fragment>
    );
  }

}

export default NewPostForm;
