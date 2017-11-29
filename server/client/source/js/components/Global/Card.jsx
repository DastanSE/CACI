import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import Modals from '../../components/Global/Modals';

export default class Card extends Component {
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
    const { title, date, images, body, img1 } = this.props;

    return (
      <div className='event-card'>
        <div className='event-card-img'>
          <Image src={ img1 } onClick={ this.open.bind(this) } />
        </div>
        <div className='event-card-content'>
          <i className='fa fa-clock-o' aria-hidden='true' />
          <span className='subtle'> {date}</span>
          <h4 className='event-card-title'>{title}</h4>
        </div>
        <Modals
          showModal={ this.state.show }
          title={ title }
          date={ date }
          close={ this.close.bind(this) }
          images={ images }
          body={ body }
        />
      </div>
    );
  }
}
