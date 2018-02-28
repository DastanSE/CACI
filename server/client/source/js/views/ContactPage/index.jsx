import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from './Form';
import { ContactInfo } from '../../components/Global/ContactInfo';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';


export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <section id='contact-info'>
          <div className='center'>
            <h2>怎麼聯繫我們?</h2>
            <p className='lead'>How to contact us?</p>
          </div>
          <div className='gmap-area'>
            <div className='container'>
              <Row className='center'>
                <Col sm={ 4 } md={ 4 }>
                  <address>
                    <h5>香港地址</h5>
                    <p>銅鑼灣摩利臣山道84-86號太平洋帆船酒店 1樓</p>
                    <p>
                      Phone:(852) 3610 9194
                      <br /> Email: info@caci.hk
                    </p>
                  </address>
                  <div className='gmap' style={ { width: 250, height: 250 } }>
                    <Map center={ { lng: 114.18, lat: 22.27 } } zoom='11'>
                      <Marker position={ { lng: 114.18, lat: 22.27 } } />
                      <NavigationControl />
                      <InfoWindow
                        position={ { lng: 114.18, lat: 22.27 } }
                        text={`銅鑼灣摩利臣山道84-86號太平洋帆船酒店 1樓
                          Tel:(852) 3610 9194
                          `}
                        title='香港地址'
                      />
                    </Map>
                  </div>
                </Col>

                <Col sm={ 4 } md={ 4 } className='map-content'>
                  <address>
                    <h5>北京地址</h5>
                    <p>海淀區四道口路2號京果商業大廈A座5層 A5015</p>
                    <p>
                      Phone: (86) 010-53567027
                      <br /> Email: info@caci.hk
                    </p>
                  </address>
                  <div className='gmap' style={ { width: 250, height: 250 } }>
                    <Map center={ { lng: 116.3429829, lat: 39.9605515 } } zoom='15'>
                      <Marker position={ { lng: 116.3429829, lat: 39.9605515 } } />
                      <NavigationControl />
                      <InfoWindow
                        position={ { lng: 116.3429829, lat: 39.9605515 } }
                        text={`海淀區四道口路2號京果商業大廈A座5層 A5015
                          Tel:(86) 010-53567027
                          `}
                        title='北京地址'
                      />
                    </Map>
                  </div>
                </Col>

                <Col sm={ 4 } md={ 4 } className='map-content'>
                  <address>
                    <h5>澳門地址</h5>
                    <p>提督馬路華隆工業大廈8樓</p>
                    <p>
                      Phone:(853) 2895-1000
                      <br /> Email: info@caci.hk
                    </p>
                  </address>
                  <div className='gmap' style={ { width: 250, height: 250 } }>
                    <Map center={ { lng: 113.542505, lat: 22.2061564 } } zoom='11'>
                      <Marker position={ { lng: 113.542505, lat: 22.2061564 } } />
                      <NavigationControl />
                      <InfoWindow
                        position={ { lng: 113.542505, lat: 22.2061564 } }
                        text={`提督馬路華隆工業大廈8樓
                          Tel:(853) 2895-1000
                          `}
                        title='澳門地址'
                      />
                    </Map>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <ContactInfo />

        <section id='contact-page'>
          <div className='container'>
            <div className='center'>
              <h2>您的信息</h2>
              <p className='lead'>我們需要您的建議</p>
            </div>
            <Form />
          </div>
        </section>
      </div>
    );
  }
}
