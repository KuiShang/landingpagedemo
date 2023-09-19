import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './UserValue.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class UserValue extends React.PureComponent {
  render() {
    return (
      <div className='UserValue'>
        <div>热门推荐</div>
        <div className='list'>
          <div className='item'>重要时期安全保障服务</div>
          <div className='item'>实战攻防应急演练服务</div>
          <div className='item'>安全漏洞运营服务</div>
        </div>
      </div>
    );
  }
}
export default UserValue;
