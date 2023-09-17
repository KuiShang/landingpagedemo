import React from 'react'
import { Tabs } from 'antd'

import { HashRouter as Router, Route, Link } from "react-router-dom";
import ApplicationProcess from '../../Partners/ApplicationProcess';

import QueueAnim from 'rc-queue-anim'
import './index.less'
import News from './News'
const { TabPane } = Tabs
class Content extends React.PureComponent {
  render() {
    return (
      <div className='content'>


    <Link to="/aboutus/a">查看详情</Link>


            
      <Tabs defaultActiveKey="1" tabPosition='left' >
        <TabPane tab="云众介绍" key="1">
        Content of Tab Pane 21
        </TabPane>
        <TabPane tab="安全能力" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="新闻动态" key="3">
          <News/>
        </TabPane>
        <TabPane tab="资质荣誉" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="加入我们" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="联系我们" key="6">
          Content of Tab Pane 3
        </TabPane>
      
      </Tabs>

      </div>
    )
  }
}
export default Content
