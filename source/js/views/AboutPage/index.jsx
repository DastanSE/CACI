import React, { Component } from 'react';
import { Row, Col, Carousel, Image, Media, Panel, PanelGroup } from 'react-bootstrap';
import { ContactInfo } from '../../components/Global/ContactInfo';
import MediaReports from '../../components/Global/MediaReports';
import Section7 from '../MainPage/Section7';
import { OurService } from './OurService';
import { Members } from './Members';
import JoinUs from './JoinUs';

// const carouselData = [
//   {
//     imgsrc: '../../assets/img/slider_two.jpg',
//   },
//   {
//     imgsrc: '../../assets/img/slider_two.jpg',
//   },
// ];

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <section id='about-us'>
          <div className='container'>
            <div className='center'>
              <h2>關於藝文</h2>
              <p className='lead'>
                「藝文創薈(北京)文化傳播有限公司」，總部設於香港，同時於台北、澳門、北京設有辦事處，主要從事港台及國外文化項目內地融資、演出項目打包、演藝人才培養及轉介、活動訂制、文化項目咨詢五大範疇，致力於促進由創作人、投資人、演藝人、文化消費者四大群體所組成的兩岸文化鏈條，打造當代的中國藝術文化的品牌。
              </p>
            </div>

            <div id='about-slider'>
              {/* <Carousel
                id='carousel-slider'
                prevIcon={
                  <a className='prev hidden-xs' href='#carousel-home' data-slide='prev'>
                    <i className='fa fa-angle-left' />
                  </a>
                }
                nextIcon={
                  <a className='next hidden-xs' href='#carousel-home' data-slide='next'>
                    <i className='fa fa-angle-right' />
                  </a>
                }
                indicators={ false }
              >
                {carouselData.map((data, index) => {
                  return (
                    <Carousel.Item key={ index } animateIn={ true }>
                      <Image src={ data.imgsrc } responsive />
                      <Carousel.Caption>
                        <h1 className=''>{data.text1}</h1>
                        <h4 className=''>{data.text2}</h4>
                        <a className='btn-slide' href={ data.link }>
                          Read More
                        </a>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel> */}
              <Image src='../../assets/img/slider_two.jpg' responsive />
            </div>

            <OurService />

            <div className=''>
              <Members />
              <MediaReports />
              <JoinUs />
            </div>
          </div>
        </section>
        <Section7 />
        <ContactInfo
          contacts={ `
              <h2>想要聯繫我們？</h2>
              <p>
                (香港) 銅鑼灣摩理臣山道84-86號 1樓 | (852) 3610 9194 | info@caci.hk
                <br /> (澳門) 提督馬路華隆工業大廈8樓 | (853) 2895-1000 | info.mac@caci.hk
                <br /> (北京) 海淀區四道口路2號京果商業大廈A座5層 A5015 | (86) 010-53567027 | info.bj@caci.hk
              </p>
          ` }
        />
      </div>
    );
  }
}
