import React, { Component } from 'react';

export default class ResourceSection extends Component {
  render() {
    return (
      <div className='news' id='ziyuan'>
        <div className='container'>
          <div className='skill-wrap clearfix' style={ { marginBottom: 30 } }>
            <div className='center wow fadeInDown'>
              <h2 style={ { color: '#fff' } }>可提供資源</h2>
              <p className='lead' style={ { color: '#fff' } }>
                Resource
              </p>
            </div>
          </div>

          <div className='row' style={ { marginBottom: '4em' } }>
            <div className='col-sm-9 '>
              <div className='row'>
                <div className='col-sm-4 s4'>
                  <div className='quickFlip'>
                    <div className='front'>
                      <a href='#' className='quickFlipCta  f'>
                        <div style={ { lineHeight: 30 } }>公司成立及基本行政配套</div>
                      </a>
                    </div>

                    <div className='back'>
                      <a href='#' className='quickFlipCta'>
                        <div className='f1'>针对初创项目提供包括公司成立、财税会计、媒体宣传、文案撰写、海报设计等不同的实际行政帮助</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-4 s4'>
                  <div className='quickFlip'>
                    <div className='front'>
                      <a href='#' className='quickFlipCta f '>
                        {' '}
                        <div>場地空間資源</div>
                      </a>
                    </div>

                    <div className='back'>
                      <a href='#' className='quickFlipCta'>
                        <div className='f1'>劇場、排練室、剪接室、錄音師、攝影棚及各種配套設備</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-4 s4'>
                  <div className='quickFlip'>
                    <div className='front'>
                      <a href='#' className='quickFlipCta f'>
                        <div>人才轉介</div>
                      </a>
                    </div>

                    <div className='back'>
                      <a href='#' className='quickFlipCta '>
                        <div className='f1'>
                          舉辦人才招聘會及不同的文化機構實習計畫，讓有志於在藝術領域發展的人才可如願以償，各展所長，戰略合作機構：加拿大中加國際留學移民服務中心
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-4 s4'>
                  <div className='quickFlip'>
                    <div className='front'>
                      <a href='#' className='quickFlipCta f '>
                        <div>外出巡演的機會</div>
                      </a>
                    </div>

                    <div className='back'>
                      <a href='#' className='quickFlipCta'>
                        <div className='f1'>
                          協助優質藝術文化作品到地方上進行推廣，通過通過文化節、藝術節、舞蹈節等方式等不同形式，打響新作品的知名度，同時對接地方合作
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-4 s4'>
                  <div className='quickFlip'>
                    <div className='front'>
                      <a href='#' className='quickFlipCta f'>
                        <div>投資申請及對接</div>
                      </a>
                    </div>

                    <div className='back'>
                      <a href='#' className='quickFlipCta'>
                        <div className='f1'>為通過評定的作品對接政治基金，同時通過線上眾籌、線下投資會的方式，為優質作品引入創作資金</div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-sm-4 s4'>
                  <div className='quickFlip'>
                    <div className='front'>
                      <a href='#' className='quickFlipCta f'>
                        <div>運營諮詢</div>
                      </a>
                    </div>

                    <div className='back'>
                      <a href='#' className='quickFlipCta  '>
                        <div className='f1'>針對初期創業的文化工作室，提供運營指導跟經營策略，對接地方文創園區</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-3 ' style={ { height: 310 } }>
              <div className='quickFlip'>
                <div className='front' style={ { height: 310 } }>
                  <a href='#' className='quickFlipCta f'>
                    <div>專家評估與指導</div>
                  </a>
                </div>
                <div className='back'>
                  <a href='#' className='quickFlipCta a1 ' style={ { height: 310 } }>
                    <div className='f2'>
                      [北京大學歌劇研究院]、[北京大學產業技術研究院]、[北京電影學院表演系]、[山東藝術學院京劇學系] [南京藝術學院音樂學系
                      ]、[臺灣國立戲曲學院]、[德州三一大學]、[香港浸會大學視覺系]、[香港演藝學院舞蹈學院]
                      [中國國家話劇院]、[中國電影股份有限公司]、[中國戲曲表演學會]
                      [香港嶺南藝術會]、[香港舞蹈團]、[330音樂眾籌平臺]、[香港創意產業及科技創新委員會]
                      [香港智慧財產權保險協會]、[香港青年創業軍創始人]、[中華經濟區域戰略發展協會教育委員]、[中華商略聯合會]
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
