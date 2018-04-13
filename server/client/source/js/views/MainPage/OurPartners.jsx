import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export const OurPartners = props => {
  return (
    <section id='partner'>
      <div className='container'>
        <div className='center wow fadeInDown animated'>
          <h2>進駐單位</h2>
          <p className='lead'>Our Partners</p>
        </div>
        <Row>
          <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/mahu.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/beauty.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/active.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/cj.png'
              responsive
            />
          </Col>
          <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/wow.png'
              responsive
            />
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/muyi.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/atls.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/cycber.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/shiwei.png'
              responsive
            />
          </Col>
          <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/yuemu.png'
              responsive
            />
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/zhitu.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/shangyi.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 } smOffset={ 0 } xsOffset={ 3 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/fu.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/macao.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/vf.png'
              responsive
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};
