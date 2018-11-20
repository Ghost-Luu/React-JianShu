import React, { Component } from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import { GlobalStyle } from './style.js'; //使用styled-component
import { GlobalIcon } from './statics/iconfont/iconfont'; //使用iconfont
import Home from './pages/home';
import Detail from './pages/detail/loadable';//这里使用loadable异步加载组件
import Login from './pages/login/loadable';//这里使用loadable异步加载组件
import Write from './pages/write';



class App extends Component {
  render() {
    // /detail/:id 动态路由 适用于详情页面传递id
    return (
        <Provider store={store}>
        {/* Provider是redux内置方法, store={store} 是将store数据引入Provider里的组件 可在用到的组件中使用connect中进行引用
          <Route path="/detail/:id" exact component={Detail}></Route>写法1动态路由
        */}
          <BrowserRouter>
            <div>
              <Header />
              <GlobalIcon />
              <GlobalStyle />
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
