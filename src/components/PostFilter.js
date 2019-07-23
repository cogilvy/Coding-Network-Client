import React, { Component } from 'react';

class PostFilter extends Component {

  render() {
    return (
      <div className="select-div">
        <div style={{margin: "0% 0% 0% 5%"}}>
          <form onSubmit={this.props.handleSubmitSearch}>
            <label>Search Posts by User, Category, or Title:</label>
            <br></br>
            <input style={{width: "90%"}} type="text" name="searchBar"></input>
            <br></br>
            <select name="category" style={{marginTop: "2%", width: "50%"}}>
              <option>Username</option>
              <option>Post Title</option>
              <option>Category</option>
            </select>
            <input style={{marginLeft: "15%"}} type="submit" value="Search"></input>
          </form>
        </div>
        <div style={{margin: "0% 15%"}}>
          <br></br>
          <br></br>
          <label>Filter Posts By Category</label>
          <br></br>
          <select onChange={this.props.handleSelectChange}>
            <option default disabled>Select a Category:</option>
            <option>All Posts</option>
            <option>Technology</option>
            <option>Sports</option>
            <option>News</option>
          </select>
          <br></br>
          <br></br>
          <button onClick={this.props.fetchPosts} style={{margin: "auto", backgroundColor: "lightGreen"}}>Reset Search/Filter</button>
        </div>
      </div>
    );
  }

}

export default PostFilter;
