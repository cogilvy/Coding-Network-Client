import React, { Component } from 'react';
import Faker from 'faker'
import Profile from '../components/Profile'

class UserContainer extends Component {



  render() {
    return (
      <div className="user-container">
        <Profile currentUser={this.props.currentUser}/>
      </div>
    );
  }

}

export default UserContainer;
