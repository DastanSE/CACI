import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const OurService = () => {
  return (
    <div className='skill-wrap clearfix'>
      <div className='center wow fadeInDown'>
        <h2>我們的服務</h2>
        <p className='lead'>
          公司同時擁有自己的文化投資基金池、藝文孵化器、製作團隊、文化產品經紀團隊、演藝公司咨詢團隊、傳媒發佈平台等戰略板塊，每年度推出具亮點的核心作品。
        </p>
      </div>
      <Row className='justify-content-md-center'>
        <Col xs={ 4 } smOffset={ 1 } sm={ 2 }>
          <div
            className='sinlge-skill wow fadeInDown'
            data-wow-duration='1000ms'
            data-wow-delay='300ms'
          >
            <div className='joomla-skill'>
              <p>文化項目融資</p>
            </div>
          </div>
        </Col>
        <Col xs={ 4 } sm={ 2 }>
          <div
            className='sinlge-skill wow fadeInDown'
            data-wow-duration='1000ms'
            data-wow-delay='600ms'
          >
            <div className='html-skill'>
              <p>演出項目經理</p>
            </div>
          </div>
        </Col>
        <Col xs={ 4 } sm={ 2 }>
          <div
            className='sinlge-skill wow fadeInDown'
            data-wow-duration='1000ms'
            data-wow-delay='900ms'
          >
            <div className='css-skill'>
              <p>人才轉介</p>
            </div>
          </div>
        </Col>
        <Col xsOffset={ 2 } xs={ 4 } smOffset={ 0 } sm={ 2 }>
          <div
            className='sinlge-skill wow fadeInDown'
            data-wow-duration='1000ms'
            data-wow-delay='1200ms'
          >
            <div className='wp-skill'>
              <p>活動訂制服務</p>
            </div>
          </div>
        </Col>
        <Col xs={ 4 } sm={ 2 }>
          <div
            className='sinlge-skill wow fadeInDown'
            data-wow-duration='1000ms'
            data-wow-delay='1200ms'
          >
            <div className='zx-skill'>
              <p>文化項目咨詢</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
