import { fromJS } from 'immutable' ;
import * as actionTypes from './actionType'
const defaultState= fromJS( { 
  focused: false,
  list:[ ],
  page:1,//当前位于的页数
  totalPage:1,//转换时总共的页数
  mouseIn:false
 });
export default ( state =defaultState ,action) =>{
  switch(action.type){
    case actionTypes.FOCUS :
      return state.set('focused' , true );
    case actionTypes.BLUR :
      return state.set('focused' , false );
    case actionTypes.CHANGE_LIST :
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      });
      //return state.set('list',action.data).set('totalPage',action.totalPage);
    case actionTypes.MOUSE_IN:
      return state.set('mouseIn',true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn',false);
    case actionTypes.CLICK_CHANGE:
      return state.set('page',action.page);
    default :
    return state;
  }
  
}

