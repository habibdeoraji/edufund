import { USER_LOGIN, USER_LOGOUT, USER_FORM_EDIT, UPDATE_CURRENT_USER_DETAILS } from "../actionTypes"

export const userLogin = (payload) => ({
    type: USER_LOGIN,
    payload
})

export const userLogout = (payload) => ({
    type: USER_LOGOUT,
    payload
})


export const updateCurrentUserDetails = (payload) => ({
    type: UPDATE_CURRENT_USER_DETAILS,
    payload
})


export const userFormEdit = (payload) => ({
    type: USER_FORM_EDIT,
    payload
})



