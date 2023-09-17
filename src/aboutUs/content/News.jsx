import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'antd'
import QueueAnim from 'rc-queue-anim'


import './News.less'
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

class News extends React.PureComponent {
  render() {
    return (
      <div className="news ">
        <div className='title'>新闻动态</div>
        <div className="item">
          <div className="img"></div>
          
          <div className="content">
            2023年第一期云众可信A计划领袖名单公布
            <Link to="/aboutus/detail/a">查看详情</Link>
            </div>
        </div>
        <div className="item">
          <div className="img"></div>
          <div className="content">2023年第一期云众可信A计划领袖名单公布
          <Link to="/aboutus/detail/2">查看详情</Link>
          </div>
        </div>

      </div>
    )
  }
}
export default News
