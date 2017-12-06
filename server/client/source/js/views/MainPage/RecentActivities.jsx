import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import MarkdownElement from '../../components/Global/MarkdownElement';

export default class RecentActivities extends Component {
  render() {
    const size = 6;
    return (
      <section id='recent-works'>
        <div className='container'>
          <div className='center'>
            <h2>近期活動</h2>
            <p className='lead'>Recent Activities</p>
          </div>
          <Row>
            {this.props.events.slice(0, size).map((data, index) => (
              <Col key={ index } xs={ 12 } sm={ 4 } md={ 3 } className='huodongbox'>
                <div className='recent-work-wrap'>
                  <Image src={ data.event_images[0] } alt='' responsive />
                  <div className='overlay'>
                    <div className='recent-work-inner'>
                      <h2>{data.title}</h2>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    );
  }
}
