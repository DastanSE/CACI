import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { MainPageCarousel } from './MainPageCarousel';
import { OurFeatures } from './OurFeatures';
import { RecentActivities } from './RecentActivities';
import { OurServices } from './OurServices';
import { OurResults } from './OurResults';
import { OurPartners } from './OurPartners';
import { Section7 } from './Section7';
import { ArtAliance } from './ArtAliance';
import { VenueRental } from './VenueRental';
import { ContactInfo } from '../../components/Global/ContactInfo';
import { Loading2 } from '../../components/Global/Loading2';
import { Loading } from '../../components/Global/Loading';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='MainPage'>
        <MainPageCarousel events={ this.props.fetchedEvents.data } />
        <OurFeatures />
        <RecentActivities events={ this.props.fetchedEvents.data } />
        <OurServices />
        <OurResults />
        <OurPartners />
        <Section7 />
        <ArtAliance />
        <VenueRental />
        <ContactInfo />
      </div>
    );
  }
}

function mapStateToProps({ news, fetchedEvents }) {
  return { news, fetchedEvents };
}

export default connect(mapStateToProps, actions)(MainPage);
