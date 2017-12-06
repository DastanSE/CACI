import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { routeCodes } from '../App';
import { Link } from 'react-router-dom';
import Modals from '../../components/Global/Modals';

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
                      <Link style={{color: '#fff'}} to={ routeCodes.EVENTS }>
                        <p>更多多信息访问活动信息页面</p>
                      </Link>
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
