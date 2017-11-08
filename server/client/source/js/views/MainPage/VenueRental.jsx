import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
// import ScrollAnimation from 'react-animate-on-scroll';

export const VenueRental = props => {
  return (
    <div className='Section9'>
      <section id='m-changdi' className=''>
        <div className='container'>
          {/* <ScrollAnimation animateIn='fadeIn' > */}
          <div className='center'>
            <h2>场地租赁</h2>
            <p className='lead'>Venue Rental</p>
          </div>
          {/* </ScrollAnimation> */}
          <Row>
            <Col sm={ 3 } xs={ 6 }>
              <Image src='http://res.cloudinary.com/cacicloud/image/upload/v1510126717/changdi/1_kaap3e.jpg' circle />
            </Col>
            <Col sm={ 3 } xs={ 6 }>
              <Image src='http://res.cloudinary.com/cacicloud/image/upload/v1510126717/changdi/3_dnyumu.jpg' circle />
            </Col>
            <Col sm={ 3 } xs={ 6 }>
              <Image src='http://res.cloudinary.com/cacicloud/image/upload/v1510126716/changdi/2_jmrlyg.jpg' circle />
            </Col>
            <Col sm={ 3 } xs={ 6 }>
              <Image src='http://res.cloudinary.com/cacicloud/image/upload/v1510126717/changdi/4_tcqqoo.jpg' circle />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};
