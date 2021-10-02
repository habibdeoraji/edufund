import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import FormHeader from "./FormHeader";

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
                <FormHeader />
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <TextField
                        label="Mobile Number"
                        onChange={handleChange("mobileNumber")}
                        defaultValue={values.mobileNumber}
                        type="number"
                    />
                    <TextField
                        label="Gender"
                        onChange={handleChange("gender")}
                        defaultValue={values.gender}
                        required
                    />
                    <TextField
                        label="DOB"
                        onChange={handleChange("dob")}
                        defaultValue={values.dob}
                        required
                        type="date"
                    />
                    <br />
                    {/* <button
                        className="continue_button"
                        style={{ marginTop: "20px" }}
                        onClick={this.continue}
                    >
                        Continue
        </button>
                    <button
                        className="continue_button"
                        style={{ marginTop: "20px", marginLeft: "10px" }}
                        onClick={this.back}
                    >
                        Back
        </button> */}
                </div>
            </React.Fragment>

        );
    }
}

export default FormPersonalDetails;
