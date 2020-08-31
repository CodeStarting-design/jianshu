import React ,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
class Writer extends PureComponent{
  render(){
    if(this.props.loginState){
    return (
       <div>写文章</div>
    )
  }else{
    return <Redirect to='./login'></Redirect>
  }
  }
  
}
const mapStateToProps=(state)=>({
loginState:state.getIn(['login','login'])
})
const mapDispatchToProps= (dispatch) =>({
 

})
export default connect(mapStateToProps,mapDispatchToProps) (Writer);