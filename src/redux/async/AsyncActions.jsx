import { FETCH_ERROR, FETCH_SUCCESS, FETCH_USER } from "./AsyncTypes"
import axios from 'axios'

export const fetchUser = () => {
    return{
        type: FETCH_USER
    }
}

export const fetchSuccess = (user) => {
    return{
        type: FETCH_SUCCESS,
        payload: user
    }
}

export const fetchError = (error) => {
    return{
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUser)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchSuccess(users))
        }).catch(error => {
            const errors = error.message
            dispatch(fetchError(errors))
        })
    }
}