import React, { Component } from 'react';
import { Row, Col, Carousel, Image } from 'react-bootstrap';
import EventCalendar from './EventCalendar';

const DATA = [
  {
    id: 1,
    time: new Date(2017, 9, 18),
    value: 'This event its super cool',
  },
  {
    id: 2,
    time: new Date(2017, 9, 19),
    value: 'This event its super boring but you can come ',
  },
];

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <Carousel
          id='carousel-example-generic'
          prevIcon={
            <a
              className='left carousel-control'
              href='#carousel-example-generic'
              role='button'
              data-slide='prev'
            >
              <span className='glyphicon glyphicon-chevron-left' aria-hidden='true' />
              <span className='sr-only'>Previous</span>
            </a>
          }
          nextIcon={
            <a
              className='right carousel-control'
              href='#carousel-example-generic'
              role='button'
              data-slide='next'
            >
              <span className='glyphicon glyphicon-chevron-right' aria-hidden='true' />
              <span className='sr-only'>Next</span>
            </a>
          }
        >
          {[
            { imgsrc: '../assets/img/舞蹈大赛.jpg' },
            { imgsrc: '../assets/img/2017夏令营.png' },
          ].map((data, index) => {
            return (
              <Carousel.Item key={ index } animateIn={ true }>
                <img src={ data.imgsrc } alt='Carousel' />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <section id='yiwennews'>
          <div className='center'>
            <h2>最新消息</h2>
            <p className='lead'>Yiwen News</p>
          </div>
          <div className='container' style={ { paddingLeft: '10%' } }>
            <div className='row'>
              <div className='col-md-6  '>
                <div className='timebox'>
                  <b />
                  <br />
                </div>
                <div
                  className='con'
                  style={ { display: 'inline-block', position: 'relative', top: '0px' } }
                />
                <h4 />
              </div>
            </div>
          </div>
        </section>

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

        <div className='container' style={ { paddingRight: 0, paddingLeft: 0, width: '89%' } }>
          <EventCalendar data={ DATA } />
          <section className='portfolio' style={ { background: '#E2E2E7', color: '#676885' } }>
            <div className='center'>
              <h2>推薦活動</h2>
              <p className='lead'>Community activities</p>
            </div>
            <ul className='portfolio-filter text-center'>
              <li>
                <a className='btn btn-default active' href='#' data-filter='*'>
                  全部
                </a>
              </li>
              <li>
                <a className='btn btn-default' href='#' data-filter='.activity-'>
                  藝術
                </a>
              </li>
              <li>
                <a className='btn btn-default' href='#' data-filter='.activity-'>
                  音樂
                </a>
              </li>
              <li>
                <a className='btn btn-default' href='#' data-filter='.activity-'>
                  話劇
                </a>
              </li>
            </ul>

            <div className='row'>
              <div className='portfolio-items' style={ { width: '70%', marginLeft: '15%' } }>
                <div
                  className='col-xs-12 col-sm-6 col-md-4 portfolio-item apps '
                  style={ { padding: 10, overflow: 'hidden' } }
                >
                  <div className='neirong' style={ { marginTop: 10 } }>
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
                          <a href='' />
                        </h5>

                        <p style={ { fontWeight: '200px' } } />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
