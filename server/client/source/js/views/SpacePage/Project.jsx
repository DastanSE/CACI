import React from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';

export const Project = () => {
  return (
    <section id='feature'>
      <div className='container'>
        <div className='center wow fadeInDown'>
          <div>
            <h2>計劃概述</h2>
            <p className='lead'>Project</p>
            <p className='lead'>
              當今我國文化市場百花齊放，北京作為文化中心，文藝市場繁榮，人才廣闊，新興藝文團體層出不窮，作為一股重要的新生力量，他們有夢想有動力，卻在場地和資金
              上有困難。為了回應中國夢的號召，促進與配合北京市的藝文推廣以及高校學生的精神生活，藝文創薈願免費提供以場地為主的各方面資源，扶持新興藝文團體，為
              文化產業輸送更多的人才
            </p>
          </div>
          <Row>
            <Col md={ 4 } sm={ 4 }>
              <div
                className='single-profile-top'
              >
                <div className='media'>
                  <div className='fuchi-top'>
                    <Thumbnail
                      className='media-teac'
                      src='https://res.cloudinary.com/cacicloud/image/upload/v1523629729/mainpage/changdi1.jpg'
                      alt='Beijing'
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col md={ 4 } sm={ 4 }>
              <div
                className='single-profile-top'
              >
                <div className='media'>
                  <div className='fuchi-top'>
                    <Thumbnail
                      className='media-teac'
                      src='https://res.cloudinary.com/cacicloud/image/upload/v1523629729/mainpage/changdi2.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col md={ 4 } sm={ 4 }>
              <div
                className='single-profile-top'
              >
                <div className='media'>
                  <div className='fuchi-top'>
                    <Thumbnail
                      className='media-teac'
                      src='https://res.cloudinary.com/cacicloud/image/upload/v1523629729/mainpage/changdi3.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
