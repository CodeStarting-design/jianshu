import styled from 'styled-components';

export const HomeWrapper = styled.div`
z-index:0;
width:960px;
margin:0 auto;
overflow:hidden;
`
export const Homeleft = styled.div`
width:625px;
margin-left:15px;
padding-top:30px;
float:left;
.banner-img{
  width:625px;
  height:240px;
}
`
export const HomeRight = styled.div`
width:280px;
float:right;
`
export const TopicWrapper =styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`
export const TopicItem =styled.div`
float:left;
height:32px;
margin-left:18px;
margin-bottom:18px;
line-height:32px;
background:#f7f7f7;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius: 4px;
padding-right:10px;
.topic-pic{
  margin-right:10px;
  float:left;
  width:32px;
  height:32px;
  display:block;
}; 
`
export const ListItem =styled.div`
padding:20px 0;
border-bottom:1px solid #dcdcdc;
overflow:hidden;
.list-pic{
  width:125px;
  height:100px;
  float:right;
  display:block;
  boeder-radius:10px;
}
`
export const ListInfo =styled.div`
width:500px;
float:left;
.title{
  font-size:18px;
  line-height:27px;
  font-weight:bold;
  color:#333;
}
.desc{
  font-size:13px;
  line-height:24px;
  color:#999;
}
`
export const RecommendWarpper =styled.div`
margin:30px 0 ;
width:280px;
color: #333;
`
export const RecommendItem = styled.div`
width:280px;
height:50px;
background:url(${(props)=>props.imgUrl});
background-size:contain;
`
export const WriterWrapper = styled.div`
 width:278px;
 border-radius:3px;
 height:300px;
 line-height:300px;
 text-aglign:center;
`
export const WriterItem = styled.div`
margin-top: 15px;
line-height: 20px;
display: block;
width:280px;
height:50px;
overflow:hidden;
.img-pic{
  width:48px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 50%;
  float:left;
}
.name{
  padding-top: 0;
  margin:3px 50px 3px 50px;
  font-size: 14px;
  display: block;

}
.about{
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
}
`
export const LoadMore = styled.div`
width:625px;
height:40px;
line-height:40px;
background:#a5a5a5;
border-radius:20px;
font-size:15px;
text-align:center;
color:#fff;
margin:30px 0 ;
cursor:pointer;
`
export const BackTop =styled.div`
position:fixed;
right:100px;
bottom:100px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;
font-size:15px;
`