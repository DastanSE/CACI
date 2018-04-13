import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const CHANGDI = [
  {
    name: '藝聚場',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/1.jpg',
  },
  {
    name: '香巴拉',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/3.jpg',
  },
  {
    name: '藝聚場',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/2.jpg',
  },
  {
    name: '香巴拉',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/3.jpg',
  },
];

export const VenueRental = () => {
  return (
    <div className='venue-rental'>
      <section id='m-changdi' className=''>
        <div className='container'>
          <div className='center'>
            <h2>场地租赁</h2>
            <p className='lead'>Venue Rental</p>
          </div>
          <Row>
            {CHANGDI.map((data, index) => (
              <Col key={ index } sm={ 3 } xs={ 6 }>
                <div className='venue-rental-wrap'>
                  <Image src={ data.img } circle />
                  <div className='overlay'>
                    <div className='venue-rental-inner'>
                      <h3>{data.name}</h3>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};
