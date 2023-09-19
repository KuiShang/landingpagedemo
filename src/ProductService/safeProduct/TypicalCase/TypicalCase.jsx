import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Swiper from './slider_card';
import './TypicalCase.less';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class TypicalCase extends React.PureComponent {
  componentDidMount() {
    let imgArr = [
      {
        url: '#',
        imgPath: '../i.jpg',
      },
      {
        url: '#',
        imgPath: '../o.jpg',
      },
      {
        url: '#',
        imgPath: '../q.jpeg',
      },
      {
        url: '#',
        imgPath: '../w.jpg',
      },
      {
        url: '#',
        imgPath: '../z.png',
      },
    ];
    new Swiper({
      imgArr: imgArr,
      imgWidth: 320,
      aniTime: 1000,
      intervalTime: 1500,
      scale: 0.8,
      autoplay: false,
      gap: 0,
      clsSuffix: '-card',
    }).init();

    new Swiper({
      imgArr: imgArr,
      imgWidth: 320,
      aniTime: 1000,
      intervalTime: 1500,
      scale: 0.8,
      autoplay: true,
      gap: -200,
      clsSuffix: '-stack',
    }).init();
  }
  render() {
    return (
      <div className='ProductAdvantage'>
        <div>热门推荐</div>

        <div class='swiper-list-card swiper-list'>
          <div class='swiper-main-card swiper-main'></div>
          <img id='prev-card' class='btn leftBtn' src='./left.png' alt='' />
          <img id='next-card' class='btn rightBtn' src='./right.png' alt='' />
        </div>

        <div class='swiper-list-stack swiper-list'>
          <div class='swiper-main-stack swiper-main'></div>
          <img id='prev-stack' class='btn leftBtn' src='../left.png' alt='' />
          <img id='next-stack' class='btn rightBtn' src='../right.png' alt='' />
        </div>
      </div>
    );
  }
}
export default TypicalCase;
