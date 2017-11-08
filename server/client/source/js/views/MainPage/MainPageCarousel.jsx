import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const sectionData = [
  {
    imgsrc: 'http://res.cloudinary.com/cacicloud/image/upload/v1510122915/slider_two_fmohd9.jpg',
    text1: 'asdfasdf',
    text2: '',
    link: '',
  },
  {
    imgsrc:
      'http://res.cloudinary.com/cacicloud/image/upload/v1510122171/%E8%88%9E%E8%B9%88%E5%A4%A7%E8%B5%9B_bir4rj.jpg',
    text1: '',
    text2: '',
    link: '',
  },
];

export default class MainPageCarousel extends Component {
  render() {
    return (
      <Carousel
        id='main-slider'
        prevIcon={
          <span className='prev'>
            <i className='fa fa-chevron-left' />
          </span>
        }
        nextIcon={
          <span className='next'>
            <i className='fa fa-chevron-right' />
          </span>
        }
        slide
        interval={ 2000 }
      >
        {sectionData.map((data, index) => {
          return (
            <Carousel.Item key={ index }>
              <Image src={ data.imgsrc } alt='Carousel' />
              <Carousel.Caption>
                <h1>{data.text1}</h1>
                <h4>{data.text2}</h4>
                {/* <a className='btn-slide' href={ data.link }>
                  Read More
                </a> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
