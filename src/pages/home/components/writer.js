import React ,{PureComponent} from 'react';
import { WriterWrapper ,WriterItem} from '../style'
class Writer extends PureComponent{
  render(){
    return (
    <WriterWrapper>
      <WriterItem> <img className='img-pic' alt=''
      src='https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
    <h3 className='name'>吴小布</h3>
    <p className='about'>写了746.8k字 · 24.7k喜欢</p>
    </WriterItem>
    </WriterWrapper>
    
    )
  }
}
export default Writer;