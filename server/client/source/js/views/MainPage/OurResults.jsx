import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import MediaReports from '../../components/Global/MediaReports';

export const OurResults = props => {
  return (
    <div className='Section5'>
      <section id='middle'>
        <div className='container'>
          <Row>
            <Col sm={ 6 } className='wow fadeInDown animated'>
              <div className='skill'>
                <h2>我們的成果</h2>
                <p>
                  成立以來，藝文創薈致力於成立文化團體，推動文化發展，取得了滿意的成果，未來必將繼續努力，誠邀您的加入。
                </p>
                <div className='progress-wrap'>
                  <h4>團隊孵化率</h4>
                  <div className='progress'>
                    <div
                      className='progress-bar  color1'
                      role='progressbar'
                      aria-valuenow='85'
                      style={ { width: '85%' } }
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <span className='bar-width'>85%</span>
                    </div>
                  </div>
                </div>
                <div className='progress-wrap'>
                  <h4>眾籌成功率</h4>
                  <div className='progress'>
                    <div
                      className='progress-bar color2'
                      role='progressbar'
                      style={ { width: '55%' } }
                      aria-valuenow='55'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <span className='bar-width'>55%</span>
                    </div>
                  </div>
                </div>
                <div className='progress-wrap'>
                  <h4>活動發起率</h4>
                  <div className='progress'>
                    <div
                      className='progress-bar color3'
                      role='progressbar'
                      style={ { width: '80%' } }
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <span className='bar-width'>80%</span>
                    </div>
                  </div>
                </div>
                <div className='progress-wrap'>
                  <h4>合作誠意度</h4>
                  <div className='progress'>
                    <div
                      className='progress-bar color4'
                      role='progressbar'
                      style={ { width: '100%' } }
                      aria-valuenow='100'
                      aria-valuemin='100'
                      aria-valuemax='100'
                    >
                      <span className='bar-width'>100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={ 6 } className='wow fadeInDown animated'>
              <MediaReports />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};
