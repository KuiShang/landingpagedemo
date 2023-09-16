import React from 'react'
import { Carousel } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './ApplicationProcess.less'
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class ApplicationProcess extends React.PureComponent {
  render() {
    return (
      <div className="application-process">
        <div className="title">申请入驻流程</div>
        <div className="content">
          <div className="item1 item">
            <span className='txt'>选择加入的合作伙伴类型</span>
          </div>
          <div className="item2 item">
          <span className='txt'>提交合作伙伴入驻申请</span>

          </div>
          <div className="item3 item">
          <span className='txt'>完成合作伙伴资质认证</span>

          </div>
          <div className="item4 item">
          <span className='txt'>恭喜成为同行共赢的伙伴</span>

          </div>
        </div>
      </div>
    )
  }
}
export default ApplicationProcess
