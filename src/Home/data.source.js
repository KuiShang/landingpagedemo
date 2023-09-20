import React from 'react';

export const Nav00DataSource = {
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '/' } },
      { name: 'item1', a: { children: '产品服务', href: '#' } },
      { name: 'item2', a: { children: '用户案例', href: '/userstories' } },
      { name: 'item3', a: { children: '合作伙伴', href: '/partners' } },
      { name: 'item4', a: { children: '关于我们', href: '/aboutus' } },
      { name: 'item5', a: { children: '参考', href: '/homecankaoh5' } },

    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
