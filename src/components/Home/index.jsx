import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home_page">
      <img
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/demo-674987.png"
        alt=""
        style={{ marginTop: "10px" }}
      />
      <div className="home_page_content_div">
        <p>Welcome to</p>
        <h1>EduFund</h1>
      </div>
      <div className="home_page_button">
        <Link to="/login" className="sign_in_link">
          Sign In
        </Link>
        <Link to="/signup" className="sign_up_link">
          Sign Up
        </Link>
        <Link to="/listing" className="mutual_fund_listing_link">
          Mutual Fund Listing
        </Link>
      </div>
    </div>
  );
};

export default Home;
