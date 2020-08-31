import React ,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store/index'
class Login extends PureComponent{
  render(){
    if(!this.props.loginState){
    return (
    <LoginWrapper>
      <LoginBox>
        <Input placeholder='账号' ref={(input) => {this.account=input}} ></Input>
        <Input placeholder='密码' type='password' ref={ (input) =>{this.password=input}}></Input>
        <Button onClick={() => this.props.login(this.account.value,this.password.value)}>登录</Button> 
        </LoginBox>
    </LoginWrapper>
    )
  }else{
    return <Redirect to='/'></Redirect>
  }
  }
  
}
const mapStateToProps=(state)=>({
loginState:state.getIn(['login','login'])
})
const mapDispatchToProps= (dispatch) =>({
 login(account,password){
    dispatch(actionCreators.login(account,password))
 }
})
export default connect(mapStateToProps,mapDispatchToProps) (Login);