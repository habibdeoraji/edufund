import React, { Component } from "react";
import { TextField } from "@material-ui/core";


export class FormPersonalDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;


        return (
            <React.Fragment>
                <div className="signup_form_container">
                    <TextField
                        className="input_field_signup"
                        label="Mobile Number"
                        onChange={handleChange("mobileNumber")}
                        defaultValue={values.mobileNumber}
                        type="number"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        required
                    />
                    <TextField
                        className="input_field_signup"
                        label="Gender"
                        onChange={handleChange("gender")}
                        defaultValue={values.gender}
                        required
                        variant="outlined"
                        size="small"
                        helperText="Only Enter (Male/Female/Other)"
                    />

                    <TextField
                        className="input_field_signup"
                        label="DOB"
                        onChange={handleChange("dob")}
                        defaultValue={values.dob}
                        required
                        type="date"
                        variant="outlined"
                        size="small"
                        helperText="Enter your date of birth"

                    />

                </div>
            </React.Fragment>

        );
    }
}

export default FormPersonalDetails;
