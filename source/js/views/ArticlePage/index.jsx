import React, { Component } from 'react';

export default class ArticlePage extends Component {
  render() {
    return (
      <div>
        <div id='primary' className='content-area'>
          <div id='main' className='site-main' role='main'>
            <div className='site-branding'>
              <h1 className='site-title'>藝文資訊</h1>
            </div>

            <div className='tb-category'>
              <ul className='article-filter' style={ { paddingLeft: 0 } }>
                <li style={ { borderColor: 'rgb(255, 87, 34)' } }>
                  <a className='article-btn1 active' href='#' data-filter='.zixun1'>
                    藝術評論
                  </a>
                </li>

                <li style={ { borderColor: 'rgb(171, 71, 188)' } }>
                  <a className='article-btn2' href='#' data-filter='.zixun2'>
                    科技新聞
                  </a>
                </li>

                <li style={ { borderColor: 'rgb(255, 87, 34)' } }>
                  <a className='article-btn1' href='#' data-filter='.zixun3'>
                    文藝推薦
                  </a>
                </li>
                <li style={ { borderColor: 'rgb(171, 71, 188)' } }>
                  <a className='article-btn2' href='#' data-filter='.zixun4'>
                    世相百科
                  </a>
                </li>
              </ul>
            </div>

            <div className='cards article-items'>
              <article className='zixun2 article-item '>
                <a className='link-wrap' href='' target='_blank'>
                  <div className='img-box'>
                    <img src='' alt='images' width={ 370 } height={ 200 } border='0' />
                  </div>
                  <div className='height-limiter'>
                    <div className='entry-header'>
                      <h4 className='entry-title'>title atribute</h4>
                    </div>
                    Content
                    <div className='entry-content' style={ { height: '103px!important' } }>
                      Content
                    </div>
                  </div>
                  post footer
                </a>
              </article>
              <article className='zixun2 article-item '>
                <a className='link-wrap' href='' target='_blank'>
                  <div className='img-box'>
                    <img src='' alt='images' width={ 370 } height={ 200 } border='0' />{' '}
                  </div>
                  <div className='height-limiter'>
                    <div className='entry-header'>
                      <h4 className='entry-title' />{' '}
                    </div>

                    <div className='entry-content' style={ { height: '103px!important' } } />
                  </div>
                </a>
              </article>
            </div>
            <div className='cards article-items'>
              <article className='zixun3 article-item'>
                <a className='link-wrap' href='' target='_blank'>
                  <div className='img-box'>
                    <img src='' alt='images' width={ 370 } height={ 200 } border='0' />{' '}
                  </div>
                  <div className='height-limiter'>
                    <div className='entry-header'>
                      <h4 className='entry-title' />{' '}
                    </div>

                    <div className='entry-content' style={ { height: '103px!important' } } />
                  </div>
                </a>
              </article>

              <article className='zixun4 article-item '>
                <a className='link-wrap' href='' target='_blank'>
                  <div className='img-box'>
                    <img src='' alt='images' width={ 370 } height={ 200 } border='0' />{' '}
                  </div>
                  <div className='height-limiter'>
                    <div className='entry-header'>
                      <h4 className='entry-title' />{' '}
                    </div>
                    {/*
                    <div className='entry-content' style={{ { height: '103px!important' } }}>
                    </div> */}
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
