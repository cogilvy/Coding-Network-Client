import React, { Component } from 'react';

class PostFilter extends Component {


  render() {
    return (
      <div  className="select-div" style={{position:"absolute",top:"150px",zIndex:"2"}}>
        <p>Search by User,Category, or Title:</p>
        <form onSubmit={this.props.handleSubmitSearch}>
          <input type="text" name="searchBar"></input>
          <select style={{position:"absolute",left:"0px", top:"55px",zIndex:"2"}}>
            <option>Username</option>
            <option>Post Title</option>
            <option>Category</option>
          </select>
          <input type="submit" value="Search"></input>
        </form>

        <select style={{position:"absolute",top:"100px",zIndex:"2"}} onChange={this.props.handleSelectChange}>
          <optgroup label="Select a Category:">
            <option>All Posts</option>
            <option>Technology</option>
            <option>Pop-Culture</option>
          </optgroup>
        </select>
      </div>
    );
  }

}

export default PostFilter;


// <div class="nav-item dropdown">
//   <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Search Posts by Category</a>
//   <div class="dropdown-menu">
//     <a class="dropdown-item" href="#">Cooking</a>
//     <br/>
//     <a class="dropdown-item" href="#">Home/Garden</a>
//     <br/>
//     <a class="dropdown-item" href="#">Pop-Culture</a>
//     <br/>
//     <a class="dropdown-item" href="#">Sports</a>
//     <br/>
//     <a class="dropdown-item" href="#">Technology</a>
//     <br/>
//     <a class="dropdown-item" href="#">Other</a>
//   </div>
// </div>
