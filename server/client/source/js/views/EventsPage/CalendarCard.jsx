import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import Modals from '../../components/Global/Modals';

export default class CalendarCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  close() {
    this.setState({ show: false });
  }

  open() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div id='calendar-event-card'>
        <div className='calendar-event-card-container'>
          <Media bsClass='card-media'>
            <Media.Left className='card-media-object-container'>
              <div
                className='card-media-object'
                style={ { backgroundImage: `url(${ this.props.eventMainImg })` } }
              />
            </Media.Left>
            <Media.Body className='card-media-body'>
              <Media.Heading>
                <div className='card-media-body-top'>
                  <span className='subtle'>{this.props.time}</span>
                  <div className='card-media-body-top-icons u-float-right'>
                    <svg
                      fill='#888888'
                      height='16'
                      viewBox='0 0 24 24'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M0 0h24v24H0z' fill='none' />
                      <path d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z' />
                    </svg>
                  </div>
                </div>
              </Media.Heading>
              <span className='card-media-body-heading'>{this.props.eventTitle}</span>
              <div className='card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal'>
                <span
                  className='card-media-body-supporting-bottom-text card-media-link u-float-right'
                  onClick={ this.open.bind(this) }
                >
                  閱讀更多
                </span>
              </div>
            </Media.Body>
          </Media>
        </div>
        <Modals
          showModal={ this.state.show }
          title={ this.props.eventTitle }
          date={ this.props.time }
          close={ this.close.bind(this) }
          images={ this.props.images }
          body={ this.props.body }
        />
      </div>
    );
  }
}
