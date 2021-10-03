import { USER_LOGIN, USER_LOGOUT, USER_FORM_EDIT, UPDATE_CURRENT_USER_DETAILS } from "../actionTypes"

const initialState = {
    loginStatus: localStorage.getItem('loginStatus') === 'true' ? true : false,
    userLogin: localStorage.getItem('userLogin') === 'true' ? true : false,
    userLogout: localStorage.getItem('userLogin') === 'false' ? false : true,
    userIdForUpdate: localStorage.getItem('userIdForUpdate'),
    allUsers: JSON.parse(localStorage.getItem('allUsers')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
    isUserFormUpdate: JSON.parse(localStorage.getItem('isUserFormUpdate')) || false,
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return { ...state, loginStatus: true, currentUser: payload }
        case USER_LOGOUT:
            return { ...state, loginStatus: false, currentUser: [], isUserFormUpdate: false }
        case UPDATE_CURRENT_USER_DETAILS:
            return { ...state, currentUser: payload.currentUser, allUsers: payload.allUsers, isUserFormUpdate: false }
        case USER_FORM_EDIT:
            return { ...state, isUserFormUpdate: true }
        default:
            return state
    }
}


export default loginReducer