import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { BackTop } from './style';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

//使用PureComponent代替Component提升性能
//PureComponent当组件更新时，如果组件的 props 和 state 都没发生改变， render 方法就不会触发，省去 Virtual DOM 的生成和比对过程.
//如果没有使用immutable的话 尽量不要使用PureComponent, 有坑...  所以使用的话尽量使用immutable管理数据
class Home extends PureComponent {//UI组件中尽量不要有逻辑处理

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
            className="banner_img"
            alt=''
            src='//upload.jianshu.io/admin_banners/web_images/4577/353c8d29771d3c5c0bfbe92556fb65da78d3f3da.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe603;</i></BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillMount() {//当组件即将被销毁的时候执行
    window.removeEventListener('scroll', this.props.changeScrollShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }

}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollShow() {
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState,mapDispatch)(Home);