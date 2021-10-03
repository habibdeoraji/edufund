import React, { useState } from "react";
import ListingHeader from "../ListingPage/ListingHeader";
import { connect } from "react-redux";
import UpdateUserProfile from "./UpdateUserProfile";
import { userFormEdit } from "../../Redux/actions";
import "./userProfile.css"

const UserProfile = ({ currentUser, isUserFormUpdate, userFormEditMode }) => {
  const {
    contactNumber,
    userDob,
    userEmail,
    userGender,
    userName,
    userPassword,
  } = currentUser || JSON.parse(localStorage.getItem("currentUser"))[0];

  // User details form for update
  const userDetailsForm = (e) => {
    console.log(isUserFormUpdate);
    userFormEditMode();
    localStorage.setItem("isUserFormUpdate", JSON.stringify(!isUserFormUpdate));
    console.log(isUserFormUpdate);
  };

  return (
    <div style={{ height: "100vh" }}>
      <ListingHeader />
      {isUserFormUpdate && <UpdateUserProfile currentUser={currentUser} />}
      {!isUserFormUpdate && (
        <div className="user_info_container" style={{ textAlign: "left" }}>
          <div>
            <p>
              <span className="user_info_value">Name:</span> {userName}
            </p>
          </div>
          <div>
            <p>
              <span className="user_info_value">Email:</span>{userEmail}
            </p>
          </div>
          <div>
            <p>
              <span className="user_info_value">Mobile:</span>{contactNumber}
            </p>
          </div>
          <div>
            <p>
              <span className="user_info_value">Gender:</span>{userGender}
            </p>
          </div>
          <div>
            <p>
              <span className="user_info_value">DOB:</span>{userDob}
            </p>
          </div>
          <div>
            <p>
              <span className="user_info_value">Password:</span>{userPassword}
            </p>
          </div>
          <button onClick={userDetailsForm} className="update_details_button">Update Details</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  isUserFormUpdate: state.isUserFormUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  userFormEditMode: () => dispatch(userFormEdit("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
