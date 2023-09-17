import React from 'react'
import { Carousel } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './Excellent.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class Excellent extends React.PureComponent {
  render() {
    return (
      <div className='excellent'>
        
        <div className="title">优秀合作伙伴</div>
        <div className='content'>
        
        <div className='evenNum item'>
              <div className='card'></div>
              <div className='card'></div>

              <div className='card'></div>

              <div className='card'></div>

          </div>
          <div className='oddNum item'>
          <div className='card'></div>
              <div className='card'></div>
              <div className='card'></div>

              <div className='card'></div>

              <div className='card'></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Excellent