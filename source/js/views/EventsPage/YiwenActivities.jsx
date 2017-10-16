import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';

export default class YiwenActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='portfolio' style={ { background: '#E2E2E7', color: '#676885' } }>
        <div className='center'>
          <h2>過往活動</h2>
          <p className='lead'>Yiwen activities</p>
        </div>
        <div className='row' style={ { margin: '0 auto' } }>
          <div className='portfolio-items' style={ { width: '70%', marginLeft: '15%' } }>
            <div
              className='col-xs-12 col-sm-6 col-md-4 portfolio-item apps activity-art'
              style={ { padding: 10, overflow: 'hidden' } }
            >
              <div className='neirong' style={ { marginTop: '20px' } }>
                <img
                  style={ { width: '100%', maxWidth: '100%' } }
                  className='img-responsive'
                  src=''
                  alt=''
                />
                <div className='donghua' style={ { background: '#fff' } }>
                  <div
                    className='wenzi'
                    style={ {
                      padding: '15px 15px 10px 15px',
                      fontSize: 14,
                      lineHeight: 20,
                      fontWeight: 100,
                    } }
                  >
                    <h5 style={ { color: '#333' } }>
                      <a style={ { color: '#333' } } href='' />
                    </h5>
                    <p style={ { fontWeight: '200px' } } />
                  </div>
                </div>
              </div>
            </div>

            <div
              className='col-xs-12 col-sm-6 col-md-4 portfolio-item apps activity-music'
              style={ { padding: 10, overflow: 'hidden' } }
            >
              <div className='neirong' style={ { marginTop: 20 } }>
                <img
                  style={ { width: '100%', maxWidth: '100%' } }
                  className='img-responsive'
                  src=''
                  alt=''
                />
                <div className='donghua' style={ { background: '#fff' } }>
                  <div
                    className='wenzi'
                    style={ {
                      padding: '15px 15px 10px 15px',
                      fontSize: 14,
                      lineHeight: 20,
                      fontWeight: 100,
                    } }
                  >
                    <h5 style={ { color: '#333' } }>
                      <a style={ { color: '#333' } } href='' />
                    </h5>

                    <p style={ { fontWeight: '200px' } } />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-xs-12 col-sm-6 col-md-4 portfolio-item apps activity-drama'
              style={ { padding: 10, overflow: 'hidden' } }
            >
              <div className='neirong' style={ { marginTop: 20 } }>
                <img
                  style={ { width: '100%', maxWidth: '100%' } }
                  className='img-responsive'
                  src=''
                  alt=''
                />
                <div className='donghua' style={ { background: '#fff' } }>
                  <div
                    className='wenzi'
                    style={ {
                      padding: '15px 15px 10px 15px',
                      fontSize: 14,
                      lineHeight: 20,
                      fontWeight: 100,
                    } }
                  >
                    <h5 style={ { color: '#333' } }>
                      <a style={ { color: '#333' } } href='' />
                    </h5>

                    <p style={ { fontWeight: '200px' } } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
