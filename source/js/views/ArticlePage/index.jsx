import React, { Component } from 'react';
import OwnMasonry from '../../components/Global/OwnMasonry';
import Card from '../../components/Global/Card';
import { Loading } from '../../components/Global/Loading';

const brakePoints = [350, 576, 769, 992, 1200];

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
            <div style={ { width: '70%', marginLeft: '15%' } }>
              <OwnMasonry brakePoints={ brakePoints }>
                <Card
                  img1='../../assets/img/dance/d5.jpg'
                  title='活动五李侃；阿斯顿反馈栏喀纳斯；看到烦恼；卡森啊；上看到烦恼'
                  time='2017-12-01'
                />
                <Card
                  img1='../../assets/img/dance/d5.jpg'
                  title='活动五李侃；阿斯顿反馈栏喀纳斯；看到烦恼；卡森啊；上看到烦恼'
                  time='2017-12-01'
                />
              </OwnMasonry>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
