import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

// const sectionData = [
//   {
//     imgsrc: 'https://res.cloudinary.com/cacicloud/image/upload/v1510122171/mainpage/舞蹈大赛_bir4rj.jpg',
//     text1: 'asdfasdf',
//     text2: '',
//     link: '',
//   },
//   {
//     imgsrc:
//       'https://res.cloudinary.com/cacicloud/image/upload/v1510122915/mainpage/slider_two_fmohd9.jpg',
//     text1: '',
//     text2: '',
//     link: '',
//   },
// ];

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
        {this.props.events.slice(0, 5).map((data, index) => {
          return (
            <Carousel.Item key={ index }>
              <Image src={ data.event_images[0] } alt='Carousel' />
              <Carousel.Caption>
                <h1>{data.title}</h1>
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
