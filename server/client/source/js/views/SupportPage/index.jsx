import React, { Component } from 'react';
import { Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { Partners } from './Partners';

export const SupportPage = props => {
  return (
    <div>
      <div id='support'>
        <div className='container'>
          <Col sm={ 12 }>
            <Col sm={ 10 } smOffset={ 1 }>
              <h1 className='center'>贊助與合作夥伴</h1>
              <br />
              <p>
                由兩岸藝文青年共同發起的藝術平臺，藝文創薈成立以來，已舉辦連串藝術文化項目和大型文化節，在通過日常營運獲取收入以外，
                企業贊助和個人捐贈也是藝文薈運營的重要資金來源。這一良性體系保證了藝文創薈專案內容的專業程度、學術性，以及作為當代藝術文化平臺的文化活力。我們致力於將中國當代藝術的聲音推向世界，並將國際先鋒文化引入本土視野。
              </p>
              <p>
                您的支持將幫助藝文創薈持久發展，也使兩岸每年近10萬人次的藝文活動受眾從中獲益。支持藝文創薈，將對您企業的品牌文化與形象產生潛移默化的積極影響，增加在具有良好的教育背景、對當代文化感興趣的受眾群體中的傳播範圍和認知度。我們竭誠為企業客戶及員工提供特別定制的藝術服務。
              </p>
              <p>
                個人捐贈者將成為藝文創薈贊助理事會的一員。作為對您慷慨支持的回饋，藝文創薈為贊助理事會成員設計了豐富的專屬服務，包括：優先投資或參與藝文創薈旗下亮點項目、定制國際級別的藝術之旅方案、特邀出席藝文創薈展覽的貴賓開幕及晚宴、深度介入當代藝術領域、與文化圈的意見領袖建立密切聯繫等。
              </p>
            </Col>
          </Col>

          <section className='suptxt'>
            <div className='center'>
              <h1 className='center'>場地租賃</h1>
            </div>
            <Row className='center'>
              <Col xs={ 6 } sm={ 3 } md={ 3 }>
                <Image responsive src='http://res.cloudinary.com/cacicloud/image/upload/v1510126717/changdi/1_kaap3e.jpg' alt='partners' />
                <h5>藝聚場</h5>
              </Col>
              <Col xs={ 6 } sm={ 3 } md={ 3 }>
                <Image responsive src='http://res.cloudinary.com/cacicloud/image/upload/v1510126717/changdi/3_dnyumu.jpg' alt='partners' />
                <h5>香巴拉</h5>
              </Col>
              <Col xs={ 6 } sm={ 3 } md={ 3 }>
                <Image responsive src='http://res.cloudinary.com/cacicloud/image/upload/v1510126716/changdi/2_jmrlyg.jpg' alt='partners' />
                <h5>藝聚場</h5>
              </Col>
              <Col xs={ 6 } sm={ 3 } md={ 3 }>
                <Image responsive src='http://res.cloudinary.com/cacicloud/image/upload/v1510126717/changdi/4_tcqqoo.jpg' alt='partners' />
                <h5>香巴拉</h5>
              </Col>
            </Row>
          </section>
          <Partners />
        </div>
      </div>
    </div>
  );
};
