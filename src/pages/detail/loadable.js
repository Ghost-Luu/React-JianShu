import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {//组件加载中显示 这里使用了jsx所以引用了React
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>

