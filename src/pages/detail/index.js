import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCrrators } from './store';

//dangerouslySetInnerHTML是当数据内容是HTML时使用,不会被转义为字符串
class Detail extends PureComponent {

  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content 
          dangerouslySetInnerHTML={{__html: content}} 
        />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    let idPage = this.props.location.search;
    const id = idPage.substring(4)
    this.props.getDetail(id);
    //使用动态路由获取idthis.props.getDetail(this.props.match.params.id);
  }

}

const mapState = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCrrators.getDetail(id));
  }
});

// export default connect(mapState, mapDispatch)(Detail);
export default connect(mapState, mapDispatch)(withRouter(Detail));//这里使用了loadable异步加载组件的写法