import React, { Component } from 'react';
import { Row, Col, Media } from 'react-bootstrap';

export const ContactInfo = props => {
  return (
    <section id='conatcat-info'>
      <div className='container'>
        <Row>
          <Col sm={ 8 }>
            <Media className='contact-info'>
              <Media.Left className='pull-left'>
                <i className='fa fa-phone' />
              </Media.Left>
              <Media.Body>                
                <div dangerouslySetInnerHTML={ { __html: props.contacts } } />
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </div>
    </section>
  );
};
