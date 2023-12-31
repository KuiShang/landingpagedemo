/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import CommonBanner from './CommonBanner'
import PopularRecom from './PopularRecom'
import ServiceSystem from './ServiceSystem'
import FullyReinforced from './FullyReinforced'
import ServiceValue from './ServiceValue'
import Excellent from './Excellent'




let isMobile
enquireScreen((b) => {
  isMobile = b
})

const location = window.location

export default class ProductService extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b })
    })
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        })
      }, 500)
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <CommonBanner id="CommonBanner" key="CommonBanner" />,
      <PopularRecom id="PopularRecom" key="PopularRecom" />,
      <ServiceSystem id="ServiceSystem" key="ServiceSystem" />,
      <FullyReinforced id="FullyReinforced" key="FullyReinforced" />,
      <ServiceValue id="ServiceValue" key="ServiceValue" />,
      <Excellent id="Excellent" key="Excellent" />,

      
    ]
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d
        }}
      >
    

        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    )
  }
}
