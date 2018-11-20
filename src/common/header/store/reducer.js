import * as constants from './constants';
import { fromJS } from 'immutable';

//  immutable库保证state数据不会被更改
const defaultState = fromJS({//将JS对象转化为immutable对象
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});
//  immutable对象的set方法,会结合之前immutable对象的值
//  和设置的值,返回一个新的对象,这样不会修改state
export default (state = defaultState, action ) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.merge({//当改变多个state数据时,可用merge方法进行设置
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}