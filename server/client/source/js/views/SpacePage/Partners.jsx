import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export const Partners = () => {
  return (
    <section>
      <div className='container'>
        <div className='center'>
          <h2>進駐團隊</h2>
          <p className='lead'>Our Team</p>
        </div>
        <Row>
          <Col xs={ 4 } sm={ 4 } md={ 4 } >
            <a href=''>
              <div className='clients-comments text-center'>
                <Image src='http://res.cloudinary.com/cacicloud/image/upload/v1510127466/partners/%E7%BD%97%E5%85%B0_e5sz6l.jpg' circle alt='' />
                <h4>
                  <span>羅蘭數字音樂教育</span>
                  <br />
                </h4>
              </div>
            </a>
          </Col>
          <Col xs={ 4 } sm={ 4 } md={ 4 } >
            <a href=''>
              <div className='clients-comments text-center'>
                <Image src='http://res.cloudinary.com/cacicloud/image/upload/v1510127465/partners/%E7%B2%A4%E7%9B%AE%E6%BC%94%E4%B9%89_o9rlsx.jpg' circle alt='' />
                <h4>
                  <span>粵目演藝工作室</span>
                  <br />
                </h4>
              </div>
            </a>
          </Col>
          <Col xs={ 4 } sm={ 4 } md={ 4 } >
            <a href=''>
              <div className='clients-comments text-center'>
                <Image src='http://res.cloudinary.com/cacicloud/image/upload/v1510127465/partners/%E6%83%85%E5%AE%9A%E5%8C%97%E4%BA%AC_ltef7c.jpg' circle alt='' />
                <h4>
                  <span>北京情定文化傳播有限公司</span>
                  <br />
                </h4>
              </div>
            </a>
          </Col>
        </Row>

        <div className='center'>
          <div>
            <h4>
              <a href='/team/'>查看更多</a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
