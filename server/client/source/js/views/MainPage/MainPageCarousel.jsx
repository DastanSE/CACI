import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const sectionData = [
  {
    imgsrc: 'http://res.cloudinary.com/cacicloud/image/upload/v1510122915/slider_two_fmohd9.jpg',
    text1: '',
    text2: '',
    link: '',
  },
  {
    imgsrc: 'http://res.cloudinary.com/cacicloud/image/upload/v1510122171/%E8%88%9E%E8%B9%88%E5%A4%A7%E8%B5%9B_bir4rj.jpg',
    text1: '',
    text2: '',
    link: '',
  },
];

export default class MainPageCarousel extends Component {
  render() {
    return (
      <Carousel
        className='main-slider'
        prevIcon={
          <a className='prev hidden-xs'>
            <i className='fa fa-chevron-left' />
          </a>
        }
        nextIcon={
          <a className='next hidden-xs'>
            <i className='fa fa-chevron-right' />
          </a>
        }
      >
        {sectionData.map((data, index) => {
          return (
            <Carousel.Item key={ index } animateIn={ true }>
              <Image style={{height: '600px', margin: '0 auto'}} src={ data.imgsrc } alt='Carousel'  />
              <Carousel.Caption>
                <h1>{data.text1}</h1>
                <h4>{data.text2}</h4>
                <a className='btn-slide' href={ data.link }>
                  Read More
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
