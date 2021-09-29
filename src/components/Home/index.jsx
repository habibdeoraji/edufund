import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home_page">
      <img
        // src="https://pbs.twimg.com/profile_images/1377236428329918465/vyAUrnCA_400x400.jpg"
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
      </div>
    </div>
  );
};

export default Home;
