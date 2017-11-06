import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';

export default class YiwenNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id='yiwennews'>
        <div className='center'>
          <h2>最新消息</h2>
          <p className='lead'>Yiwen News</p>
        </div>
        <div className='container' style={ { paddingLeft: '10%' } }>
          <div className='row'>
            <div className='col-md-6  '>
              <div className='timebox'>
                <b />
                <br />
              </div>
              <div
                className='con'
                style={ { display: 'inline-block', position: 'relative', top: '0px' } }
              />
              <h4 />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
