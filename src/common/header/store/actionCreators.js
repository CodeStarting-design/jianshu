import { FOCUS,BLUR,CHANGE_LIST,MOUSE_IN,MOUSE_LEAVE,CLICK_CHANGE } from './actionType';
import { fromJS } from 'immutable'
import axios from 'axios'
const changelist= (data)=>({
  type:CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length / 5)
})
export const focus = () => ({
   type:FOCUS
})
export const blur =() =>({
  type:BLUR
})
export const getList = () => {
  return (dispatch) =>{
    axios.get('/api/headerList.json').then((res)=>{
      //成功后执行的代码
      const data = res.data;
      const action =changelist(data.data);
      dispatch(action);
    }).catch(()=>{
      console.log(404);
    })
  }
}
export const mouseIn = ()=>({
  type:MOUSE_IN
})
export  const mouseLeave = ()=>({
  type:MOUSE_LEAVE
})
export const clickChange =(page)=>({
  type:CLICK_CHANGE,
  page:page
})