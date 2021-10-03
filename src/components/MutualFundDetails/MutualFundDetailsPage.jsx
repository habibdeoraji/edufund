import React, { Component } from "react";
import axios from "axios";
import RenderLineChart from "../MutualFundDetailsChart";
import ListingHeader from "../ListingPage/ListingHeader";

class MutualFundDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMutualFund: this.props.location.state,
      currentMutualFundDetails: null,
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.mfapi.in/mf/${this.state.currentMutualFund.schemeCode}`)
      .then((res) => {
        this.setState({ currentMutualFundDetails: res.data });
      });
  }

  render() {
    const { meta, data } =
      this.state.currentMutualFundDetails != null &&
      this.state.currentMutualFundDetails;

    return (
      <div className="card-details-page">
        <ListingHeader />
        <RenderLineChart currentMutualFundData={data} />
        {this.state.currentMutualFundDetails === null && (
          <img
            src="https://c.tenor.com/PfFDd3eNE_gAAAAC/loading-load.gif"
            alt=""
            style={{ width: "15vh", marginTop: "50%", marginLeft: "40%" }}
          />
        )}
        {this.state.currentMutualFundDetails != null && (
          <div className="card_details_wrapper">
            <h3>Scheme Code:{meta.scheme_code}</h3>
            <p>
              <span style={{ fontWeight: "bold" }}>Scheme Name:</span>
              {meta.scheme_name}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Scheme Type:</span>
              {meta.scheme_type}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Fund House:</span>
              {meta.fund_house}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Scheme Category:</span>
              {meta.scheme_category}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default MutualFundDetailsPage;
