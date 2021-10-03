import React, { Component } from "react";

export class ConfirmAllDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      dob,
      gender,
      mobileNumber,
    } = this.props.values;
    return (
      <React.Fragment>
        <div
          className="signup_form_container confirm_signup_details"
        >
          <div className="user_data">
            <p>
              <span className="user_data_value">Name: </span> {firstName} {lastName}
            </p>
            <p>
              <span className="user_data_value">Email: </span> {email}
            </p>
            <p>
              <span className="user_data_value">Contact: </span> {mobileNumber}
            </p>
            <p>
              <span className="user_data_value">Gender: </span> {gender}
            </p>
            <p>
              <span className="user_data_value">DOB: </span> {dob}
            </p>
          </div>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmAllDetails;
