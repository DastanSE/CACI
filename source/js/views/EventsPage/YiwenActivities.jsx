import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import EventCard from './EventCard'
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

        <Row>
          <div className='portfolio-items' style={ { width: '70%', marginLeft: '15%' } }>
            <Col sm={ 4 }>
              <EventCard />
            </Col>
            <Col sm={ 4 }>
              <EventCard />
            </Col>
            <Col sm={ 4 }>
              <EventCard />
            </Col>
          </div>
        </Row>
      </section>
    );
  }
}
