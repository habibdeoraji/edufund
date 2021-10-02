import React, { useState } from "react";
import "./login.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../actions";

const Login = ({ allUsers, loginStatus, userLoggedIn }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory()


  if (loginStatus !== "false") {
    localStorage.setItem("loginStatus", loginStatus);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(allUsers);
    console.log(loginEmail, loginPassword);

    var foundUser = allUsers.filter((obj) => obj.userEmail === loginEmail);
    console.log(foundUser);
    if (foundUser.length === 0) {
      alert("User does not exist!");
    } else if (
      foundUser[0].userPassword === loginPassword &&
      foundUser[0].userEmail === loginEmail
    ) {
      // setLoginStatus("true");
      userLoggedIn(foundUser[0])
      console.log(foundUser[0])
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      localStorage.setItem('loginStatus', JSON.stringify(true));
      history.push("/listing");


    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-body">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="form-group form_group">
          <label>Username </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            required
            onChange={(eVal) => setLoginEmail(eVal.target.value)}
          />
        </div>

        <div className="form-group form_group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            onChange={(pVal) => {
              setLoginPassword(pVal.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allUsers: state.allUsers,
  loginStatus: state.loginStatus
});

const mapDispatchToProps = (dispatch) => ({
  userLoggedIn: (payload) => dispatch(userLogin(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
