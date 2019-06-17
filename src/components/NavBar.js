import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    // console.log(this.props.currentUser);
    return (
      <div className="NavBar">
        <Link to="/login">
          Login
        </Link>
        <Link to="/signup">
          Sign Up
        </Link>
        {
          this.props.currentUser
          ?
          <button onClick={this.props.logout}>Logout</button>
          :
          null
        }
      </div>
    );
  }

}

export default NavBar;
