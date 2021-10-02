import React, { useState } from 'react';
import ListingHeader from '../ListingPage/ListingHeader';
import { connect } from "react-redux";
import "./userProfile.css";
import { updateUserDetails } from "../../actions"



const UserProfile = ({ currentUser, update_user_details }) => {
    const { contactNumber,
        userDob,
        userEmail,
        userGender,
        userName,
        userPassword,
    } = currentUser[0] || JSON.parse(localStorage.getItem('currentUser'))


    const [updatedFullName, setUpdatedFullName] = useState(userName)
    const [updatedDob, setUpdatedDob] = useState(userDob)
    const [updatedUserPassword, setUpdatedUserPassword] = useState(userPassword)
    const [updatedContactNumber, setUpdatedContactNumber] = useState(contactNumber)

    // handel User details Update
    const handleUserDetailsUpdate = (e) => {
        e.preventDefault();

        var allUsersListAfterUpdate = JSON.parse(localStorage.getItem('allUsers')) || [];
        const indexForUpdate = allUsersListAfterUpdate.findIndex(item => item.userEmail === userEmail
        )
        console.log(indexForUpdate)

        console.log(allUsersListAfterUpdate)
        allUsersListAfterUpdate[indexForUpdate].userName = updatedFullName;
        allUsersListAfterUpdate[indexForUpdate].contactNumber = updatedContactNumber;
        allUsersListAfterUpdate[indexForUpdate].dob = updatedDob;
        localStorage.setItem('allUsers', JSON.stringify(allUsersListAfterUpdate));
        localStorage.setItem('currentUser', JSON.stringify(allUsersListAfterUpdate[indexForUpdate]));
        localStorage.setItem('isUserFormUpdate', false)
        update_user_details([allUsersListAfterUpdate[indexForUpdate]])

    }


    console.log(currentUser)


    return (<div>
        <div style={{ textAlign: 'left', width: "60vw", margin: "10px auto" }} className="add_executive_details_container">
            <form className="add_executive_form" onSubmit={handleUserDetailsUpdate} >
                <div className="form-group">
                    <label htmlFor="userName">Full Name</label> <br />
                    <input type="text" className="form-control" id="fullname" placeholder="First name" onChange={(e) => { setUpdatedFullName(e.target.value) }} value={updatedFullName} required />
                </div>
                <div className="form-group">
                    <label htmlFor="userEmail">Email</label><br />
                    <input type="email" className="form-control" id="userEmail" placeholder="Last Name" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="Dob">DOB</label><br />
                    <input type="Date" className="form-control" id="Dob" placeholder="dob" onChange={(e) => { setUpdatedDob(e.target.value) }} value={userDob} />
                </div>
                <div className="form-group">
                    <label htmlFor="Gender">Gender(M/F)</label><br />
                    <input type="text" className="form-control" id="Gender" placeholder="Gender" disabled value={userGender} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label><br />
                    <input type="number" className="form-control" id="contactNumber" placeholder="contactNumber" onChange={(e) => {

                        setUpdatedContactNumber(e.target.value)
                    }} value={updatedContactNumber} required />
                </div>
                <div className="form-group">
                    <label htmlFor="userPassword">Password</label><br />
                    <input type="number" className="form-control" id="userPassword" placeholder="userPassword" onChange={(e) => {

                        setUpdatedUserPassword(e.target.value)
                    }} value={updatedUserPassword} required />
                </div>
                <button type="submit" className="btn btn-primary" >Save Details</button>
            </form>
        </div>
    </div >);
}


const mapDispatchToProps = (dispatch) => ({
    update_user_details: (payload) => dispatch(updateUserDetails(payload))
})


export default connect(null, mapDispatchToProps)(UserProfile);