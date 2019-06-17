import React, {Fragment, Component} from 'react';
import '../App.css';
import Login from "../components/Login"
import Signup from "../components/Signup"
import { Route } from 'react-router-dom'

class LoginSignup extends Component {

  state = {
    signupIsClicked: false
  }

  handleClick = (event) => {
    console.log("clicked")
  }

  changeSignup = () => {
    this.setState({
      signupIsClicked: !this.state.signupIsClicked
    })
  }

  render() {
    // console.log(!!this.props.currentUser)
    return (
      <Fragment>

      <div className="login-signup-div">


        <div className="homepage-div-container">
          <img style={{opacity:'.45', borderRadius: '5px'}} src="https://videohive.img.customer.envatousercontent.com/files/87d66970-9b50-4f3e-b0e2-c23420f20c63/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=1355e5d4d2dcfbd4f5013bb54c91c691" />
        </div>

        <div className="credentials-div">
          {
            this.state.signupIsClicked ?
              <Fragment>
                <Signup setCurrentUser={this.props.setCurrentUser} />
                <button onClick={this.changeSignup}>Back to Login</button>
              </Fragment>
              :
              <Fragment>
                <Login setCurrentUser={this.props.setCurrentUser} />
                <button onClick={this.changeSignup}>Sign Up !</button>
              </Fragment>
          }
        </div>
      </div>
      </Fragment>
    );
  }
}

// <Route path="/login" render={(routerProps) => {
//       return <Login setCurrentUser={this.setCurrentUser} {...routerProps}/>
//     }} />
// <Route path="/signup" render={(routerProps) => {
//       return <Signup setCurrentUser={this.setCurrentUser} {...routerProps}/>
//     }} />

// <div className="login-signup-div">
//
//     <button onClick={this.changeSignup}>Sign Up!</button>
//     {
//       this.state.signupIsClicked
//       ?
//       <Signup handleSignupSubmit={this.props.handleSignupSubmit}/>
//       :
//       <Login handleLoginSubmit={this.props.handleLoginSubmit}/>
//
//     }
//
// </div>


export default LoginSignup;
