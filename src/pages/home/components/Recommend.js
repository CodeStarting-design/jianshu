import React ,{PureComponent} from 'react';
import {RecommendWarpper,RecommendItem} from '../style'
import {connect} from 'react-redux';
class Recommend extends PureComponent{
  render(){
    return (
      <RecommendWarpper>
      {
        this.props.list.map((item)=>{
          return (
          <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
          )
        })
      }
      
      </RecommendWarpper>
    )
  }
}
const mapStateToProps=(state)=>({
  list:state.getIn(['home','recommendList'])
});
export default connect(mapStateToProps,null) (Recommend);