//头部组件的父组件
import React , {PureComponent}  from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store/index' 
import {CSSTransition} from 'react-transition-group'
import { 
  HeaderWrapper,
  Logo ,
  Nav ,
  NavItem,
  NavSearch,
  Addition,
  Button,
  Search ,
  SearchInfo,
  SearchInfoItem ,
  SwitchButton,
  SearchInfoTitle,
  SearchInfoList} from './style'
import  { actionCreators } from './store';
class Header extends PureComponent{

  getListArea = () => {
    const { focused ,list, page,mouseIn,totalPage} = this.props;
    const pageList=[];
    const norList=list.toJS();
    if(norList.length){
    for(let i =((page-1)*5);i<(page*5);i++){
        pageList.push(
          <SearchInfoItem key={norList[i]}>{norList[i]}</SearchInfoItem>
        )
    }
  }
    if(focused || mouseIn ){
     return (
      <SearchInfo onMouseEnter={this.props.handleMouseIn} 
      onMouseLeave={this.props.handleMouseLeave}>
      <SearchInfoTitle>热门搜索
        <SwitchButton 
        onClick={()=>this.props.handleClickChange(page,totalPage)}
        ><span className="iconfont spin">&#xe81f; </span>
          换一批</SwitchButton>
        </SearchInfoTitle>
          <SearchInfoList>
           {
             pageList
           }
           </SearchInfoList>
    </SearchInfo>
     )
    }else{
      return null;
    }
  }
  render(){
    return(
      <HeaderWrapper> 
          <Link to='/'>
          <Logo></Logo>
          </Link>
           
           <Nav>
           <Link to='/'> <NavItem className='left active' > 首页</NavItem></Link>
            <NavItem className='left'>下载App</NavItem>
            {
              this.props.login ? <NavItem className='right' onClick={this.props.logout}>退出</NavItem>:<Link to='./login'><NavItem className='right'>登录</NavItem></Link>
            }
            
            <NavItem className='right'>
            <i className="iconfont">&#xe636;</i> 
            </NavItem>
            <Search>
             <CSSTransition
             timeout={300}
             in={this.props.focused}
             classNames="slide"
             >
            <NavSearch 
            className={this.props.focused ? 'focused':''}
            onFocus={()=>this.props.handleFocus(this.props.list)}
            onBlur={this.props.handleBlur}
            ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe617;</i> 
            {this.getListArea()}
            </Search>
          </Nav>
           <Addition>
             <Link to='/writer'>
            <Button className='write'> 
            <i className="iconfont">&#xe6e5;</i> 
            写文章 </Button></Link>
           <Link to='./login'><Button className='reg'> 注册 </Button></Link>
           </Addition>
          </HeaderWrapper>    
       );
  }
}

const mapStateToProps = (state)=>{
 return {
   focused:state.get('header').get('focused'),
   list:state.get('header').get('list'),
   page:state.get('header').get('page'),
   mouseIn:state.get('header').get('mouseIn'),
   totalPage:state.get('header').get('totalPage'),
   login:state.getIn(['login','login'])
   //state.getIn(['haeder' , 'focused'])
 }
}
const mapDispacthToProps = (dispatch) => {
   return {
      handleFocus(list) {
        if(list.size === 0 ){
        dispatch(actionCreators.getList());
        }
       dispatch(actionCreators.focus());
      },
      handleBlur(){
         dispatch(actionCreators.blur());
      },
      handleMouseIn(){
        dispatch(actionCreators.mouseIn());
      },
      handleMouseLeave(){
        dispatch(actionCreators.mouseLeave());
      },
      handleClickChange(page,totalPage){
         if(page<totalPage){
        dispatch(actionCreators.clickChange(page+1));
         }else{
          dispatch(actionCreators.clickChange(1));
         }
      },
      logout(){
        dispatch(loginActionCreators.logout());
      }
   }
}
export default connect(mapStateToProps , mapDispacthToProps)(Header);