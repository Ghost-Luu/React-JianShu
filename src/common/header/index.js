import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import { searchFocus, searchBlur } from './store/actionCreators';
import { actionCreators } from './store'  //* 指的是actionCreators 所有文件
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addittion,
  Button,
  SearchWrapper
 } from './style';

class Header extends Component {

  getListArea() {//热门搜索区块
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, hanleChangePage } = this.props;
    const newList = list.toJS();  //因为list目前是immutable数组,所以我们要将他转换为普通JS数组,toJS是immutable内置方法
    const pageList = [];

    if(newList.length){
      for(let i = (page -1) * 10; i < page * 10; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => hanleChangePage(page,totalPage,this.spitIcon)}>
              <i ref={(icon) => {this.spitIcon = icon}} className="iconfont spin">&#xe6bb;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const { focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            login ? <NavItem onClick={logout} className="right">退出</NavItem> :
            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused} //所控制的数据
              timeout={200} //动画时长
              classNames="slide" //动画效果写在style.js
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i 
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >&#xe617;</i>
            {/*  getListArea为热门搜索区块 */}
            {this.getListArea(focused)}
        </SearchWrapper>
      </Nav>
      <Addittion>
        <Button className="reg">注册</Button>
        <Link to="/write">
          <Button className="writting">
            <i className="iconfont">&#xe603;</i>
            写文章
          </Button>
        </Link>
      </Addittion>
    </HeaderWrapper>
    )
  }
}


//这里将state里的数据映射到props
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
    // focused: state.get('header').get('focused')  等于上面写法
    // focused: state.header.focused  使用immutable之前
  }
}
//这里将方法映射到props中
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
      // if(list.size > 0){也可以像上面简写
      //   // dispatch(actionCreators.getList());
      //   dispatch(actionCreators.searchFocus());
      // }else {
      //   dispatch(actionCreators.getList());
      //   dispatch(actionCreators.searchFocus());
      // }
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    hanleChangePage(page, totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if (originAngle){
        originAngle = parseInt(originAngle, 10);//将originAngle转换为10进制的正整数
      }else {
        originAngle = 0;
      }

      spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
      if (page < totalPage){
        dispatch(actionCreators.changePage(page + 1));
      }else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout()) 
    }
  }
}
// export default Header;使用redux前   使用后如下
export default connect(mapStateToProps,mapDispatchToProps)(Header)