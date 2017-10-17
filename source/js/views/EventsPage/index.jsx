import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import EventCalendar from './EventCalendar';
import YiwenActivities from './YiwenActivities';
import CommunityActivity from './CommunityActivity';

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

        <div className='container' style={ { paddingRight: 0, paddingLeft: 0, width: '89%' } }>
          <EventCalendar data={ DATA } />
          <YiwenActivities />
          <CommunityActivity />
        </div>
      </div>
    );
  }
}
