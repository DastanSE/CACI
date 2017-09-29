import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
//import ScrollAnimation from 'react-animate-on-scroll';


export const Section9 = (props) => {
  return (
    <div className='Section9'>
      <section id="m-changdi" className="">
        <div className="container">
          {/* <ScrollAnimation animateIn='fadeIn' > */}
            <div className="center">
              <h2>场地租赁</h2>
              <p className="lead">Venue Rental</p>
            </div>

          {/* </ScrollAnimation> */}
            <Row>
              <Col sm={3} xs={6}>
                <Image src="../imglili/1.jpg" circle />
              </Col>
              <Col sm={3} xs={6}>
                <Image src="../imglili/3.jpg" circle />
              </Col>
              <Col sm={3} xs={6}>
                <Image src="../imglili/2.jpg" circle />
              </Col>
              <Col sm={3} xs={6}>
                <Image src="../imglili/4.jpg" circle />
              </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
