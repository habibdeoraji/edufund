import React, { Component } from "react";
// import SignupForm from "./SignupForm";
import { TextField } from "@material-ui/core";
import FormHeader from "./FormHeader";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <FormHeader />
        <div className="signup_form_container">
          <TextField
            className="input_field_signup"
            label="First name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <TextField
            className="input_field_signup"
            label="Last name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <TextField
            className="input_field_signup"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            type="email"
          />
          <TextField
            className="input_field_signup"
            label="Password"
            onChange={handleChange("password")}
            defaultValue={values.password}
            required
            type="password"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
