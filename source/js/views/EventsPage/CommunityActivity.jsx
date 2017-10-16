import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';

export default class CommunityActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}
