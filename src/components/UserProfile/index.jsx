import React, { useState } from "react";
import ListingHeader from "../ListingPage/ListingHeader";
import { connect } from "react-redux";
import UpdateUserProfile from "./UpdateUserProfile";
import { userFormEdit } from "../../actions";

const UserProfile = ({ currentUser, isUserFormUpdate, userFormEditMode }) => {
  const {
    contactNumber,
    userDob,
    userEmail,
    userGender,
    userName,
    userPassword,
  } = currentUser[0] || JSON.parse(localStorage.getItem("currentUser"))[0];

  // User details form for update
  const userDetailsForm = (e) => {
    console.log(isUserFormUpdate);
    userFormEditMode();
    localStorage.setItem("isUserFormUpdate", JSON.stringify(!isUserFormUpdate));
    console.log(isUserFormUpdate);
  };

  return (
    <div>
      <ListingHeader />
      {isUserFormUpdate && <UpdateUserProfile currentUser={currentUser} />}
      {!isUserFormUpdate && (
        <div style={{ textAlign: "left", width: "60vw", margin: "20px auto" }}>
          <div>
            <p>
              Name: <span>{userName}</span>
            </p>
          </div>
          <div>
            <p>
              Email: <span>{userEmail}</span>
            </p>
          </div>
          <div>
            <p>
              Mobile: <span>{contactNumber}</span>
            </p>
          </div>
          <div>
            <p>
              Gender: <span>{userGender}</span>
            </p>
          </div>
          <div>
            <p>
              DOB: <span>{userDob}</span>
            </p>
          </div>
          <div>
            <p>
              Password: <span>{userPassword}</span>
            </p>
          </div>
          <button onClick={userDetailsForm}>Update Details</button>
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
