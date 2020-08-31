import React ,{PureComponent,Fragment} from 'react';
import {ListItem ,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import { getMoreList} from '../store/actionCreators'
import {Link} from 'react-router-dom'
class List extends PureComponent{
  render(){
    return (
     <Fragment>
    {
     this.props.list.map((item,index)=>{
       return(
         <Link key={index} to={'./detail/'+ item.get('id')}>
        <ListItem key={index}>
          <img className='list-pic'
          src={item.get('imgUrl')
          } alt = ''/>
          <ListInfo>
       <h3 className='title'>{item.get('title')}</h3>
       <p className='desc'>{item.get('connent')}</p>
          </ListInfo>
        </ListItem>
        </Link>
       );
     })
    }
    <LoadMore onClick={()=>this.props.getMoreList(this.props.page)}>查看更多</LoadMore>
    </Fragment>
    )
  }
}
const mapStateToProps=(state)=>({
   list:state.get('home').get('articleList'),
   page:state.getIn(['home','articlePage'])
});
const mapDispatchToProps = (dispatch)=>({
   getMoreList(page){
      dispatch(getMoreList(page));
   }
})

export default connect(mapStateToProps,mapDispatchToProps) (List);