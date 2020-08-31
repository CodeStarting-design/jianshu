//作为整个页面的父组件
import React, {PureComponent} from 'react';
import {Provider} from 'react-redux' ;
import Header from './common/header';
import store from './store/index';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import {BrowserRouter ,Route} from 'react-router-dom'
import Login from './pages/login/index'
import Writer from './pages/writer/index'
class App extends PureComponent {
 render(){
   return( 
     <Provider store={store}>
     
     <BrowserRouter>
     <Header></Header>
     <div>
     <Route path='/' exact component={Home}></Route>
     <Route path='/detail/:id' exact component={Detail}></Route>
     <Route path='/login' exact component={Login}></Route>
     <Route path='/writer' exact component={Writer}></Route>
     </div>
     </BrowserRouter>
 
     </Provider>
   );
 }
}
export default App;
