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
        开放共生 合作共赢
      </div>
    )
  }
}
export default CommonBanner
