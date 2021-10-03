import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <div className="signup_form_container">
          <TextField
            className="input_field_signup"
            label="First name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            size="small"
            variant="outlined"
            required
          />
          <TextField
            className="input_field_signup"
            label="Last name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            size="small"
            variant="outlined"
            required
          />
          <TextField
            className="input_field_signup"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            variant="outlined"
            size="small"
            required
            type="email"
          />
          <TextField
            className="input_field_signup"
            label="Password"
            onChange={handleChange("password")}
            defaultValue={values.password}
            variant="outlined"
            size="small"
            required
            type="password"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
