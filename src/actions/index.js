import axios from 'axios';

import { STOREUSERDATA } from '../constants'
const baseUrl = "https://api.github.com/users"

export function searchUser(userName) {
  return(dispatch) => {
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
  }
}