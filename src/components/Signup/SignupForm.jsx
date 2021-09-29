import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import ConfirmAllDetails from "./ConfirmAllDetails"
import Login from "../Login";

export class SignupForm extends Component {

  state = {
    step: 1,
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
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  // Go to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }

  // Handle fields change

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }



  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password, dob, gender, mobileNumber } = this.state;
    const values = { firstName, lastName, email, password, dob, gender, mobileNumber };


    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />)
      case 2:
        return (<FormPersonalDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />)
      case 3:
        return (<ConfirmAllDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />)
      case 4: return (<Login />)
      default:
        return <h1>Default</h1>
    }
  }
}

export default SignupForm;
