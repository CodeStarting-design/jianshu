import { fromJS } from 'immutable' ;
import {GET_HOME_DATA,GET_MORE_LIST,BACK_HIDDEN,BACK_SHOW} from './actionType'
const defaultState= fromJS( { 
 topicList:[],
 //两个数组
 articleList:[],

 recommendList:[],
 articlePage:1,
 showBack:false
 //定义用于首页部分的数据
 });
export default ( state =defaultState ,action) =>{
  switch(action.type){
    case GET_HOME_DATA:
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
      });
      case GET_MORE_LIST:
        return state.merge({
          'articleList':state.get('articleList').concat(action.articleList),
          'articlePage':action.nextPage
        });
        //state.set('articleList',state.get('articleList').concat(action.articleList))
     case BACK_SHOW:
       return state.set('showBack',true);
    case BACK_HIDDEN:
      return state.set('showBack',false);
        default :
    return state;
  }
  
}
