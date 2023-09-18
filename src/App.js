import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Nav0';
import Home from './Home';
import Page from './Page2';
import UserStories from './UserStories';
import ProductService from './ProductService/SafeService';

import Partners from './Partners';
import AboutUs from './aboutUs';
import NewsDetail from './NewsDetail';

import Footer from './home3';

import {
  Nav00DataSource,
} from './Home/data.source.js';
import {
  Footer10DataSource,
} from './home3/data.source.js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount () {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render () {
    return (
      <Router>
        <div>
          <Header dataSource={Nav00DataSource} isMobile={this.state.isMobile} />
          <Route exact path="/" component={Home} />
          <Route path="/userstories" component={UserStories} />

          <Route path="/productservice" component={ProductService} />
          <Route path="/partners" component={Partners} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route path="/aboutus/detail/:id" component={NewsDetail} />
          <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
