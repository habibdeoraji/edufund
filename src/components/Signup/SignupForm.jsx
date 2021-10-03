import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import ConfirmAllDetails from "./ConfirmAllDetails";
import { withRouter } from "react-router-dom";
import { validate, res } from 'react-email-validator';
import "./signup.css"
import {
  Form,
  Button,
  CardFooter
} from "reactstrap";
import FormHeader from "./FormHeader";

export class SignupForm extends Component {


  state = {
    currentStep: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    mobileNumber: ""
  }


  // Proceed to next step
  nextStep = () => {
    const { currentStep, email, firstName, lastName, password, gender, dob, contactNumber } = this.state;

    if ((currentStep === 1) && (email === "" || password === "" || firstName === "" || lastName === "")) {
      alert("Please enter all the details")
    } else if (currentStep === 1 && email !== "") {
      validate(email); // true
      if (res) {
        console.log("Valid Email")
        this.setState({ currentStep: currentStep + 1 })
      } else {
        alert("Invalid email")
      }
    }
    else if ((currentStep === 2) && (gender === "" || dob === "" || contactNumber === "")) {
      alert("Please enter all required fields.")
    } else if (currentStep === 2 && (gender !== "Male" && gender !== "Female" && gender !== "Other")) {
      alert("Invalid gender")
    }
    else {
      this.setState({ currentStep: currentStep + 1 })
    }

  }



  // Go to previous Step
  prevStep = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep - 1 })
  }

  // Handle fields change

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }



  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, firstName, lastName, gender, dob, mobileNumber } = this.state;


    // New user Details
    const userDetails = {
      userName: `${firstName} ${lastName}`, contactNumber: mobileNumber,
      userEmail: email, userPassword: password, userGender: gender, userDob: dob, userId: Math.floor((Math.random() * 100000000) + 1)
    }

    // Getting All users list from local storage
    var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

    var foundValue = allUsers.filter(obj => obj.userEmail === email);
    console.log(allUsers)
    if (foundValue.length > 0) {
      alert("Email already exist!")
    } else {
      allUsers.push(userDetails);
      localStorage.setItem('allUsers', JSON.stringify(allUsers));
      window.location.href = "/login"
    }

  };



  // The "next" and "previous" button functions
  previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this.prevStep} className="prev_button">
          Previous
        </Button>
      );
    }
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this.nextStep} className="next_button">
          Next
        </Button>
      );
    }
  }

  submitButton() {
    let currentStep = this.state.currentStep;

    if (currentStep > 2) {
      return <button color="primary float-right" className="submit_button" onSubmit={this.handleSubmit}>Submit</button>;
    }
  }


  render() {
    const { currentStep } = this.state;
    const { firstName, lastName, email, password, dob, gender, mobileNumber } = this.state;
    const values = { firstName, lastName, email, password, dob, gender, mobileNumber };

    return (

      <div className="signup_form">
        <FormHeader currentStep={currentStep} />
        <Form onSubmit={this.handleSubmit} >
          {currentStep === 1 && <FormUserDetails
            currentStep={this.currentStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}

          />}
          {currentStep === 2 && <FormPersonalDetails
            currentStep={this.currentStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />}
          {currentStep === 3 && <ConfirmAllDetails
            currentStep={this.currentStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />}

          <CardFooter className="signup_button_container">
            {this.previousButton()}
            {this.nextButton()}
            {this.submitButton()}
          </CardFooter>
        </Form>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              this.props.history.push("/login");
            }}
          >
            Login
        </span>
        </p>
      </div>
    )
  }
}

export default withRouter(SignupForm);
