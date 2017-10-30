import React, { Component } from 'react';
import MainPageCarousel from './MainPageCarousel';
import OurFeatures from './OurFeatures';
import RecentActivities from './RecentActivities';
import OurServices from './OurServices';
import OurResults from './OurResults';
import OurPartners from './OurPartners';
import Section7 from './Section7';
import ArtAliance from './ArtAliance';
import { VenueRental } from './VenueRental';
import { ContactInfo } from '../../components/Global/ContactInfo';


export default class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <MainPageCarousel />
        <OurFeatures />
        <RecentActivities />
        <OurServices />
        <OurResults />
        <OurPartners />
        <Section7 />
        <ArtAliance />
        <VenueRental />
        <ContactInfo
          contacts={ `
              <h2>想要聯繫我們？</h2>
              <p>
                (香港) 銅鑼灣摩理臣山道84-86號 1樓 | (852) 3610 9194 | info@caci.hk
                <br /> (澳門) 提督馬路華隆工業大廈8樓 | (853) 2895-1000 | info.mac@caci.hk
                <br /> (北京) 海淀區四道口路2號京果商業大廈A座5層 A5015 | (86) 010-53567027 | info.bj@caci.hk
              </p>
          ` }
        />
      </div>
    );
  }
}
