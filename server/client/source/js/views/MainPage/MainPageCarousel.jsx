import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

export const MainPageCarousel = props => {
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
      {props.events.slice(0, 5).map((data, index) => {
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
};
