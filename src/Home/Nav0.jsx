import React from 'react';
import { findDOMNode } from 'react-dom';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import ProductServiceMenu from './ProductServiceMenu';
const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
      productServiceMenuShow: false,
    };
  }

  phoneClick = () => {
    const menu = findDOMNode(this.menu);
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? menu.scrollHeight : 0,
    });
  };
  mouseenter = (data) => {
    if (data.name === 'item1') {
      this.setState({ productServiceMenuShow: true });
    } else {
      this.setState({ productServiceMenuShow: false });

    }
  };
  onMouseLeave = (e) => {
    console.log('leave',e)
  }
  coseProductServiceMenu = () => {
    this.setState({ productServiceMenuShow: false });
  };
  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { menuHeight, phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = Object.keys(navData).map((key, i) => (
      <Item key={i.toString()} {...navData[key]} onMouseEnter={() => this.mouseenter(navData[key])} >
        <Link {...navData[key].a} to={navData[key].a.href} target={navData[key].a.target}>
          {navData[key].a.children}
        </Link>
      </Item>
    ));
    return (
      <TweenOne component='header' animation={{ opacity: 0, type: 'from' }} className="header00 home-page-wrapper custom-page-wrapper" {...props}>
        <div {...dataSource.page} className={`home-page${phoneOpen ? ' open' : ''}`}>
          <TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }} {...dataSource.logo}>
            <img width='100%' src={dataSource.logo.children} alt='img' />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            ref={(c) => {
              this.menu = c;
            }}
            style={isMobile ? { height: menuHeight } : null}
          >
            <Menu mode={isMobile ? 'inline' : 'horizontal'} defaultSelectedKeys={['0']} theme={isMobile ? 'dark' : 'light'}>
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
        <ProductServiceMenu show={this.state.productServiceMenuShow} close={this.coseProductServiceMenu}></ProductServiceMenu>
      </TweenOne>
    );
  }
}

export default Header;
