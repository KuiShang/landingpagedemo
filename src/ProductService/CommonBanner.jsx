import React from 'react'
import { Button } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './CommonBanner.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class CommonBanner extends React.PureComponent {
  render() {
    return (
      <div className='common-banner'>
        云众可信 安全专家服务
      </div>
    )
  }
}
export default CommonBanner
