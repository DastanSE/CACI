import React, { Component } from 'react';

export default class Section1 extends Component {
  render() {
    return (
      <div className='Section1'>
        <section className="home-slider main-slider">
          <div id="carousel-home" className="no-margin carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-home" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-home" data-slide-to="1"></li>
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

        </section>
      </div>
    );
  }
}
