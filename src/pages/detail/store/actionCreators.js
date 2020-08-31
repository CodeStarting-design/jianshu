import * as actionTypes from './actionType'; 
import axios from 'axios';
//import {fromJS} from 'immutable' 
const getDetails = (result)=>({
type:actionTypes.GET_DETAILS,
title:result.title,
content:result.content
})
export const getDetailData = (id)=>{
  return(dispatch) => {
    axios.get('/api/detail.json?id='+ id).then((res)=>{
      const data = res.data;
      const action =getDetails(data.data);
      dispatch(action);
    }).catch(()=>{
      console.log(404);
    })
  }
}