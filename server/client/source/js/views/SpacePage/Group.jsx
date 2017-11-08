import React from 'react';
import { Row, Col, Image, Media, Clearfix } from 'react-bootstrap';

export const Group = props => {
  return (
    <section id='qunti'>
      <div className='container'>
        <div className='center'>
          <div>
            <h2 style={ { color: '#fff' } }>針對群體</h2>
            <p className='lead' style={ { color: '#fff' } }>
              Group
            </p>
          </div>
          <Row>
            <Col md={ 6 } sm={ 12 }>
              <div className='services-wrap'>
                <Media>
                  <Media.Left className='pull-left'>
                    <div className='feature-wrap' style={ { marginBottom: 0 } }>
                      <i className='i-item'>1</i>
                    </div>
                  </Media.Left>

                  <Media.Body>
                    <div className='fuchi-text'>
                      <h3>藝文類社團組織</h3>
                      <p>以愛好和興趣聚集在一起的社團組織，不以盈利為主要目的，包括專業院校學生團隊、高校藝文類學生社團、社會藝文愛好者組織。</p>
                    </div>
                  </Media.Body>
                </Media>
              </div>
            </Col>
            <Col md={ 6 } sm={ 12 }>
              <div className='services-wrap'>
                <Media>
                  <Media.Left className='pull-left'>
                    <div className='feature-wrap' style={ { marginBottom: 0 } }>
                      <i className='i-item'>2</i>
                    </div>
                  </Media.Left>

                  <Media.Body>
                    <div className='fuchi-text'>
                      <h3>藝文公益推廣組織</h3>
                      <p>不以盈利為主要目的的藝術推廣組織，具有公益性和使命感。</p>
                    </div>
                  </Media.Body>
                </Media>
              </div>
            </Col>
            }
            <Clearfix visibleSmBlock />
            <Col md={ 6 } sm={ 12 }>
              <div className='services-wrap'>
                <Media>
                  <Media.Left className='pull-left'>
                    <div className='feature-wrap' style={ { marginBottom: 0 } }>
                      <i className='i-item'>3</i>
                    </div>
                  </Media.Left>

                  <Media.Body>
                    <div className='fuchi-text'>
                      <h3>藝文創業初階團隊</h3>
                      <p>在初創階段，或有創業計畫，缺乏相關資源和經驗。</p>
                    </div>
                  </Media.Body>
                </Media>
              </div>
            </Col>
            <Col md={ 6 } sm={ 12 }>
              <div className='services-wrap'>
                <Media>
                  <Media.Left className='pull-left'>
                    <div className='feature-wrap' style={ { marginBottom: 0 } }>
                      <i className='i-item'>4</i>
                    </div>
                  </Media.Left>

                  <Media.Body>
                    <div className='fuchi-text'>
                      <h3>新興藝文商業團隊</h3>
                      <p>有一定相關經驗，在之前的商業行為中小有收益，相對獨立，有資源分享，互利合作的需求。</p>
                    </div>
                  </Media.Body>
                </Media>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
