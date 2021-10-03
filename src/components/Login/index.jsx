import React, { useState } from "react";
import "./login.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../Redux/actions";

const Login = ({ allUsers, loginStatus, userLoggedIn }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();

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
      userLoggedIn(foundUser[0]);
      console.log(foundUser[0], "Testing Current User");
      localStorage.setItem("currentUser", JSON.stringify(foundUser[0]));
      localStorage.setItem("loginStatus", JSON.stringify(true));
      history.push("/listing");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login_body">
      <i
        className="fas fa-arrow-left left_arrow"
        onClick={() => {
          history.push("/");
        }}
      ></i>
      <br />

      <div className="login_user_icon_wrapper">
        <i className="far fa-user-circle login_user_icon"></i>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h3>Login to your account</h3>
        <div className="form_group">
          <label>Username </label>
          <input
            type="text"
            className="login_input"
            placeholder="Enter username"
            required
            onChange={(eVal) => setLoginEmail(eVal.target.value)}
          />
        </div>

        <div className="form_group">
          <label>Password</label>
          <input
            type="password"
            className="login_input"
            placeholder="Enter password"
            required
            onChange={(pVal) => {
              setLoginPassword(pVal.target.value);
            }}
          />
        </div>
        <button type="submit" className="login_button">
          Submit
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            history.push("/signup");
          }}
        >
          SignUp
        </span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allUsers: state.allUsers,
  loginStatus: state.loginStatus,
});

const mapDispatchToProps = (dispatch) => ({
  userLoggedIn: (payload) => dispatch(userLogin(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
