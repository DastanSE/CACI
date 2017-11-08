import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class OurPartners extends Component {
  render() {
    return (
      <section id='partner'>
        <div className='container'>
          <div className='center wow fadeInDown animated'>
            <h2>進駐單位</h2>
            <p className='lead'>Our Partners</p>
          </div>
          <Row>
            <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
              <Image src='../assets/img/partners/cj.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/macao.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/active.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/mahu.png' responsive />
            </Col>
            <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 2 }>
              <Image src='../assets/img/partners/fu.png' responsive />
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
              <Image src='../assets/img/partners/wow.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/beauty.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/muyi.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/shangyi.png' responsive />
            </Col>
            <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 2 }>
              <Image src='../assets/img/partners/zhitu.png' responsive />
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
              <Image src='../assets/img/partners/yuemu.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/cycber.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 } smOffset={ 0 } xsOffset={3}>
              <Image src='../assets/img/partners/shiwei.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/atls.png' responsive />
            </Col>
            <Col xs={ 6 } sm={ 2 }>
              <Image src='../assets/img/partners/vf.png' responsive />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
