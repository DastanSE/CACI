import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';

export default class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='event-card'>
        <a className='event-card-img' href=''>
          <img src='https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg' />
        </a>
        <div className='event-card-content'>
          <i className='fa fa-clock-o' aria-hidden='true' /><span className='subtle'>2017-08-10</span>
          <h4 className='event-card-title'>
            <a href='http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html'>
              {' '}
              Hong Kong CACI
            </a>
          </h4>
        </div>
        <div className='event-card-read-more'>
          <i className='fa fa-facebook' aria-hidden='true' />
          <i className='fa fa-weixin' aria-hidden='true' />
          <i className='fa fa-twitter' aria-hidden='true' />

          <a href='' className='btn btn-link'>
            閱讀更多
          </a>
        </div>
      </div>
    );
  }
}
