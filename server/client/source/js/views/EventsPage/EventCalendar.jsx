import React, { Component } from 'react';
import { Row, Col, Media, Image } from 'react-bootstrap';
import InfiniteCalendar, { Calendar, withMultipleDates } from 'react-infinite-calendar';

const taiwaneseLocale = require('date-fns/locale/zh_tw');

import CalendarCard from './CalendarCard';

import { formatDate } from '../../services';

const ChineseCal = {
  locale: taiwaneseLocale,
  blank: '暂时没有活动...',
  headerFormat: 'MMM Do, ddd ',
  todayLabel: {
    long: '今天',
  },
  weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  weekStartsOn: 0,
};

const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const MultipleDatesCalendar = withMultipleDates(Calendar);

export default class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `${ today }`,
      selectedDayEvent: [],
    };
  }

  onClick(newValue) {

    const { events } = this.props;
    const daylyEvent = events.filter(data => {
      return `${ formatDate(newValue) }` === `${ formatDate(new Date(data.event_date)) }`;
    });

    this.setState({
      value: String(newValue),
      selectedDayEvent: daylyEvent,
    });
  }

  render() {
    const eventDates = [];
    const { events } = this.props;
    events.forEach((item, i) => eventDates.push(item.event_date));

    return (
      <section>
        <div className='center'>
          <h2>活動時間</h2>
          <p className='lead'>Activity time</p>
          <Row>
            <Col xs={ 12 } sm={ 12 } md={ 6 } lgOffset={ 1 } lg={ 5 }>
              <InfiniteCalendar
                Component={ MultipleDatesCalendar }
                className='events-calendar'
                height={ 350 }
                min={ new Date(2016, 0, 1) }
                theme={ {
                  accentColor: '#000',
                  floatingNav: {
                    background: 'rgba(56, 87, 138, 0.94)',
                    chevron: '#FFA726',
                    color: '#FFF',
                  },
                  headerColor: '#000',
                  selectionColor: '#848181',
                  textColor: {
                    active: '#FFF',
                    default: '#333',
                  },
                  todayColor: '#FFA726',
                  weekdayColor: '#848181',
                } }
                // selected={ today }
                selected={ eventDates }
                onSelect={ selected => this.onClick(selected) }
                // displayOptions={ { layout: 'landscape' } }
                // minDate={ lastWeek }
                locale={ ChineseCal }
              />
            </Col>
            <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 5 }>
              {this.state.selectedDayEvent.map((data, index) => {
                return (
                  <CalendarCard
                    key={ index }
                    time={ formatDate(new Date(data.event_date)) }
                    eventTitle={ data.title }
                    eventMainImg={ data.event_images[0] }
                    images={ data.event_images }
                    body={ data.event_body }
                  />
                );
              })}
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
