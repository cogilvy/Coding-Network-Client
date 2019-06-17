import React, { Component } from 'react';

class PostFilter extends Component {

  render() {
    return (
      <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Search Posts by Category</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Cooking</a>
          <br/>
          <a class="dropdown-item" href="#">Home/Garden</a>
          <br/>
          <a class="dropdown-item" href="#">Pop-Culture</a>
          <br/>
          <a class="dropdown-item" href="#">Sports</a>
          <br/>
          <a class="dropdown-item" href="#">Technology</a>
          <br/>
          <a class="dropdown-item" href="#">Other</a>
        </div>
      </div>
    );
  }

}

export default PostFilter;
