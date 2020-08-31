import React ,{PureComponent} from 'react';
//import axios from 'axios';
import {getHomeDatas,backHidden,backShow} from './store/actionCreators'
import { 
  HomeWrapper ,
  HomeRight,
  Homeleft,
  BackTop
} from './style'
import Topic from './components/topic';
import List from './components/list';
import Writer from './components/writer'
import Recommend from './components/Recommend'
import {connect} from 'react-redux'
class Home extends PureComponent{
  handleBack(){
    window.scrollTo(0,0);
  }
  render(){
    return (
      <HomeWrapper>
        <Homeleft>
          <img  className='banner-img' alt=''
src="https://upload.jianshu.io/admin_banners/web_images
/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2
/auto-orient/strip|imageView2/1/w/1250/h/540">
</img><Topic></Topic>
      <List></List>
        </Homeleft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showBack? <BackTop  onClick={this.handleBack}>回到顶部</BackTop>:null}
      </HomeWrapper>

    )
  }
  componentDidMount(){
   this.props.getHomeData(getHomeDatas());
   this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScroll)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScroll)
  }
}

const mapDispatchToProps = (dispatch)=>({
 getHomeData(action){
   dispatch(action);
 },
 changeScroll(){
  if(document.documentElement.scrollTop>400){
    dispatch(backShow());
  }else{
   dispatch(backHidden());
  }
 }
});
const mapStateToProps = (state)=>({
  showBack:state.get('home').get('showBack')
})
export default connect(mapStateToProps  , mapDispatchToProps) (Home);