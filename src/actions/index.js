import axios from 'axios';

import { STOREUSERDATA, STOREREPODATA } from '../constants'

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
    .catch( err => { console.log("err", err)} )
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
    .catch( err => { console.log("err", err)} )
  }
}