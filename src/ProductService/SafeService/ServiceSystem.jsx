import React from 'react'
import { Tabs } from 'antd'

import QueueAnim from 'rc-queue-anim'
import './ServiceSystem.less'
const { TabPane } = Tabs

const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class ServiceSystem extends React.PureComponent {
  render() {
    return (
      <div className="ServiceSystem">
        <div>服务体系</div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="检测" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="防护" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="监测" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="对抗" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="响应" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="运营" key="6">
            Content of Tab Pane 3
          </TabPane>

        </Tabs>
      </div>
    )
  }
}
export default ServiceSystem
