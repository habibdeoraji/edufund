import React, { useState } from 'react';
import { connect } from "react-redux";
import "./userProfile.css";
import { updateCurrentUserDetails } from "../../Redux/actions";



const UserProfile = ({ currentUser, isUserFormUpdate, allUsers, update_current_user_details }) => {
    const { contactNumber,
        userDob,
        userEmail,
        userGender,
        userName,
        userPassword,
    } = currentUser || JSON.parse(localStorage.getItem('currentUser'))




    const [updatedFullName, setUpdatedFullName] = useState(userName)
    const [updatedDob, setUpdatedDob] = useState(userDob)
    const [updatedUserPassword, setUpdatedUserPassword] = useState(userPassword)
    const [updatedContactNumber, setUpdatedContactNumber] = useState(contactNumber)

    // handel User details Update
    const handleUserDetailsUpdate = (e) => {
        e.preventDefault();

        var allUsersListAfterUpdate = allUsers || [];
        const indexForUpdate = allUsersListAfterUpdate.findIndex(item => item.userEmail === userEmail
        )
        console.log(indexForUpdate)

        console.log(allUsersListAfterUpdate)
        allUsersListAfterUpdate[indexForUpdate].userName = updatedFullName;
        allUsersListAfterUpdate[indexForUpdate].contactNumber = updatedContactNumber;
        allUsersListAfterUpdate[indexForUpdate].userDob = updatedDob;
        allUsersListAfterUpdate[indexForUpdate].userPassword = updatedUserPassword;
        localStorage.setItem('allUsers', JSON.stringify(allUsersListAfterUpdate));
        localStorage.setItem('currentUser', JSON.stringify(allUsersListAfterUpdate[indexForUpdate]));
        localStorage.setItem('isUserFormUpdate', false)
        console.log(allUsersListAfterUpdate[indexForUpdate], "Updated User")
        update_current_user_details({ allUsers: allUsersListAfterUpdate, currentUser: allUsersListAfterUpdate[indexForUpdate] })

    }


    console.log(currentUser)


    return (<div>
        {isUserFormUpdate && <div style={{ textAlign: 'left', width: "70vw", margin: "10px auto" }} className="update_user_details_container">
            <form className="update_user_form" onSubmit={handleUserDetailsUpdate} >
                <div className="form-group">
                    <label htmlFor="userName">Full Name</label> <br />
                    <input type="text" className="form-control" id="fullname" placeholder="Full Name" onChange={(e) => { setUpdatedFullName(e.target.value) }} value={updatedFullName} required />
                </div>
                <div className="form-group">
                    <label htmlFor="userEmail">Email</label><br />
                    <input type="email" className="form-control" id="userEmail" placeholder="Email" value={userEmail} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="Dob">DOB</label><br />
                    <input type="Date" className="form-control" id="Dob" placeholder="dob" onChange={(e) => { setUpdatedDob(e.target.value) }} value={updatedDob} />
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
                <button type="submit" className="save_details_button" >Save Details</button>
            </form>
        </div>}
    </div >);
}


const mapDispatchToProps = (dispatch) => ({
    update_current_user_details: (payload) => dispatch(updateCurrentUserDetails(payload))
})

const mapStateToProps = (state) => ({
    isUserFormUpdate: state.isUserFormUpdate,
    allUsers: state.allUsers
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);