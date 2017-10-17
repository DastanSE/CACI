import React, { Component } from 'react';
import FlippingCard from './FlippingCard';

export default class ResourceSection extends Component {
  constructor(props) {
    super(props);
  }

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
                  <FlippingCard
                    frontText='公司成立及基本行政配套'
                    backText='针对初创项目提供包括公司成立、财税会计、媒体宣传、文案撰写、海报设计等不同的实际行政帮助'
                  />
                </div>
                <div className='col-sm-4 s4'>
                  <FlippingCard frontText='場地空間資源' backText='劇場、排練室、剪接室、錄音師、攝影棚及各種配套設備' />
                </div>
                <div className='col-sm-4 s4'>
                  <FlippingCard
                    frontText='人才轉介'
                    backText='舉辦人才招聘會及不同的文化機構實習計畫，讓有志於在藝術領域發展的人才可如願以償，各展所長，戰略合作機構：加拿大中加國際留學移民服務中心'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-4 s4'>
                  <FlippingCard
                    frontText='外出巡演的機會'
                    backText='協助優質藝術文化作品到地方上進行推廣，通過通過文化節、藝術節、舞蹈節等方式等不同形式，打響新作品的知名度，同時對接地方合作'
                  />
                </div>
                <div className='col-sm-4 s4'>
                  <FlippingCard
                    frontText='投資申請及對接'
                    backText='為通過評定的作品對接政治基金，同時通過線上眾籌、線下投資會的方式，為優質作品引入創作資金'
                  />
                </div>

                <div className='col-sm-4 s4'>
                  <FlippingCard frontText='運營諮詢' backText='針對初期創業的文化工作室，提供運營指導跟經營策略，對接地方文創園區' />
                </div>
              </div>
            </div>

            <div className='col-sm-3'>
              <FlippingCard
                className='lastFlipping'
                frontText='專家評估與指導'
                backText='[北京大學歌劇研究院]、[北京大學產業技術研究院]、[北京電影學院表演系]、[山東藝術學院京劇學系] [南京藝術學院音樂學系
                ]、[臺灣國立戲曲學院]、[德州三一大學]、[香港浸會大學視覺系]、[香港演藝學院舞蹈學院]
                [中國國家話劇院]、[中國電影股份有限公司]、[中國戲曲表演學會]
                [香港嶺南藝術會]、[香港舞蹈團]、[330音樂眾籌平臺]、[香港創意產業及科技創新委員會]
                [香港智慧財產權保險協會]、[香港青年創業軍創始人]、[中華經濟區域戰略發展協會教育委員]、[中華商略聯合會]'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
