# React—全家桶仿简书部分功能

### [前言](_)

> 前段时间接触了下React，一直想要自己写一个小Demo练手。在众多应用中，考虑之后选择了简书来模仿，这段时间就利用了工作之余的时间进行开发。主要用到了React+React-Router4+Redux+Redux-thunk+Immutable。然而写文章也是可以复盘一下自己的开发过程，对自己还是受益良多的。在这里简单叙述一下我仿简书部分布局以及功能实现的过程，仅做学习用途。

### `技术栈以及组件库`

* Redux：解决组件数据共享问题
* Redux-thunk：Redux中间件，允许action可以返回函数
* Immutable：保证数据的不可变
* Loadable：异步加载组件
* Transition-group：动画实现
* styled-components：组件化样式
* axios： 这个大家都知道吧-_-

### `文件结构`

┣━ build &emsp;// 打包文件
┣━ public &emsp;// 打包文件
&emsp;&emsp;┣━ api &emsp;//假数据统一存储
&emsp;&emsp;&emsp;&emsp;┣━ detail.json &emsp;//文章页数据
&emsp;&emsp;&emsp;&emsp;┣━ headerList.json &emsp;//头部热门搜索数据
&emsp;&emsp;&emsp;&emsp;┣━ home.json &emsp;//首页统一数据
&emsp;&emsp;&emsp;&emsp;┣━ homeList.json &emsp;//首页加载更多文章数据
&emsp;&emsp;&emsp;&emsp;┣━ login.json &emsp;//登录数据
┣━ src &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;//开发目录
&emsp;&emsp;┣━ common &emsp;//公用组件
&emsp;&emsp;&emsp;&emsp;┣━ header &emsp;//头部组件
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ store &emsp;//Redux文件
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ actionCreators.js &emsp;//action创建
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ constants.js &emsp;//action.type常量文件
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ index.js &emsp;//入口文件
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ reducer.js &emsp;//reducer处理
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ store &emsp;//UI组件
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ store &emsp;//头部样式
&emsp;&emsp;┣━ pages &emsp;//页面
&emsp;&emsp;&emsp;&emsp;┣━ detail &emsp;//文章页
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ ...
&emsp;&emsp;&emsp;&emsp;┣━ detail &emsp;//首页
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ ...
&emsp;&emsp;&emsp;&emsp;┣━ detail &emsp;//登录页
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ ...
&emsp;&emsp;&emsp;&emsp;┣━ detail &emsp;//写文章
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;┣━ ...
&emsp;&emsp;┣━ statics &emsp;//静态文件
&emsp;&emsp;&emsp;&emsp;┣━ ...
&emsp;&emsp;┣━ store &emsp;//Redux数据
&emsp;&emsp;&emsp;&emsp;┣━ ...
&emsp;&emsp;┣━ App.js &emsp;//入口及路由
&emsp;&emsp;┣━ index.js &emsp;//js文件入口
&emsp;&emsp;┣━ style.js &emsp;//全局样式
┣━ .gitignore &emsp;//git忽略上传文件
┣━ package.json &emsp;//模块的描述文件
┣━ README.md &emsp;//说明文件
┣━ yarn.lock &emsp;//模块的描述文件

### `效果预览`

<iframe height=300 width=650 src="./src/statics/big_effect.gif">

### `实现主要几个功能`




Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
