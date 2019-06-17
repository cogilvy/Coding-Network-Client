import React, {Component, Fragment} from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Login from "./components/Login"
import Signup from "./components/Signup"
import SearchBar from "./components/SearchBar"
import LoginSignupContainer from "./containers/LoginSignupContainer"
import PostContainer from "./containers/PostContainer"
import NewPostForm from './components/NewPostForm'
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');


class App extends Component {

  state = {
    currentUser: null,
    isCreatingNewPost: false
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      // fetch("http://localhost:3000/api/v1/auto_login", {
      fetch("https://threes-nutz-backend.herokuapp.com/api/v1/auto_login", {
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
    console.log(postObj);

    // fetch('http://localhost:3000/api/v1/posts', {
    fetch('https://threes-nutz-backend.herokuapp.com/api/v1/posts', {
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


  render(){
    // <NavBar currentUser={this.state.currentUser} logout={this.logout} />
    return (
      <div className="App">
          {
            this.state.currentUser ?
              <Fragment>
                <div className="navsl">
                    <p>Welcome to BookFace, {this.state.currentUser.username}! <small class="text-muted">(The best social network...)</small></p>
                    <a onClick={this.creatingNewPost} href=""><img className="nav-icon" src="./edit.png"/></a>
                    <SearchBar />
                    <div>
                      <button style={{"margin-right":"5px"}}>My Profile</button>
                      <button onClick={this.logout}>Logout</button>
                    </div>
                </div>
              </Fragment>
              :
              <div><p>LOGO</p></div>
          }
        {
          this.state.currentUser ?
          <div className="wrapper">
            <PostContainer currentUser={this.state.currentUser} createNewPost={this.createNewPost} isCreatingNewPost={this.state.isCreatingNewPost}/>
          </div>

          :
          <LoginSignupContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        }
      </div>
    );
  }
}

export default App;
