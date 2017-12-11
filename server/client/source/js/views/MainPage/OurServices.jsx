import React, { Component } from 'react';
import { Row, Col, Image, Media } from 'react-bootstrap';

export const OurServices = props => {
  return (
    <div className='Section4'>
      <section id='services' className='service-item'>
        <div className='container'>
          <div className='center wow fadeInDown animated'>
            <h2>我們的服務</h2>
            <p className='lead'>Our services</p>
          </div>
          <Row>
            <Col sm={ 6 } md={ 4 }>
              <Media className='services-wrap'>
                <Media.Left className='pull-left'>
                  <Image
                    src='https://res.cloudinary.com/cacicloud/image/upload/v1510125994/services/services1_uogu6j.png'
                    responsive
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>
                    <h3>文化項目融資</h3>
                  </Media.Heading>
                  <p>為來自港澳台及國內外的文化、創業項目進行投資對接，以及法律保障，項目監管等</p>
                </Media.Body>
              </Media>
            </Col>
            <Col sm={ 6 } md={ 4 }>
              <Media className='services-wrap'>
                <Media.Left className='pull-left'>
                  <Image
                    src='https://res.cloudinary.com/cacicloud/image/upload/v1510125994/services/services2_yls27r.png'
                    responsive
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>
                    <h3>演出項目經理</h3>
                  </Media.Heading>
                  <p>
                    針對有意赴國內巡演之項目，和有意進入內地市場演出的項目提供嫁接運營和落地服務
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col sm={ 6 } md={ 4 }>
              <Media className='services-wrap'>
                <Media.Left className='pull-left'>
                  <Image
                    src='https://res.cloudinary.com/cacicloud/image/upload/v1510125995/services/services3_esxauo.png'
                    responsive
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>
                    <h3>活動訂制服務</h3>
                  </Media.Heading>
                  <p>根據客戶的需要，訂制不同類型的大型活動，包括文化節、晚會、演唱會等</p>
                </Media.Body>
              </Media>
            </Col>
            <Col sm={ 6 } md={ 6 }>
              <Media className='services-wrap'>
                <Media.Left className='pull-left'>
                  <Image
                    src='https://res.cloudinary.com/cacicloud/image/upload/v1510125994/services/services4_ejboyo.png'
                    responsive
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>
                    <h3>人才轉介</h3>
                  </Media.Heading>
                  <p>
                    針對有潛力的年青藝人或工作室，開辦不同的課程，提供各種實踐機會，同時協助相關人員的升學、進修、就業
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col sm={ 6 } md={ 6 }>
              <Media className='services-wrap'>
                <Media.Left className='pull-left'>
                  <Image
                    src='https://res.cloudinary.com/cacicloud/image/upload/v1510125995/services/services5_zpjhar.png'
                    responsive
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>
                    <h3>文化項目咨詢</h3>
                  </Media.Heading>
                  <p>為初創的青年藝文工作室、演藝單位等提供業務咨詢和運營扶持，促進其業務發展</p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};
