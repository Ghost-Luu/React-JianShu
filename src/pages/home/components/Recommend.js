import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper } from '../style';
import { Link } from 'react-router-dom';

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return (
              <Link to="/" className="recommend_link" key={item.get('id')}>
                <img 
                  alt=''
                  className="recommend_img"
                  src={item.get('imgUrl')} 
                />
              </Link>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','recommendList'])
});

export default connect(mapState, null)(Recommend);