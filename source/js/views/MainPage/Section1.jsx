import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const sectionData = [
  {

  }
];
export default class Section1 extends Component {
  render() {
    return (
      <div className='Section1'>
        {/* <section className="home-slider main-slider">
          <div id="carousel-home" className="no-margin carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-home" data-slide-to="0" className="active"><img className="img-responsive" src="../../assets/img/services/services2.png"></img></li>
              <li data-target="#carousel-home" data-slide-to="1"><img className="img-responsive" src="../../assets/img/services/services2.png"></img></li>
              <li data-target="#carousel-home" data-slide-to="2"></li>
              <li data-target="#carousel-home" data-slide-to="3"></li>
              <li data-target="#carousel-home" data-slide-to="4"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="item active" >
                <div className="container">
                  <div className="row slide-margin">
                    <div className="col-sm-6">
                      <div className="carousel-content">
                        <h1 className="animation animated-item-1">我們是藝文創薈</h1>
                        <h4 className="animation animated-item-2">一群來自兩岸，熱愛藝術、科創的青年…</h4>
                        <a className="btn-slide animation animated-item-3" href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item" >
                <div className="container">
                  <div className="row slide-margin">
                    <div className="col-sm-6">
                      <div className="carousel-content">
                        <h1 className="animation animated-item-1"></h1>
                        <h4 className="animation animated-item-2">

                        </h4>
                        <a className="btn-slide animation animated-item-3" href="<?php the_permalink(); ?>">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="prev hidden-xs" href="#carousel-home" data-slide="prev">
              <i className="fa fa-chevron-left"></i>
            </a>
            <a className="next hidden-xs" href="#carousel-home" data-slide="next">
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>

        </section> */}
        <Carousel>
          <Carousel.Item animateIn={true} >
            <img width={900} height={500} alt="900x500"  src="../../assets/img/us.jpg"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item animateIn={true} >
            <img width={900} height={500} alt="900x500" src="../../assets/img/2017夏令营.png"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item animateIn={true} >
            <img width={900} height={500} alt="900x500" src="/assets/img/舞蹈大赛.jpg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
