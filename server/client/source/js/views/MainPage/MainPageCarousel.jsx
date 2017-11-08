import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const sectionData = [
  {
    imgsrc: 'http://res.cloudinary.com/dastan1994/image/upload/v1509939006/%E8%88%9E%E8%B9%88%E5%A4%A7%E8%B5%9B_srjdr6.jpg',
    text1: '',
    text2: '',
    link: '',
  },
  {
    imgsrc: '../../assets/img/舞蹈大赛.jpg',
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
              <img src={ data.imgsrc } alt='Carousel' />
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
