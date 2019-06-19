import React, {Fragment, Component} from 'react';
import '../App.css';
import Login from "../components/Login"
import Signup from "../components/Signup"

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
          <img style={{opacity:'1', borderRadius: '5px'}} src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3465&q=80" />
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
