import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

export const ContactInfo = props => {
  return (
    <section id='conatcat-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <div
              className='media contact-info wow fadeInDown'
              data-wow-duration='1000ms'
              data-wow-delay='600ms'
            >
              <div className='pull-left'>
                <i className='fa fa-phone' />
              </div>
              <div className='media-body'>
                <h2>想要聯繫我們？</h2>
                <p>
                  (香港) 銅鑼灣摩理臣山道84-86號 1樓 | (852) 3610 9194 | info@caci.hk
                  <br /> (澳門) 提督馬路華隆工業大廈8樓 | (853) 2895-1000 | info.mac@caci.hk
                  <br /> (北京) 海淀區四道口路2號京果商業大廈A座5層 A5015 | (86) 010-53567027 | info.bj@caci.hk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
