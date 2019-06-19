import React, { Fragment, Component } from 'react';
import MyPostsContainer from "../containers/MyPostsContainer"
import CommentsContainer from "../containers/CommentsContainer"
import FollowersContainer from "../containers/FollowersContainer"

class ProfileContainer extends Component {

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

  render() {
    const currentProfile = this.state.allUsers.find(user => {
      return user.id === this.props.profileToView.id
    })
    console.log(currentProfile ? currentProfile.comments : null);

    return (
      <Fragment>
        <h1 style={{"text-align": "center"}}>{currentProfile ? currentProfile.username : null}'s Profile</h1>
        <div className="profile">
          <div className="row">
            <div className="col-md-8">
              <MyPostsContainer posts={currentProfile ? currentProfile.posts : null}/>
              <CommentsContainer comments={currentProfile ? currentProfile.comments : null} />
            </div>
            <div className="col-md-4">
              <FollowersContainer followers={currentProfile ? currentProfile.followers : null}/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

}

export default ProfileContainer;
