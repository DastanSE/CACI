import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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

function search(nameKey, myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].time === nameKey) {
      return myArray[i];
    }
  }
}

const array = [
  { name: 'string 1', value: 'thisasdasd', other: 'that' },
  { name: 'string 2', value: 'this', other: 'that' },
];

const resultObject = search('string 1', array);

const MultipleDatesCalendar = withMultipleDates(Calendar);

export default class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ' test',
    };
  }

  onClick(newValue) {
    this.setState({
      value: String(newValue),
    });
    console.log(newValue);
    console.log(resultObject);
  }

  render() {
    // const{ data }= this.props;
    console.log('event data: ', this.props.data);
    return (
      <section>
        <div className='center'>
          <h2>活動時間</h2>
          <p className='lead'>Activity time</p>
          <Row>
            <Col md={ 5 }>
              <InfiniteCalendar
                Component={ MultipleDatesCalendar }
                width={ 600 }
                height={ 400 }
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
            <Col md={ 6 }>
              <div>{this.state.value}</div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
