import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  authors: [{
    id: 1,
    title: 'Ghost',
    desc: '写了79.7k字 · 125喜欢',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/14247466/9470ac0b-61a7-4d3f-872e-e0c6f2ff5d7a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },{
    id: 2,
    title: 'Ghost',
    desc: '写了79.7k字 · 125喜欢',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/14799774/4892a0b7-b6d5-4ef4-88b7-d4eab2319efe?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
  },{
    id: 3,
    title: 'Ghost',
    desc: '写了79.7k字 · 125喜欢',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/22609/cd56e2a2-4245-45ea-892e-23c4eb8274bf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },{
    id: 4,
    title: 'Ghost',
    desc: '写了79.7k字 · 125喜欢',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/13912264/751fad51-ffce-45c1-a629-0932a85de27a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },{
    id: 5,
    title: 'Ghost',
    desc: '写了79.7k字 · 125喜欢',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/11499568/b6c49855-229b-4984-8097-6731dbafbd25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),//这里是用fromJS将接收到的普通的JS数据m转换为immutable类型,防止数据类型改变
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const changeHomeList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  });
}

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.CHANGE_HOME_LIST:
      // return state.set('articleList',state.get('articleList').concat(action.list))
      return changeHomeList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}