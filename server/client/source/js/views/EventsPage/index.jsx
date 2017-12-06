import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Carousel } from 'react-bootstrap';
import EventCalendar from './EventCalendar';
import { YiwenActivities } from './YiwenActivities';
import CommunityActivity from './CommunityActivity';
import { Loading } from '../../components/Global/Loading';

class EventsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <Carousel
          id='eventpage-slider'
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
        >
          {this.props.fetchedEvents.data.slice(0, 5).map((data, index) => {
            return (
              <Carousel.Item key={ index } animateIn={ true }>
                <img src={ data.event_images[0] } alt='Carousel' />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <div className='container' style={ { paddingRight: 0, paddingLeft: 0, width: '89%' } }>
          <EventCalendar events={ this.props.fetchedEvents.data } />
          <YiwenActivities events={ this.props.fetchedEvents.data } />
          <CommunityActivity />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ fetchedEvents }) {
  return { fetchedEvents };
}

export default connect(mapStateToProps, actions)(EventsPage);
