import React from 'react'
import { Carousel } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './HomeCarousel.less'

class HomeCarousel extends React.PureComponent {
  render() {
    return (
      <div className="home-carousel">
        <Carousel autoplay>
          <div className="item">
            <h3 className="imgbg">
              <QueueAnim delay={300}>
                <div key="a" className="title1">
                  <span>云众可信业务全景图</span>
                </div>
                <div key="b" className="title2">
                  <span>开启你的技术进阶旅</span>
                </div>
                <div key="c" className="title3">
                  <span className="txt">查看详情</span>
                </div>
              </QueueAnim>
            </h3>
          </div>
          <div className="item">
            <h3 className="imgbg">
              <div key="a" className="title1">
                <span>文字文字文字文字文字</span>
              </div>
              <div key="b" className="title2">
                <span>文字文字文字</span>
              </div>
              <div key="c" className="title3">
                <span className="txt">查看详情</span>
              </div>
            </h3>
          </div>
          <div className="item">
            <h3 className="imgbg">3</h3>
          </div>
          <div className="item">
            <h3 className="imgbg">4</h3>
          </div>
        </Carousel>
      </div>
    )
  }
}
export default HomeCarousel
