/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import HomeCarousel from '../otherComponent/HomeCarousel'
import ProductShow from '../otherComponent/ProductShow'
import SafeService from '../otherComponent/SafeService'

import CustomerStories from '../otherComponent/CustomerStories'

import Solution from '../otherComponent/Solution'

import Banner0 from './Banner0'
import Content0 from './Content0'
import Content7 from './Content7'
import Content13 from './Content13'
import Content12 from './Content12'

import {
  Banner00DataSource,
  Content00DataSource,
  Content70DataSource,
  Content130DataSource,
  Content120DataSource,
} from './data.source.js'

import './less/antMotionStyle.less'

let isMobile
enquireScreen((b) => {
  isMobile = b
})

const location = window.location

export default class Home extends React.Component {
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
      <HomeCarousel id="HomeCarousel" key="HomeCarousel" />,
      <ProductShow id="ProductShow" key="ProductShow" />,
      <SafeService id="SafeService" key="SafeService" />,

      <CustomerStories id="CustomerStories" key="CustomerStories" />,

      <Solution id="Solution" key="Solution" />,

      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,

      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content7
        id="Content7_0"
        key="Content7_0"
        dataSource={Content70DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content12
        id="Content12_0"
        key="Content12_0"
        dataSource={Content120DataSource}
        isMobile={this.state.isMobile}
      />,
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
