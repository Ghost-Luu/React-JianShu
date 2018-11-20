import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//dangerouslySetInnerHTML是当数据内容是HTML时使用,不会被转义为字符串
class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    console.log(loginStatus)
    if(loginStatus) {
      return (
        <div>写文章</div>
      )
    }else{
      return <Redirect to="/login" />
    }
  }
  componentDidMount() {
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
});


export default connect(mapState, null)(Write);