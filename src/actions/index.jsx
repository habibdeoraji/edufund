import { USER_LOGIN, USER_LOGOUT, UPDATE_USER_DETAILS, USER_FORM_EDIT } from "../actionTypes"

export const userLogin = (payload) => ({
    type: USER_LOGIN,
    payload
})

export const userLogout = (payload) => ({
    type: USER_LOGOUT,
    payload
})


export const updateUserDetails = (payload) => ({
    type: UPDATE_USER_DETAILS,
    payload
})

export const userFormEdit = (payload) => ({
    type: USER_FORM_EDIT,
    payload
})



