import React, { Component } from 'react';
import { Row, Col, Media, Image } from 'react-bootstrap';
import CalendarCard from './CalendarCard';
import InfiniteCalendar, { Calendar, withMultipleDates } from 'react-infinite-calendar';

const taiwaneseLocale = require('date-fns/locale/zh_tw');

const ChineseCal = {
  locale: taiwaneseLocale,
  blank: '请您选择日子...',
  headerFormat: 'MMM Do, ddd ',
  todayLabel: {
    long: '今天',
  },
  weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  weekStartsOn: 0,
};

const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

// function search(nameKey, myArray) {
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i].time === nameKey) {
//       return myArray[i];
//     }
//   }
// }

// const array = [
//   { name: 'string 1', value: 'thisasdasd', other: 'that' },
//   { name: 'string 2', value: 'this', other: 'that' },
// ];

// const resultObject = search('string 1', array);

const MultipleDatesCalendar = withMultipleDates(Calendar);

export default class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `${ today }`,
    };
  }

  onClick(newValue) {
    this.setState({
      value: String(newValue),
    });
  }

  render() {
    return (
      <section>
        <div className='center'>
          <h2>活動時間</h2>
          <p className='lead'>Activity time</p>
          <Row>
            <Col xs={ 12 } smOffset={ 1 } sm={ 11 } mdOffset={ 0 } md={ 6 } lg={ 6 }>
              <InfiniteCalendar
                Component={ MultipleDatesCalendar }
                className='events-calendar'
                height={ 350 }
                min={ new Date(2016, 0, 1) }
                theme={ {
                  accentColor: '#448AFF',
                  floatingNav: {
                    background: 'rgba(56, 87, 138, 0.94)',
                    chevron: '#FFA726',
                    color: '#FFF',
                  },
                  headerColor: '#448AFF',
                  selectionColor: '#559FFF',
                  textColor: {
                    active: '#FFF',
                    default: '#333',
                  },
                  todayColor: '#FFA726',
                  weekdayColor: '#559FFF',
                } }
                // selected={ today }
                selected={ [new Date(2017, 9, 10), today, new Date(2017, 11, 18)] }
                onSelect={ selected => this.onClick(selected) }
                // displayOptions={ { layout: 'landscape' } }
                minDate={ lastWeek }
                locale={ ChineseCal }
              />
            </Col>
            <Col xs={ 12 } smOffset={ 1 } sm={ 12 } mdOffset={ 0 } md={ 6 } lg={ 6 }>
              <CalendarCard />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
