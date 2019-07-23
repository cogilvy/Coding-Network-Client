import React, {Component, Fragment} from 'react';
import './App.css';
import LoginSignupContainer from "./containers/LoginSignupContainer"
import PostContainer from "./containers/PostContainer"
import ProfileContainer from "./containers/ProfileContainer"
import NewPostForm from './components/NewPostForm'
import NavBar from './components/NavBar'
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import UserContainer from './containers/UserContainer'

class App extends Component {

  state = {
    currentUser: null,
    isCreatingNewPost: false,
    postObjToView: {},
    isViewingProfile: false,
    profileToView: null,
    buttonText: "My Profile"
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      fetch("http://the-coding-network-backend.herokuapp.com/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          localStorage.removeItem("user_id")
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    }
  }

  setCurrentUserAfter = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  addNewComment = (commentObj) => {
    console.log(commentObj);
    fetch("http://the-coding-network-backend.herokuapp.com/api/v1/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        content: commentObj.content,
        user_id: commentObj.user.id,
        post_id: commentObj.post.id
      })
    })
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("token")
    this.props.history.push("/login")
  }

  creatingNewPost = (event) => {
    event.preventDefault()
    this.setState({
      isCreatingNewPost: !this.state.isCreatingNewPost
    })

  }

  createNewPost = (postObj) => {
    fetch('http://the-coding-network-backend.herokuapp.com/api/v1/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        post: postObj
      })
    })
    .then(response => {

      this.setState({
          isCreatingNewPost: !this.state.isCreatingNewPost
      })
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("token")
  }

  setPostObjToView = (postObj) => {
    this.setState({
      postObjToView: postObj
    })
  }

  handleProfileClick = (event) => {
    event.preventDefault()
    if (this.state.buttonText === "My Profile") {
      this.setState({
        isViewingProfile: !this.state.isViewingProfile,
        profileToView: this.state.currentUser,
        buttonText: "Back to News Feed"
      })
    } else {
      this.setState({
        isViewingProfile: !this.state.isViewingProfile,
        profileToView: this.state.currentUser,
        buttonText: "My Profile"
      })
    }
  }

  viewHomePageClick = (event) => {
    // event.preventDefault()
    this.setState({
      isCreatingNewPost: false,
      isViewingProfile: false,
      buttonText: "My Profile"
    })
  }

  changeProfileToView = (userObj) => {
    this.setState({
      profileToView: userObj,
      isViewingProfile: !this.state.isViewingProfile,
      buttonText: "Back To News Feed"
    })
  }

  render(){
    console.log("hello");
    return (
      <div className="App">
        <img className="source-image" src="https://images.unsplash.com/photo-1490826212256-caefa02bc772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2832&q=80"></img>
          {
            this.state.currentUser ?
              <Fragment>
                <div className="navsl">
                    <a className="logo" href="/" onClick={this.viewHomePageClick}><img style={{height:"50px", margin: "10% 1%"}} src="http://pngimg.com/uploads/infinity_symbol/infinity_symblo_PNG48.png"/></a>
                    <p style={{margin: "1% 1% 0% 0%"}}>Welcome to The Coding Network, {this.state.currentUser.username}!</p>
                    <div style={{margin: "1% 0% 0% 0%"}}>
                      <p><a onClick={this.creatingNewPost} href=""><img className="nav-icon" src="./edit.png"/></a>New Post</p>
                    </div>
                    <div style={{margin: "1% 0%"}}>
                      <button onClick={this.handleProfileClick} style={{"marginRight":"5px"}}>{this.state.buttonText}</button>
                      <button onClick={this.logout}>Logout</button>
                    </div>
                </div>
              </Fragment>
              :
              <div className="navsl"><a className="logo-home" href="" onClick={this.viewHomePageClick}><img style={{height:"50px", marginRight: "5%"}} src="http://pngimg.com/uploads/infinity_symbol/infinity_symblo_PNG48.png"/>The Coding Network</a></div>
          }
        {
          this.state.currentUser ?
            this.state.isViewingProfile ?
            <div className="wrapper">
              <ProfileContainer changeProfileToView={this.changeProfileToView} profileToView={this.state.profileToView} currentUser={this.state.currentUser}/>
            </div>
            :
            <div className="wrapper">
              <PostContainer changeProfileToView={this.changeProfileToView} profileToView={this.state.profileToView} setCurrentUserAfter={this.setCurrentUserAfter} postObjToView={this.state.postObjToView} addNewComment={this.addNewComment} currentUser={this.state.currentUser} createNewPost={this.createNewPost} isCreatingNewPost={this.state.isCreatingNewPost}/>
            </div>
          :
          <LoginSignupContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        }
      </div>
    );
  }
}

export default App;
