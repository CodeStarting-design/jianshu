import styled from 'styled-components';
import logoPic from '../../static/logo.png'
export  const HeaderWrapper =styled.div`
z-index:1;
position:relative;
height:58px;
border-bottom:1px solid #f0f0f0 ;
`;
export const Logo = styled.div`
position:absolute;
top:0;
left:0;
display:block;
height:56px;
width:100px;
background:url(${logoPic});
background-size:contain;
`;
export const Nav =styled.div`
width:945px;
height:100%;
margin:0 auto;
padding-right:20px;
box-sizing:border-box;
`;
export const NavItem = styled.div`
line-hight: 56px;
padding:  15px ;
font-size: 17px;
color: #333;
&.left{
  float:left;
}
&.right{
  float:right;
  color:#969696;
}
&.active {
color:#ea6f5a;
}
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
margin-left:20px;
font-size:14px;
margin-top: 9px;
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
padding:0 30px 0 20px ;
box-sizing:border-box;
color: #666;
&.slide-enter{
  transition: all .3s ease-out;
  width:160px;
}
&.slide-enter-active{
  width:240px;
}
&.slide-exit{
  transition: all .3s ease-out;
}
&.slide-exit-active{
   width:160px;
}
&.focused{
  width:240px;
}
`
export const Addition =styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button =styled.button`
float:right;
line-height:38px;
margin-top:9px;
border-radius:19px;
border:1px solid #ec6149;
mergin-right:20px;
padding: 0 30px;
font-size:14px;
&.reg{
  color:#ec6149;
}
&.write{
  background:#ec6149;
}
`
export const Search =styled.div`
float: left;
position:relative;
.zoom{
  position:absolute;
  right:5px;
  width:30px;
  line-height:30px;
  text-align:center;
  border-radius:15px;
  bottom:5px;
  &.focused{
   background: #777;
   color:#fff;
  }
}
`
export const SearchInfo = styled.div`
position:absolute;
left: 0; 
top: 56px;
padding : 0 20px;
width: 240px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
background:#fff;
`
export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SwitchButton =styled.span`
float:right;
font-size:13px;
cursor:pointer;
// .spin{
//   font-size:12px;
//   margin-right:2px;
//   transition:all .2s ease-in;
//   tranfrom:'rorate(0deg);
//   display:block;
//   float:left;
//   transfrom-origin:center center;
// }
`
export const SearchInfoItem =styled.a`
font-size:12px;
line-height:20px;
padding:0 5px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
display:block;
float:left;
margin-right:10px;
margin-bottom:15px;

`
export const SearchInfoList =styled.div`
overflow:hidden;
`
