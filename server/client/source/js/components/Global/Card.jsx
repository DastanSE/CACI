import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import Modals from '../../components/Global/Modals';


let testModalBody = `
  <p>its tag P </p>
  <p>Lili nihao </p>
  <h1>its tag h1 </h1>
  <h2>its tag </h2>
  <div>
    <img src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' />
  </div>
`;

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
    return (
      <div className='event-card'>
        <a className='event-card-img' href=''>
          <Image src={ this.props.img1 }/>
        </a>
        <div className='event-card-content'>
          <i className='fa fa-clock-o' aria-hidden='true' />
          <span className='subtle'> {this.props.time}</span>
          <h4 className='event-card-title'>
            <a href=''> {this.props.title}</a>
          </h4>
        </div>
        <div className='event-card-read-more'>
          <i className='fa fa-facebook' aria-hidden='true' />
          <i className='fa fa-weixin' aria-hidden='true' />
          <i className='fa fa-twitter' aria-hidden='true' />

          <p onClick={this.open.bind(this)} className='btn btn-link'>
            閱讀更多
          </p>
        </div>
        <Modals
          showModal={this.state.show}
          modalTitle={this.props.title}
          close={this.close.bind(this)}
          modalBody={testModalBody}
        />
      </div>
    );
  }
}
