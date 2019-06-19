import React, {Component, Fragment} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar"
import LoginSignupContainer from "./containers/LoginSignupContainer"
import PostContainer from "./containers/PostContainer"
import NewPostForm from './components/NewPostForm'
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import UserContainer from './containers/UserContainer'

class App extends Component {

  state = {
    currentUser: null,
    isCreatingNewPost: false,
    postObjToView: {},
    isViewingProfile: false,
    profileToView: null
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      fetch("http://localhost:3000/api/v1/auto_login", {
      // fetch("https://threes-nutz-backend.herokuapp.com/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          localStorage.removeItem("user_id")
          // alert(response.errors)
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
    // fetch('https://threes-nutz-backend.herokuapp.com/api/v1/comments', {
    console.log(commentObj);
    fetch("http://localhost:3000/api/v1/comments", {
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


    fetch('http://localhost:3000/api/v1/posts', {
    // fetch('https://threes-nutz-backend.herokuapp.com/api/v1/posts', {
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
    this.setState({
      isViewingProfile: !this.state.isViewingProfile,
      profileToView: this.state.currentUser
    })
  }

  viewHomePageClick = (event) => {
    // event.preventDefault()
    this.setState({
      isCreatingNewPost: false,
      isViewingProfile: false
    })
  }

  changeProfileToView = (userObj) => {
    this.setState({
      profileToView: userObj,
      isViewingProfile: !this.state.isViewingProfile
    })
  }



  render(){
    // <NavBar currentUser={this.state.currentUser} logout={this.logout} />
    return (
      <div className="App">
          {
            this.state.currentUser ?
              <Fragment>
                <div className="navsl">
                    <a className="logo" href="/" onClick={this.viewHomePageClick}><img style={{height:"70px"}} src="./infinity.svg"/></a>
                    <p>Welcome to BookFace, {this.state.currentUser.username}! <small className="text-muted">(The best social network...)</small></p>
                    <a onClick={this.creatingNewPost} href=""><img className="nav-icon" src="./edit.png"/></a>
                    <SearchBar />
                    <div>
                      <button onClick={this.handleProfileClick} style={{"margin-right":"5px"}}>My Profile</button>
                      <button onClick={this.logout}>Logout</button>
                    </div>
                </div>
              </Fragment>
              :
              <div><p>LOGO</p></div>
          }
        {
          this.state.currentUser ?
            this.state.isViewingProfile ?
            <div className="wrapper">
              <UserContainer changeProfileToView={this.changeProfileToView} profileToView={this.state.profileToView} currentUser={this.state.currentUser}/>
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
