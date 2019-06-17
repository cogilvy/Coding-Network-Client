import React from 'react';
import '../App.css';


class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // https://threes-nutz-backend.herokuapp.com/api/v1/
  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
    // fetch("https://threes-nutz-backend.herokuapp.com/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
				"Accepts": "application/json"
      },
      body: JSON.stringify({
        user: this.state
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors) {
        console.log(response.errors)
      } else {
        localStorage.setItem("token", response.jwt)
        this.props.setCurrentUser(response.user)
        console.log("Login.js response: ", response)
      }
    })
  }

  render() {

    return(
      <div className="login-div">
        <br/><br/><br/>
        <h1>Please Enter Your Login Details</h1>
        <form className="form-style-9" onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input onChange={this.handleChange} type="text" name="username" placeholder="username..."></input>
          <br></br>
          <label>Password</label>
          <input onChange={this.handleChange} type="password" name="password" placeholder="password..."></input>
          <br></br>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    )
  }

}

export default Login;
