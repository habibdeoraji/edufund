import React, { Component } from "react";
// import SignupForm from "./SignupForm";
import { TextField } from "@material-ui/core";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <TextField
          label="First name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          required
        />
        <TextField
          label="Last name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
          required
        />
        <TextField
          label="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
          required
          type="email"
        />
        <TextField
          label="Password"
          onChange={handleChange("password")}
          defaultValue={values.password}
          required
          type="password"
        />
        <br />
        <button
          className="continue_button"
          style={{ marginTop: "20px" }}
          onClick={this.continue}
        >
          Continue
        </button>
      </div>
    );
  }
}

export default FormUserDetails;
