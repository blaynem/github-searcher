import axios from 'axios';

import { STOREUSERDATA, STOREREPODATA, SHOWERROR } from '../constants'

const baseUrl = "https://api.github.com/users"

export function searchUser(userName) {
  return (dispatch) => {
    axios({
      method:"get",
      url:`${baseUrl}/${userName}`
    })
    .then( res => {
      dispatch({
        type: STOREUSERDATA,
        payload: res.data
      })
    })
    .catch( err => {
      return dispatch(throwError())
    })
    dispatch(getRepos(userName))
  }
}

export function getRepos(userName) {
  return(dispatch) => {
    axios({
      method:"get",
      url:`${baseUrl}/${userName}/repos`
    })
    .then( res => {
      dispatch({
        type: STOREREPODATA,
        payload: res.data
      })
    })
    .catch( err => {
      dispatch(throwError())
    })
  }
}

function throwError() {
  return(dispatch) => {
    dispatch({
      type: SHOWERROR,
      payload: "Looks like there are no users with that name."
    })
  }
}