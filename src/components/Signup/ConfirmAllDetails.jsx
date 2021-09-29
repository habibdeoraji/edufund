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
      <div
        style={{
          padding: "10px",
          textAlign: "left",
          marginTop: "60px",
          marginLeft: "20%",
        }}
      >
        <div className="user_data">
          <p>
            <span>Name: </span> {firstName} {lastName}
          </p>
          <p>
            <span>Email: </span> {email}
          </p>
          <p>
            <span>Contact: </span> {mobileNumber}
          </p>
          <p>
            <span>Gender: </span> {gender}
          </p>
          <p>
            <span>DOB: </span> {dob}
          </p>
        </div>

        <br />
        <button
          className="continue_button"
          style={{ marginTop: "20px" }}
          onClick={this.continue}
        >
          Confirm & Continue
        </button>
        <button
          className="continue_button"
          style={{ marginTop: "20px", marginLeft: "10px" }}
          onClick={this.back}
        >
          Back
        </button>
      </div>
    );
  }
}

export default ConfirmAllDetails;
