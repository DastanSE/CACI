import React, { Component } from 'react';

export default class NewsPage extends Component {
  render() {
    return (
      <div>
        <section id='news-slider' className='home-slider main-slider'>
          <div id='carousel-home' className='no-margin carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#carousel-home' data-slide-to='0' className='active' />
              <li data-target='#carousel-home' data-slide-to='1' />
              <li data-target='#carousel-home' data-slide-to='2' />
              <li data-target='#carousel-home' data-slide-to='3' />
              <li data-target='#carousel-home' data-slide-to='4' />
            </ol>
            <div className='carousel-inner news-home' role='listbox'>
              <div className='item active' style={ { backgroundImage: '../../assets/img/bg/bg-overlay.jpg' } }>
                <div className='container'>
                  <div className='row slide-margin'>
                    <div className='col-md-12'>
                      <div className='carousel-content center ywtop-txt'>
                        <h1 className='animation animated-item-1'>媒体报导</h1>
                        <a className='btn-slide animation animated-item-3' href='#'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item' style={ { backgroundImage: '' } }>
                <div className='container'>
                  <div className='row slide-margin'>
                    <div className='col-sm-6'>
                      <div className='carousel-content'>
                        <h1 className='animation animated-item-1' />
                        <h4 className='animation animated-item-2' />
                        <a className='btn-slide animation animated-item-3' href='#'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='news' className='container'>
          <div>
            <img src='../../assets/img/bg/news.jpg' />
          </div>
          <div className='center'>
            <h2>媒體報導</h2>
            <p className='lead'>News</p>
          </div>
          <div className='panel-group' id='accordion1'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>
                  <a
                    className='accordion-toggle'
                    data-toggle='collapse'
                    data-parent='#accordion1'
                    href='#post-<?php echo $post->ID ?>'
                  >
                    <i className='fa fa-angle-right pull-right' />
                  </a>
                </h3>
              </div>
              <div id='post-<?php echo $post->ID ?>' className='panel-collapse collapse'>
                <div className='panel-body'>
                  <div className='media accordion-inner'>
                    <div className='pull-left col-sm-3'>
                      <img className='img-responsive' src='' />
                    </div>
                    <div className='media-body'>
                      <h4 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='page_navi' />
          </div>
        </section>
      </div>
    );
  }
}
