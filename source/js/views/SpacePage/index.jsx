import React, { Component } from 'react';
import ResourceSection from './ResourceSection';
import { Row, Col, Image, Carousel } from 'react-bootstrap';

export default class SpacePage extends Component {
  render() {
    return (
      <div>
        <section className='home-slider main-slider'>
          <div id='carousel-home' className='no-margin carousel slide' data-ride='carousel'>
            <div className='carousel-inner news-home' role='listbox'>
              <div className='item active'>
                <div className='container'>
                  <div className='row slide-margin'>
                    <div className='col-md-12'>
                      <div className='carousel-content center space-txt'>
                        <h1 className='animation animated-item-1'>場地扶持計劃</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='feature'>
          <div className='container'>
            <div className='center wow fadeInDown'>
              <div>
                <h2>計劃概述</h2>
                <p className='lead'>Project</p>
                <p className='lead'>
                  當今我國文化市場百花齊放，北京作為文化中心，文藝市場繁榮，人才廣闊，新興藝文團體層出不窮，作為一股重要的新生力量，他們有夢想有動力，卻在場地和資金
                  上有困難。為了回應中國夢的號召，促進與配合北京市的藝文推廣以及高校學生的精神生活，藝文創薈願免費提供以場地為主的各方面資源，扶持新興藝文團體，為
                  文化產業輸送更多的人才
                </p>
              </div>
              <div className='row clearfix'>
                <div className='col-md-4 col-sm-4 ml'>
                  <div
                    className='single-profile-top wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='fuchi-top'>
                        <img
                          className='media-teac img-thumbnail'
                          src='../assets/img/changdi1.jpg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 col-sm-4 ml'>
                  <div
                    className='single-profile-top wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='fuchi-top'>
                        <img
                          className='media-teac img-thumbnail'
                          src='../assets/img/changdi2.jpg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 col-sm-4 ml'>
                  <div
                    className='single-profile-top wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='fuchi-top'>
                        <img
                          className='media-teac img-thumbnail'
                          src='../assets/img/changdi3.jpg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='qunti'>
          <div className='container'>
            <div className='center wow fadeInDown'>
              <div>
                <h2 style={ { color: '#fff' } }>針對群體</h2>
                <p className='lead' style={ { color: '#fff' } }>
                  Group
                </p>
              </div>
              <div className='row clearfix'>
                <div className='col-md-6 col-sm-12 ml'>
                  <div
                    className='services-wrap wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='tea-top'>
                        <div className='feature-wrap' style={ { marginBottom: 0 } }>
                          <i className='i-item'>1</i>
                          <div className='fuchi-text'>
                            <h3>藝文類社團組織</h3>
                            <p>以愛好和興趣聚集在一起的社團組織，不以盈利為主要目的，包括專業院校學生團隊、高校藝文類學生社團、社會藝文愛好者組織。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-sm-12 ml'>
                  <div
                    className='services-wrap wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='tea-top'>
                        <div className='feature-wrap' style={ { marginBottom: 0 } }>
                          <i className='i-item'>2</i>
                          <div className='fuchi-text'>
                            <h3>藝文公益推廣組織</h3>
                            <p>不以盈利為主要目的的藝術推廣組織，具有公益性和使命感。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className='col-md-12 col-sm-12' style={ { opacity: 0, margin: 0 } } />

                <div className='col-md-6 col-sm-12 ml'>
                  <div
                    className='services-wrap wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='tea-top'>
                        <div className='feature-wrap' style={ { marginBottom: 0 } }>
                          <i className='i-item'>3</i>
                          <div className='fuchi-text'>
                            <h3>藝文創業初階團隊</h3>
                            <p>在初創階段，或有創業計畫，缺乏相關資源和經驗。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-sm-12 ml'>
                  <div
                    className='services-wrap wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='tea-top'>
                        <div className='feature-wrap' style={ { marginBottom: 0 } }>
                          <i className='i-item'>4</i>
                          <div className='fuchi-text'>
                            <h3>新興藝文商業團隊</h3>
                            <p>有一定相關經驗，在之前的商業行為中小有收益，相對獨立，有資源分享，互利合作的需求。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='center wow fadeInDown'>
              <div>
                <h2>制度流程</h2>
                <p className='lead'>Institution</p>
                <p className='lead'>
                  每三個月為一季形成進階制度，從報名招募，到篩選入駐，最後進行作品呈現，由專業評委進行評估，淘汰較弱者，優秀者可在下一階段繼續駐紮，並在往後階段獲得專家指導、投資申請、商演運作等進一步的扶持，同時再招募新一季的扶持成員，如此形成滾動模式。
                </p>
              </div>
              <div className='row clearfix'>
                <div className='col-md-6 col-sm-6 ml'>
                  <div
                    className='single-profile-top wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='fuchi-top'>
                        <img className='media-teac' src='../assets/img/ruzhu.jpg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-sm-6 ml'>
                  <div
                    className='single-profile-top wow fadeInDown'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='media'>
                      <div className='fuchi-top'>
                        <img className='media-teac' src='../assets/img/zhidu.jpg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='feature'>
          <div className='container'>
            <div className='col-md-6 col-sm-6'>
              <div className='center wow fadeInDown'>
                <div>
                  <h2>相關規定</h2>
                  <p className='lead'>Stipulation</p>
                  <p className='lead'>
                    1、獲得扶持的隊伍需要全部成為藝文創匯的會員：享受參加培訓、觀看演出、使用場地免費，每人每年20元會費，全年享受會員福利。
                    <br />2、獲得扶持的團隊需要在入駐的三個月後進行一次公開的彙報呈現，形式包括演出、工作坊、微電影等。
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-sm-6'>
              <div className='center wow fadeInDown'>
                <div>
                  <h2>時間安排</h2>
                  <p className='lead'>Time</p>
                  <p className='lead'>
                    4月25日——4月30日 計畫全面推廣
                    <br />5月1日——5月20日 遞交材料進行篩選
                    <br />5月21日——5月31日 面試
                    <br />6月正式入駐第一季扶持計畫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container wow fadeInDown'>
            <div className='center wow fadeInDown'>
              <h2>進駐團隊</h2>
              <p className='lead'>Our Team</p>
            </div>
            <div className='row'>
              <div className='col-md-4 wow fadeInDown'>
                <a href=''>
                  <div className='clients-comments text-center'>
                    <img
                      src='../assets/img/partners/support/罗兰.jpg'
                      className='img-circle'
                      alt=''
                    />
                    <h4>
                      <span /> <br />
                    </h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4 wow fadeInDown'>
                <a href=''>
                  <div className='clients-comments text-center'>
                    <img
                      src='../assets/img/partners/support/粤目演义.jpg'
                      className='img-circle'
                      alt=''
                    />
                    <h4>
                      <span /> <br />
                    </h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4 wow fadeInDown'>
                <a href=''>
                  <div className='clients-comments text-center'>
                    <img
                      src='../assets/img/partners/support/情定北京.jpg'
                      className='img-circle'
                      alt=''
                    />
                    <h4>
                      <span /> <br />
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className='center wow fadeInDown'>
              <div className='request'>
                <h4>
                  <a href='http://caci.hk/team/'>查看更多</a>
                </h4>
              </div>
            </div>
          </div>
        </section>

        <ResourceSection />

        <section className='space' id='conatcat-info'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                <div
                  className='media contact-info wow fadeInDown'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='pull-left'>
                    <i className='fa fa-phone' />
                  </div>
                  <div className='media-body'>
                    <h2>想要聯繫我們？</h2>
                    <p>
                      連絡人：林先生 (010-5356 7027)
                      <br />微信號：藝文君 （caci-wechat)
                      <br />查詢電郵：ywchwx@126.com
                      <br />辦公地址：海澱區四道口路2號京果商廈A座5015藝聚場 （北京）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
