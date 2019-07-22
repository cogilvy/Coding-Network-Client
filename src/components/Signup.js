import React from 'react';
import '../App.css';

class Signup extends React.Component {

  state = {
    username: "",
    password: ""
  }
  // https://threes-nutz-backend.herokuapp.com/api/v1/
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://the-coding-network-backend.herokuapp.com/api/v1/users", {
    // fetch("https://threes-nutz-backend.herokuapp.com/api/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({
        user: this.state
      })
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				console.log(response.errors)
			} else {
				localStorage.setItem("token", response.jwt)
				this.props.setCurrentUser(response.user)
			}
		})
  }

  render() {
    return (
      <div className="login-div">
        <br/><br/><br/>
        <h1>Sign Up Here!</h1>
        <form className="form-style-9" onSubmit={this.handleSubmit}>
          <label>Desired Username </label>
          <input style={{marginLeft: "3%"}} onChange={this.handleChange} type="text" name="username" ></input>
          <br></br>
          <label>Desired Password </label>
          <input style={{marginLeft: "3%"}} onChange={this.handleChange} type="password" name="password" ></input>
          <br></br>
          <br></br>
          <input style={{marginLeft: "22%"}} type="submit" value="SignUp"></input>
          <button style={{marginLeft: "1%"}} onClick={this.props.changeSignup}>Back to Login</button>
        </form>
      </div>
    );
  }

}

export default Signup;
