import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MemberCard } from './MemberCard';

export const Members = () => {
  return (
    <div>
      <div className='center'>
        <h2>團隊成員</h2>
      </div>
      <div className='row team-bar'>
        <div className='first-one-arrow hidden-xs'>
          <hr />
        </div>
        <div className='first-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-up' />
        </div>
        <div className='second-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-down' />
        </div>
        <div className='third-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-up' />
        </div>
        <div className='fourth-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-down' />
        </div>
      </div>
      <Row>
        <Col md={ 6 } lg={ 6 }>
          <Row>
            <Col md={ 6 } sm={ 6 } lg={ 6 }>
              <MemberCard
                imgSrc='https://res.cloudinary.com/cacicloud/image/upload/v1523631537/members/sammi.png'
                name='張紫伶'
                position='藝術總監'
                about='聯合創始人，中國藝術研究院博士在讀、香港演藝學院職任教師，粵劇宗師白駒榮孫女，名伶白雪梅之女。擁有多年舞台制作、藝術教育、海內外公共行政的豐富經驗。自幼習琴，師承著名作曲家唐康年老師、著名小提琴表演家Sharon Stanis (Lafayette String Quartet)、及Andrew Dawes老師，十多歲便考取皇家音樂學院演奏文憑，曾獲多項國際比賽獎項。曾就讀加拿大維多利亞大學音樂系，後畢業於加拿大卑斯省大學主修音樂，並得到該兩所大學的全額獎學金。'
              />
            </Col>
            <Col md={ 6 } sm={ 6 } lg={ 6 }>
              <MemberCard
                imgSrc='https://res.cloudinary.com/cacicloud/image/upload/v1523631541/members/辉哥.png'
                name='李國輝'
                position='策略總監'
                about='聯合創始人，，主持成立了國內市場的藝術教育部、研學遊學部、藝文孵化部等不同業務。北京大學國際關係學院在讀碩士、香港城市大學中國企業管理專業本科、中華商略聯合會(北京)秘書長，曾任職文化傳媒公司多年，及自行開設活動策劃公司，並擔任香港中小企商會公職，提供進入內地市場的文化基金和落地服務，擁有10年以上的文化項目運營經驗。'
              />
            </Col>
          </Row>
        </Col>
        <Col md={ 6 }>
          <Row>
            <Col md={ 6 } sm={ 6 }>
              <MemberCard
                imgSrc='https://res.cloudinary.com/cacicloud/image/upload/v1523631538/members/jeff.png'
                name='梁從序'
                position='製作總監'
                about='畢業於中國體育重點大學-西南大學的網球及心理專業，自少學習小提琴專業，師從著名小提琴演奏家「西歧崇子」老師，熱衷於舞台制作及演出，現職藝文創薈(北京)管造部的舞台管理總監。'
              />
            </Col>
            <Col md={ 6 } sm={ 6 }>
              <MemberCard
                imgSrc='https://res.cloudinary.com/cacicloud/image/upload/v1523631540/members/蘇嘉惠.png'
                name='蘇嘉惠'
                position='財務總監'
                about='香港中文大學文化管理專業碩士，現職於香港公開大學，擁有多年公共行政經驗。同時擁有粵目演藝工作室等多家文化機構的行政經驗，對於文化教育及演藝項目富有熱情。'
              />
            </Col>
          </Row>
        </Col>
      </Row>
      
    </div>
  );
};
