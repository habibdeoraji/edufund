import React, { Component } from "react";
import "./signup.css";

export class FormHeader extends Component {
  render() {
    const { currentStep } = this.props;
    console.log(currentStep);
    return (
      <div>
        <p className="signup_header">Signup Form</p>
        <div>
          <div className="signup_steps_details">
            <span className={`current_step_${currentStep}`}>User Details</span>
            <span className={`current_step_${currentStep >= 2 && currentStep}`}>
              Personal Details
            </span>
            <span
              className={`current_step_${currentStep === 3 && currentStep}`}
            >
              Review
            </span>
          </div>
          <div className="signup_steps_count">
            <span
              className={`user_details_step step_count current_step_${currentStep}_circle`}
            >
              1
            </span>
            <span
              className={`horizontal_line_${currentStep < 3 ? currentStep : 2}`}
            ></span>
            <span
              className={`user_details_step step_count current_step_${
                currentStep >= 2 && currentStep
              }_circle`}
            >
              2
            </span>
            <span
              className={`horizontal_line_${
                (currentStep === 2 && currentStep) ||
                (currentStep === 3 && 2) ||
                0
              }`}
            ></span>
            <span
              className={`step_count current_step_${
                currentStep > 2 && currentStep
              }_circle`}
            >
              3
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FormHeader;
