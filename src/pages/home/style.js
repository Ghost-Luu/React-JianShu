import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  .banner_img {
    width: 625px;
    height: 240px;
    border-radius: 4px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  margin-top: 30px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic_pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  min-height: 228px;
  margin-top: -3px;
  .recommend_img {
    width: 240px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
  .recommend_link {
    cursor: pointer;
  }
`;

export const WriterBox = styled.div`
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding-top: 10px;
`;

export const WriterTitle = styled.div`
  overflow: hidden;
  .title_switch {
    float: right;
    .spin {
      margin-right: 10px;
      color: red;
    }
  }
`;

export const WriterContent = styled.div`
  margin-top: 15px;
`;

export const WriterContenItem = styled.div`
  overflow: hidden;
  margin-top: 10px;
  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    float: left;
  }
  span {
    float: right;
    margin-top: 15px;
    font-size: 14px;
    color: #42c02e;
  }
  h5 {
    padding-top: 7px;
    font-size: 14px;
  }
  p {
    padding-top: 11px;
    font-size: 12px;
    color: #888;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #eee;
  cursor: pointer;
`