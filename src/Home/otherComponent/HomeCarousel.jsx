import React from 'react'
import { Carousel } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './HomeCarousel.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class HomeCarousel extends React.PureComponent {
  render() {
    return (
      <div className='home-carousel'>
        <Carousel>
          <div>
            <h3 style={contentStyle}>
              <QueueAnim delay={300}>
                <div key="a" className="title1"><span>云众可信业务全景图</span></div>
                <div key="b" className="title2"><span>开启你的技术进阶旅</span></div>
                <div key="c" className="des"><span className='txt'>查看详情</span></div>
              </QueueAnim>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    )
  }
}
export default HomeCarousel
