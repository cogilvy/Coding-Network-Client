import React, { Component } from 'react';

class TestProfile extends Component {

  state = {
    followers: this.props.user.followers,
    followed: false
  }

  followUser = (user) => {
    const curUser = this.props.currentUser
    if (!this.state.followers.includes(curUser)) {
      fetch("http://localhost:3000/api/v1/follows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          follower_id: curUser.id,
          followee_id: user.id
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      this.setState({
        followers: [...this.state.followers, curUser]
      })
    }
  }

  followMe = (user) => {
    const curUser = this.props.currentUser
  }

  render() {
    console.log("asdfasdf", this.state.followers, this.props.currentUser);
    return (
      <div>
        <h2>{this.props.user.username}</h2>
        <h4>Followers:</h4>
        <ul>
        {
          this.props.user.followers.map(follower => {
            return <li>{follower.username}</li>
          })
        }
        </ul>
        {
          this.props.currentUser.id == this.props.user.id ?
          null
          :
          this.state.followed || this.state.followers.includes(this.props.currentUser) ?
          <h5>You Follow Me Already!</h5>
          :
          <button onClick={() => this.followUser(this.props.user)}>Follow Me</button>
        }

      </div>
    );
  }

}

export default TestProfile;
