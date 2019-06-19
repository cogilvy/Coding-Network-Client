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

        </div>

        <div className="credentials-div">
          {
            this.state.signupIsClicked ?
              <Fragment>
                <Signup setCurrentUser={this.props.setCurrentUser} changeSignup={this.changeSignup} />
              </Fragment>
              :
              <Fragment>
                <Login setCurrentUser={this.props.setCurrentUser} changeSignup={this.changeSignup} />
              </Fragment>
          }
        </div>
      </div>
      </Fragment>
    );
  }
}
export default LoginSignup;

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
