import React, { Component } from 'react';
import Faker from 'faker'
import Profile from '../components/Profile'
import TestProfile from '../components/TestProfile'

class UserContainer extends Component {

  state = {
    allUsers: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(data => {
      this.setState({
        allUsers: data
      })
    })
  }

  unfollowUser = (user) => {
    console.log("delete");
  }

  render() {
    return (
      <div className="user-container">
        <h1>Here are all the current users registered on BookFace! Find your friends!</h1>
        {
          this.state.allUsers.length >= 1?

          this.state.allUsers.map(user => {
            return <TestProfile followers={user.followers} currentUser={this.props.currentUser} user={user} unfollowUser={this.unfollowUser}/>
          })
          :
          null
        }

      </div>
    );
  }

}

export default UserContainer;
