import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <Thumbnail src='../../assets/img/hk.jpg' alt='242x200'>
          <h3>Honk Kong</h3>
          <p>Most expensive city in the world</p>
          <p>
            <Button bsStyle='primary'>More...</Button>&nbsp;
          </p>
        </Thumbnail>
      </div>
    );
  }
}
