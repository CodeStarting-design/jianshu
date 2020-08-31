import * as actionTypes from './actionType'; 
import axios from 'axios';
import {fromJS} from 'immutable' 
export const getHomeDatas = () =>{
return (dispatch)=>{
  axios.get('/api/home.json').then((res)=>{
    //成功后执行的代码
    const data = res.data;
    const action =homeData(data.data);
    dispatch(action);
  }).catch(()=>{
    console.log(404);
  })
}
}
const homeData = (result) =>({
  type:actionTypes.GET_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
})
export const getMoreList = (page)=>{
  return(dispatch)=>{
    axios.get('/api/moreList.json?page' +page).then((res)=>{
      //成功后执行的代码
      const data = res.data;
      const action =moreList(data.data,page+1);
      dispatch(action);
    }).catch(()=>{
      console.log(404);
    })
  }
}
const moreList = (result,nextPage)=>({
  type:actionTypes.GET_MORE_LIST,
  articleList:fromJS(result.articleList),
  nextPage:nextPage
}) 
export const backShow = ()=>({
  type:actionTypes.BACK_SHOW
})
export const backHidden = ()=>({
  type:actionTypes.BACK_HIDDEN
})