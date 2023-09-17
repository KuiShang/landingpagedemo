import React from 'react'
import { Button } from 'antd'
import QueueAnim from 'rc-queue-anim'
import './FootBanner.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class FootBanner extends React.PureComponent {
  render() {
    return (
      <div className='foot-banner'>
        <div className='title'>汇聚优秀伙伴，共享生态赋能</div>
        <Button type="primary">立即申请加入</Button>

      </div>
    )
  }
}
export default FootBanner