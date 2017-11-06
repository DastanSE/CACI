import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class RecentActivities extends Component {
  render() {
    return (
      <section id='recent-works'>
        <div className='container'>
          <div className='center'>
            <h2>近期活動</h2>
            <p className='lead'>Recent Activities</p>
          </div>
          <Row>
            <Col xs={ 12 } sm={ 4 } md={ 3 } className='huodongbox'>
              <div className='recent-work-wrap'>
                <img className='img-responsive' src='' alt='' />
                <div className='overlay'>
                  <div className='recent-work-inner' />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
