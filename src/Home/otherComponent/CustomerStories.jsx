import React from 'react'
import { Carousel } from 'antd'
import Animate from 'rc-animate';
import { Parallax } from 'rc-scroll-anim';
import './CustomerStories.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class SafeService extends React.PureComponent {
  render() {
    return (
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
        >
      <div className='customer-stories'>
        
        <div className='title'>客户案例</div>
        <div className='content'>
            <div className='left'></div>
            <div className='right'></div>
        </div>
      </div>
      </Parallax>

    )
  }
}
export default SafeService
