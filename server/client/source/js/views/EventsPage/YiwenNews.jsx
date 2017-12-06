import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const YiwenNews = () => {
  return (
    <section id='yiwennews'>
      <div className='center'>
        <h2>最新消息</h2>
        <p className='lead'>Yiwen News</p>
      </div>
      <div className='container' style={ { paddingLeft: '10%' } }>
        <Row className='row'>
          <Col md={ 6 }>
            <div className='timebox'>
              <b />
              <br />
            </div>
            <div
              className='con'
              style={ { display: 'inline-block', position: 'relative', top: '0px' } }
            />
            <h4 />
          </Col>
        </Row>
      </div>
    </section>
  );
};
