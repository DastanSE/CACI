import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import Cards from './Cards';
import JumuType from './JumuType';

const REPERTOIRE = [
  { typeFilterBy: '.wudao', type: '舞蹈' },
  { typeFilterBy: '.xiju', type: '戲劇' },
  { typeFilterBy: '.yinyue', type: '音乐' },
  { typeFilterBy: '.zhuchang', type: '駐場演出' },
  { typeFilterBy: '.ertong', type: '兒童劇' },
  { typeFilterBy: '.huaju', type: '話劇' },
  { typeFilterBy: '.lvyou', type: '旅遊演出' },
  { typeFilterBy: '.xiqu', type: '戲曲' },
  { typeFilterBy: '.zaji', type: '雜技' },
  { typeFilterBy: '.moshu', type: '魔術' },
  { typeFilterBy: '.otherrepertoire', type: '其他' },
];

const CITIES = [
  { typeFilterBy: '.beijing', type: '北京' },
  { typeFilterBy: '.shanghai', type: '上海' },
  { typeFilterBy: '.guangzhou', type: '廣州' },
  { typeFilterBy: '.tianjin', type: '天津' },
  { typeFilterBy: '.shenzhen', type: '深圳' },
  { typeFilterBy: '.nanjing', type: '南京' },
  { typeFilterBy: '.chengdu', type: '成都' },
  { typeFilterBy: '.chongqing', type: '重慶' },
  { typeFilterBy: '.zhengzhou', type: '鄭州' },
  { typeFilterBy: '.xian', type: '西安' },
  { typeFilterBy: '.wuhan', type: '武漢' },
  { typeFilterBy: '.changsha', type: '長沙' },
  { typeFilterBy: '.hefei', type: '合肥' },
  { typeFilterBy: '.othercities', type: '其他城市' },
];

const ACTGROUPS = [
  { typeFilterBy: '.huajut', type: '話劇團' },
  { typeFilterBy: '.ertongt', type: '兒童劇團' },
  { typeFilterBy: '.gejut', type: '歌劇團' },
  { typeFilterBy: '.wujut', type: '舞劇團' },
  { typeFilterBy: '.xijut', type: '戲劇團' },
  { typeFilterBy: '.quyit', type: '曲藝團' },
  { typeFilterBy: '.zajit', type: '雜技團' },
  { typeFilterBy: '.maxit', type: '馬戲團' },
  { typeFilterBy: '.muout', type: '木偶團' },
  { typeFilterBy: '.piyingt', type: '皮影團' },
  { typeFilterBy: '.othergroups', type: '其他' },
];

export default class RepertoirePage extends Component {
  render() {
    return (
      <div>
        <div id='jumu-banner'>
          <Carousel
            id='jumu-slider'
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
            slide
            interval={ 2000 }
          >
            {[
              { imgsrc: 'http://res.cloudinary.com/cacicloud/image/upload/v1510128455/index-top1_rflzc7.jpg' },
              { imgsrc: 'http://res.cloudinary.com/cacicloud/image/upload/v1510128455/index-top1_rflzc7.jpg' },
            ].map((data, index) => {
              return (
                <Carousel.Item key={ index } animateIn={ true }>
                  <img src={ data.imgsrc } />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div id='primary' className='content-area'>
          <div id='main' className='site-main' role='main'>
            <div className='site-branding'>
              <h1 className='site-title'>劇目採購</h1>
            </div>
            <Row>
              <Col xs={ 12 } sm={ 4 } md={ 3 } lgOffset={ 1 } lg={ 3 }>
                <div id='jumu'>
                  <div className='jumu-type'>
                    <h3>全部分類</h3>
                    <hr />
                    <JumuType typeName='精品劇目' typesArray={ REPERTOIRE } />
                    <hr />
                    <JumuType typeName='演出场馆' typesArray={ CITIES } />
                    <hr />
                    <JumuType typeName='表演团队' typesArray={ ACTGROUPS } />
                    <hr />
                  </div>
                </div>
              </Col>
              <Col xs={ 12 } sm={ 8 } md={ 9 } lg={ 8 }>
                <div className='cards article-items' style={ { minHeight: 300 } }>
                  <Cards classname='xiju article-item jumu-cards' type='戲劇' />
                  <Cards classname='wudao article-item jumu-cards' type='舞蹈' />
                  <Cards classname='yinyue article-item jumu-cards' type='音樂' />
                  <Cards classname='zhuchang article-item jumu-cards' type='駐場演出' />
                  <Cards classname='ertong article-item jumu-cards' type='兒童劇' />
                  <Cards classname='huaju article-item jumu-cards' type='話劇' />
                  <Cards classname='lvyou article-item jumu-cards' type='旅遊演出' />
                  <Cards classname='xiqu article-item jumu-cards' type='戲曲' />
                  <Cards classname='zaji article-item jumu-cards' type='雜技' />
                  <Cards classname='moshu article-item jumu-cards' type='魔術' />
                  <Cards classname='qita article-item jumu-cards' type='其他' />
                </div>

                <div className='cards article-items' style={ { minHeight: 300 } }>
                  <Cards classname='beijing article-item jumu-cards' type='北京' />
                  <Cards classname='shanghai article-item jumu-cards' type='上海' />
                  <Cards classname='guangzhou article-item jumu-cards' type='廣州' />
                  <Cards classname='tianjin article-item jumu-cards' type='天津' />
                  <Cards classname='shenzhen article-item jumu-cards' type='深圳' />
                  <Cards classname='nanjing article-item jumu-cards' type='南京' />
                  <Cards classname='chengdu article-item jumu-cards' type='成都' />
                  <Cards classname='chongqing article-item jumu-cards' type='重慶' />
                  <Cards classname='zhengzhou article-item jumu-cards' type='鄭州' />
                  <Cards classname='xian article-item jumu-cards' type='西安' />
                  <Cards classname='wuhan article-item jumu-cards' type='武漢' />
                  <Cards classname='changsha article-item jumu-cards' type='長沙' />
                  <Cards classname='hefei article-item jumu-cards' type='合肥' />
                  <Cards classname='qitac article-item jumu-cards' type='其他城市' />
                </div>
                <div className='cards article-items' style={ { minHeight: 300 } }>
                  <Cards classname='huajut article-item jumu-cards' type='話劇團' />
                  <Cards classname='ertongt article-item jumu-cards' type='兒童劇團' />
                  <Cards classname='gejut article-item jumu-cards' type='歌劇團' />
                  <Cards classname='wujut article-item jumu-cards' type='舞劇團' />
                  <Cards classname='xijut article-item jumu-cards' type='戲劇團' />
                  <Cards classname='quyit article-item jumu-cards' type='曲藝團' />
                  <Cards classname='zajit article-item jumu-cards' type='雜技團' />
                  <Cards classname='maxit article-item jumu-cards' type='馬戲團' />
                  <Cards classname='muout article-item jumu-cards' type='木偶團' />
                  <Cards classname='piyingt article-item jumu-cards' type='皮影團' />
                  <Cards classname='qitat article-item jumu-cards' type='其他' />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className='clear' />
      </div>
    );
  }
}
