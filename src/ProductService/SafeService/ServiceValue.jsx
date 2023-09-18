import React from 'react'
import { Button } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './ServiceValue.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class ServiceValue extends React.PureComponent {
  render() {
    return (
      <div className='ServiceValue'>
        <div>服务价值</div>
        <div className='list'>
            <div className='item'>加快企业安全建设</div>
            <div className='item'>保障业务安全运营</div>
            <div className='item'>提供灵活深度定制</div>
        </div>
      </div>
    )
  }
}
export default ServiceValue
