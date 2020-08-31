import { fromJS } from 'immutable' ;
import * as actionType from './actionType'
const defaultState= fromJS( { 
 login:false//是否登陆的状态判断,是否登录影响头部区块的显示
 });
export default ( state =defaultState ,action) =>{
  switch(action.type){
     case actionType.CHANGE_STATE:
       return state.set('login',action.newLogin)
     case actionType.LOGOUT:
       return state.set('login',false)
        default :
    return state;
  }
  
}
 