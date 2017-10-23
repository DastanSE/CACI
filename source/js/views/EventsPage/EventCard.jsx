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
          <Image src={ this.props.img1 }/>
        </a>
        <div className='event-card-content'>
          <i className='fa fa-clock-o' aria-hidden='true' />
          <span className='subtle'>{this.props.time}</span>
          <h4 className='event-card-title'>
            <a href=''> {this.props.title}</a>
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
