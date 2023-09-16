import React from 'react'
import { Carousel } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './Type.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class Type extends React.PureComponent {
  render() {
    return (
      <div className='partners-type'>
        <div className='title'>合作伙伴类型</div>
        <div className='content'>
            <div className='item1'></div>
            <div className='item2'></div>
        </div>
      </div>
    )
  }
}
export default Type
