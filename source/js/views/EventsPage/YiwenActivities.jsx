import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import EventCard from './EventCard';
import Modals from '../../components/Global/Modals';

import OwnMasonry from '../../components/Global/OwnMasonry';

const brakePoints = [350, 576, 769, 992, 1200];

export default class YiwenActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='portfolio' style={ { background: '#E2E2E7', color: '#676885' } }>
        <div className='center'>
          <h2>過往活動</h2>
          <p className='lead'>Yiwen activities</p>
        </div>
        <div className='portfolio-items' style={ { width: '70%', marginLeft: '15%' } }>
            <OwnMasonry brakePoints={ brakePoints }>
              <EventCard img1='../../assets/img/dance/d1.jpg' title='活动一' time='2017-10-11' />
              <EventCard
                img1='../../assets/img/cq/bg-2.jpg'
                title='活动二asdkfna; kdjnsfak;sdj fnajksndfk;asjnfk; asjndfa;kjnfdas'
                time='2017-11-21'
              />
              <EventCard img1='../../assets/img/dance/d2.jpg' title='活动三' time='2017-12-01' />

              <EventCard img1='../../assets/img/dance/d4.jpg' title='活动四' time='2017-12-01' />
              <EventCard img1='../../assets/img/dance/d5.jpg' title='活动五李侃；阿斯顿反馈栏喀纳斯；看到烦恼；卡森啊；上看到烦恼' time='2017-12-01' />
            </OwnMasonry>
        </div>
      </section>
    );
  }
}
