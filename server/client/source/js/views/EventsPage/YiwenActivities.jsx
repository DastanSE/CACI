import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import Card from '../../components/Global/Card';
import OwnMasonry from '../../components/Global/OwnMasonry';

const brakePoints = [350, 576, 769, 992, 1200];

export default class YiwenActivities extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { events } = this.props;
    return (
      <section className='portfolio' style={ { background: '#E2E2E7', color: '#676885' } }>
        <div className='center'>
          <h2>過往活動</h2>
          <p className='lead'>Yiwen activities</p>
        </div>
        <div className='portfolio-items' style={ { width: '70%', marginLeft: '15%' } }>
          <OwnMasonry brakePoints={ brakePoints }>
            {events.map((data, index) => (
              <Card
                key={ index }
                img1={ data.event_images[0] }
                images={ data.event_images }
                title={ data.title }
                body={ data.event_body }
              />
            ))}
          </OwnMasonry>
        </div>
      </section>
    );
  }
}
