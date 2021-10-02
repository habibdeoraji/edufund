import React from 'react';
import "./listing.css";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { userLogout } from "../../actions"




const ListingHeader = ({ userLoggedOut }) => {
    const history = useHistory()
    // const loginStatus = localStorage.getItem('LoginStatus')
    const loginStatus = JSON.parse(localStorage.getItem('allUsers'))
    console.log(loginStatus, 123);

    return (<div className="listing_header">
        {loginStatus && <span onClick={() => { history.push('/listing') }}>Mutual Funds</span>}
        {loginStatus && <span onClick={() => { history.push('/user-profile') }}>Profile</span>}
        {loginStatus && <span onClick={() => {
            userLoggedOut(false)
            localStorage.setItem('loginStatus', false);
            history.push('/login')
            localStorage.setItem('currentUser', JSON.stringify(null));
        }}>Logout</span>}
    </div>);
}


const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
    userLoggedOut: (payload) => dispatch(userLogout(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingHeader)