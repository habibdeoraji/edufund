import React, { Component } from 'react';
import axios from "axios"
// import "./carddetails.css"





class MutualFundDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMutualFund: this.props.location.state,
            currentMutualFundDetails: null
        }

    }

    componentDidMount() {
        axios.get(`https://api.mfapi.in/mf/${this.state.currentMutualFund.schemeCode}`).then((res) => {
            this.setState({ currentMutualFundDetails: res.data });
            // this.setState({ searchMutualFundList: res.data });
        });
    }


    render() {
        const meta = (this.state.currentMutualFund != null && this.state.currentMutualFund.meta);
        this.state.currentMutualFundDetails != null && console.log((this.state.currentMutualFundDetails.meta.scheme_code), "ABCDEF")
        // console.log(meta, "This meta");

        return (
            <div className="card-details-page">
                {this.state.currentMutualFundDetails != null && <div className="card_details_wrapper" style={{ textAlign: "left", width: "80vw", marginTop: "20px", padding: "5px", color: "white" }}>
                    <h3>Scheme Code:{this.state.currentMutualFundDetails.meta.scheme_code}</h3>
                    <p> Scheme Name: {this.state.currentMutualFundDetails.meta.scheme_name}</p>
                    <p> Scheme Type: {this.state.currentMutualFundDetails.meta.scheme_type}</p>
                    <p> Fund House: {this.state.currentMutualFundDetails.meta.fund_house}</p>
                    <p> Scheme Category: {this.state.currentMutualFundDetails.meta.scheme_category}</p>
                </div>}
            </div>
        );
    }
}

export default MutualFundDetailsPage;