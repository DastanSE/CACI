import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import Card from '../../components/Global/Card';
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
              <Card img1='http://res.cloudinary.com/cacicloud/image/upload/v1510128079/d1_ktzilj.jpg' title='活动一' time='2017-10-11' />
              <Card
                img1='http://res.cloudinary.com/cacicloud/image/upload/v1510128079/d2_f801ko.jpg'
                title='活动二asdkfna; kdjnsfak;sdj fnajksndfk;asjnfk; asjndfa;kjnfdas'
                time='2017-11-21'
              />
              <Card img1='http://res.cloudinary.com/cacicloud/image/upload/v1510128079/d3_qsc1pt.jpg' title='活动三' time='2017-12-01' />

              <Card img1='http://res.cloudinary.com/cacicloud/image/upload/v1510128079/d1_ktzilj.jpg' title='活动一' time='2017-10-11' title='活动四' time='2017-12-01' />

              <Card img1='https://res.cloudinary.com/cacicloud/image/upload/v1511334444/Screen_Shot_2017-11-03_at_18.27.12_ozl0zm.png' title='活动五李侃；阿斯顿反馈栏喀纳斯；看到烦恼；卡森啊；上看到烦恼' time='2017-12-01' />
            </OwnMasonry>
        </div>
      </section>
    );
  }
}
