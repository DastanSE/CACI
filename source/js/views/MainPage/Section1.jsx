import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const sectionData = [
  {
    imgsrc: '../../assets/img/us.jpg',
    text1: '我們是藝文創薈',
    text2: '一群來自兩岸，熱愛藝術、科創的青年…',
    link: '',
  },
  {
    imgsrc: '../../assets/img/2017夏令营.png',
    text1: '',
    text2: '',
    link: '',
  },
  {
    imgsrc: '../../assets/img/舞蹈大赛.jpg',
    text1: '',
    text2: '',
    link: '',
  },
];


export default class Section1 extends Component {
  render() {
    return (
      <div className='Section1'>
        <Carousel id="carousel-home" className="home-slider">
          {
            sectionData.map((data, index) => {
              return (
                <Carousel.Item key={index} animateIn={true} style={{height:500}}>
                  <img src={data.imgsrc}/>
                  <Carousel.Caption>
                    <h3>{data.text1}</h3>
                    <p>{data.text2}</p>
                    <a className="btn-slide animation animated-item-3" href={data.link}>Read More</a>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </div>
    );
  }
}
