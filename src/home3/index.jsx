/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Nav3';
import Banner3 from './Banner3';
import Content5 from './Content5';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature6 from './Feature6';
import Feature0 from './Feature0';
import Feature7 from './Feature7';
import Feature3 from './Feature3';
import Feature4 from './Feature4';
import Feature5 from './Feature5';
import Feature8 from './Feature8';
import Contact0 from './Contact0';
import Footer1 from './Footer1';
import Footer0 from './Footer0';

import {
  Nav30DataSource,
  Banner30DataSource,
  Content50DataSource,
  Feature10DataSource,
  Feature20DataSource,
  Feature60DataSource,
  Feature00DataSource,
  Feature70DataSource,
  Feature30DataSource,
  Feature40DataSource,
  Feature50DataSource,
  Feature80DataSource,
  Contact00DataSource,
  Footer10DataSource,
  Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />
   
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
