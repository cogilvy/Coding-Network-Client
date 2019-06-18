import React, { Component } from 'react';
import Faker from 'faker'
import Profile from '../components/Profile'

class UserContainer extends Component {



  render() {
    return (
      <div className="user-container">
        <Profile changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} currentUser={this.props.currentUser}/>
      </div>
    );
  }

}

export default UserContainer;
