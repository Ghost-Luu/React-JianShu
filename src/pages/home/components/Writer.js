import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterBox, WriterTitle, WriterContent, WriterContenItem } from '../style';

class Writer extends PureComponent {
  render() {
    return (
      <WriterBox>

        <WriterTitle>
          <span>推荐作者</span>
          <span className="title_switch">
            <i className="iconfont spin">&#xe6bb;</i>
            换一批
          </span>
        </WriterTitle>

        <WriterContent>
          {
            this.props.list.map((item) => {
              return (
                <WriterContenItem key={item.get('id')}>
                  <img alt="" src={item.get('imgUrl')}/>
                  <span><i className="iconfont">&#xe603;</i>关注</span>
                  <h5>{item.get('title')}</h5>
                  <p>{item.get('desc')}</p>
                </WriterContenItem>
              )
            })
          }
        </WriterContent>
      </WriterBox>
    )
  }
}


const mapState = (state) => ({
  list: state.getIn(['home','authors'])
});

export default connect(mapState, null)(Writer);