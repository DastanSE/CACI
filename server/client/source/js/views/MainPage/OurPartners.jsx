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
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123096/partners/cj_ivlgaq.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123117/partners/macao_d0slfm.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123113/partners/active_jfedbx.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123117/partners/mahu_otpgng.png'
              responsive
            />
          </Col>
          <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123116/partners/fu_ga74ls.png'
              responsive
            />
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123118/partners/wow_vlg6b5.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123116/partners/beauty_jqfw04.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123118/partners/muyi_gyhzf1.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123118/partners/shangyi_fr2wqw.png'
              responsive
            />
          </Col>
          <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123119/partners/zhitu_prduxc.png'
              responsive
            />
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 2 } smOffset={ 1 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123119/partners/yuemu_azbqjl.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123115/partners/cycber_ufmfpd.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 } smOffset={ 0 } xsOffset={ 3 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123119/partners/shiwei_wx8y1y.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123116/partners/atls_auzahf.png'
              responsive
            />
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Image
              src='https://res.cloudinary.com/cacicloud/image/upload/v1510123119/partners/vf_irnyzk.png'
              responsive
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};
