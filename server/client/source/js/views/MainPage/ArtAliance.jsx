import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const lianmengData = ['舞蹈', '音樂', '美術', '建築', '戲劇', '文學', '電影', '體育'];

export const ArtAliance = props => {
  return (
    <div className='Section8'>
      <div className='news' id='lianmeng'>
        <div className='container'>
          <div className='skill-wrap clearfix'>
            <div className='center'>
              <h2 style={ { color: '#fff' } }>藝術聯盟</h2>
              <p className='lead' style={ { color: '#fff' } }>
                Art Alliance
              </p>
            </div>
          </div>
          <Row className='lianmeng'>
            {lianmengData.map((name, index) => (
              <Col key={ index } sm={ 3 } xs={ 6 }>
                <div className='lm'>
                  <a href='#'>{name}</a>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
