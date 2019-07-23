import React, { Fragment, Component } from 'react';
import Faker from 'faker'
import MyPostsContainer from "../containers/MyPostsContainer"
import CommentsContainer from "../containers/CommentsContainer"
import FollowersContainer from "../containers/FollowersContainer"
import ReactLoading from 'react-loading';

class ProfileContainer extends Component {

  state = {
    allUsers: [],
    followers: []
  }

  componentDidMount() {
    fetch("http://the-coding-network-backend.herokuapp.com/api/v1/users")
    .then(res => res.json())
    .then(data => {
      this.setState({
        allUsers: data
      })
    })
  }

  followUser = (userID) => {
    const curUser = this.props.currentUser
    const currentProfile = this.state.allUsers.find(user => {
      return user.id === this.props.profileToView.id
    })
    if (!currentProfile.followers.includes(curUser)) {
      fetch("http://the-coding-network-backend.herokuapp.com/api/v1/follows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          follower_id: curUser.id,
          followee_id: userID
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      this.setState({
        followers: [...currentProfile.followers, curUser],
        numOfFollowers: currentProfile.followers.length + 1
      })
    }
  }

  render() {
    const currentProfile = this.state.allUsers.find(user => {
      return user.id === this.props.profileToView.id
    })
    return (
        currentProfile ?
        <Fragment>
          <div style={{marginBottom: "7%"}}>
            <h1 style={{"text-align": "center"}}><img style={{marginLeft:"1%", float: "left"}} src={Faker.image.avatar()}/>{currentProfile ? currentProfile.username : null}'s Profile</h1>
          </div>
          <div className="profile">
            <div className="row">
              <div className="col-md-8">
                <MyPostsContainer posts={currentProfile ? currentProfile.posts : null}/>
                <CommentsContainer changeProfileToView={this.props.changeProfileToView} profileToView={this.props.profileToView} currentUser={this.props.currentUser} comments={currentProfile ? currentProfile.comments : null} />
              </div>
              <div className="col-md-4">
                <FollowersContainer followers={this.state.followers.length < 0 ? this.state.followers : currentProfile ? currentProfile.followers : null}/>
                  {
                    currentProfile ?
                      this.props.currentUser.id === currentProfile.id ?
                      null
                      :
                      currentProfile.followers.filter(x => x.username === this.props.currentUser.username).length > 0 ?
                        <button style={{backgroundColor: "lightGreen"}} disabled>We are friends already!</button>
                        :
                        <button style={{backgroundColor: "lightGreen"}} onClick={() => this.followUser(currentProfile.id)}>Follow Me</button>
                      :
                      null
                  }
              </div>
            </div>
          </div>
        </Fragment>
        :
        <div className="loader">
          <ReactLoading type={"bubbles"} color={'#ffffff'} height={'10%'} width={'100%'} />
        </div>

    );
  }

}

export default ProfileContainer;
