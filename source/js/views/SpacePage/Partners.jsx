import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export const Partners = props => {
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
                <Image src='../assets/img/partners/support/罗兰.jpg' circle alt='' />
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
                <Image src='../assets/img/partners/support/粤目演义.jpg' circle alt='' />
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
                <Image src='../assets/img/partners/support/情定北京.jpg' circle alt='' />
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
              <a href='http://caci.hk/team/'>查看更多</a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
