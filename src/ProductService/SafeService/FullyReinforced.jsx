import React from 'react'
import { Tabs } from 'antd'

import QueueAnim from 'rc-queue-anim'
import './FullyReinforced.less'
const { TabPane } = Tabs

const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class FullyReinforced extends React.PureComponent {
  render() {
    return (
      <div className="FullyReinforced">
        <div>实力雄厚</div>
        <div className='content'>
          <div className='line'>
            <span className='item'>
              <span className='num'>10</span>
              <span className='txt'>安全研究团队</span>
            </span>
            <span className='item'>
              <span className='num'>30</span>
              <span className='txt'>安全运营中心</span>
            </span>
            <span className='item'>
              <span className='num'>5000</span>
              <span className='txt'>应急响应服务次数</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
export default FullyReinforced
