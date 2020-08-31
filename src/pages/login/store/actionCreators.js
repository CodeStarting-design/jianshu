import * as actionTypes from './actionType'; 
import axios from 'axios';
//import {fromJS} from 'immutable' 
const changState = (result) => ({
  type:actionTypes.CHANGE_STATE,
  newLogin:result
})
export const  logout = () => ({
  type:actionTypes.LOGOUT
})
export const login = (account , password) =>{
  return (dispatch) =>{
    axios.get('/api/login.json?account='+account+'&password='+password)
    .then((res) => {
        const result = res.data.data;
        if(result){
        dispatch(changState(result));
        }else{
          alert('账号密码错误');
        }
      }).catch(() =>{
        console.log(404)
      }
      )
  }
}