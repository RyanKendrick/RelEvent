import React, { Component } from "react";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

class UserRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "eric11111@eric.com",
      username: "ericcool1",
      password: "1234567"
    };
  }

  _handleSubmit = e => {
    const { email, username, password } = this.state;
    alert("submit the form");
    const user = fetch("http://localhost:8080/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ user: { email, username, password } })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("user data from backend", data);
        this.props.setUser({
          status: true,
          username: data.object.username,
          userID: data.object.id
        });
        bake_cookie("userCookie", this.props.userState);
      });
    document.querySelector(".registration-wrapper").style.display = "none";
  };

  render() {
    return (
      <div className="registrationbox">
        <h1>User Registration</h1>
        <img src="../images/avatar-login.png" className="avatar" />

        <div
          className="close"
          onClick={e => {
            document.querySelector(".registration-wrapper").style.display =
              "none";
          }}
        >
          +
        </div>

        <h2>Username</h2>
        <input
          type="text"
          className="form-user"
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
          value={this.state.username}
        />

        <h2>Email</h2>
        <input
          type="email"
          className="form-user"
          onChange={e => {
            this.setState({
              email: e.target.value
            });
          }}
          value={this.state.email}
        />

        <h2>Password</h2>
        <input
          type="text"
          className="form-user"
          onChange={e => {
            this.setState({
              password: e.target.value
            });
          }}
          value={this.state.password}
        />

        <button
          onClick={this._handleSubmit}
          type="submit"
          className="submitBtn"
          id="submitBtn"
        >
          Register
        </button>
      </div>
    );
  }
}

export default UserRegistration;
