import React, { Component } from 'react';
import { Row, Col, Image, Thumbnail } from 'react-bootstrap';

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

          <section className='col-sm-12 suptxt'>
            <div className='center wow fadeInDown'>
              <h1 className='center'>場地租賃</h1>
              <br />
            </div>
            <div className='row wow fadeInDown center'>
              <div className='col-sm-3'>
                <Image responsive src='/imglili/1.jpg' alt='partners' />
                <h5>藝聚場</h5>
              </div>
              <div className='col-sm-3'>
                <Image responsive src='/imglili/3.jpg' alt='partners' />
                <h5>香巴拉</h5>
              </div>
              <div className='col-sm-3'>
                <Image responsive src='/imglili/2.jpg' alt='partners' />
                <h5>藝聚場</h5>
              </div>
              <div className='col-sm-3'>
                <Image responsive src='/imglili/4.jpg' alt='partners' />
                <h5>香巴拉</h5>
              </div>
            </div>
          </section>

          <section className='col-sm-12 suptxt'>
            <div className='center wow fadeInDown'>
              <h1 className='center'>合作機構</h1>
              <br />
            </div>
            <div className='row wow fadeInDown center'>
              <div className='col-sm-11 sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/梅氏传媒.jpg'
                    alt='partners'
                  />
                  <h5>梅氏傳媒</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/戏曲学会.jpg'
                    alt='partners'
                  />
                  <h5>中國戲曲表演學會</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image responsive src='../../assets/img/partners/support/罗兰.jpg' alt='partners' />
                  <h5>羅蘭數位音樂教育</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/macao.jpg'
                    alt='partners'
                  />
                  <h5>澳門國際青年藝術創作人協會</h5>
                </div>
              </div>
              <div className='col-sm-11 sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image responsive src='../../assets/img/partners/support/红韵.jpg' alt='partners' />
                  <h5>紅韻教育集團</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/中国学生文化与艺术联合会.jpg'
                    alt='partners'
                  />
                  <h5>中國學生文化與藝術聯合會</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image responsive src='../../assets/img/partners/support/落网.jpg' alt='partners' />
                  <h5>落網獨立音樂網</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/弘德龙狮团.jpg'
                    alt='partners'
                  />
                  <h5>香港弘德龍獅體育會</h5>
                </div>
              </div>
              <div className='col-sm-11 sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    className='small'
                    src='../../assets/img/partners/support/active.jpg'
                    alt='partners'
                  />
                  <h5>ACTIVE</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    className='small'
                    src='../../assets/img/partners/support/hkyouth.jpg'
                    alt='partners'
                  />
                  <h5>香港青年創業軍</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    className='small'
                    src='../../assets/img/partners/support/澳门推广协会.jpg'
                    alt='partners'
                  />
                  <h5>澳門文化遺產推廣協會</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    className='small'
                    src='../../assets/img/partners/support/zj.jpg'
                    alt='partners'
                  />
                  <h5>中加國際留學移民諮詢服務中心</h5>
                </div>
              </div>
            </div>
          </section>

          <section className='col-sm-12 suptxt'>
            <div className='center wow fadeInDown'>
              <h1 className='center'>贊助單位</h1>
              <br />
            </div>
            <div className='row wow fadeInDown'>
              <div className='col-sm-offset-1 col-sm-11 center sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/国际教育互动.jpg'
                    alt='partners'
                  />
                  <h5>國際教育互動集團</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    className='small'
                    src='../../assets/img/partners/support/中國商略聯合會.jpg'
                    alt='partners'
                  />
                  <h5>中國商略聯合會</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/vela.jpg'
                    alt='partners'
                  />
                  <h5>香港太平洋帆船酒店</h5>
                </div>
              </div>
            </div>
          </section>
          <section className='col-sm-12 suptxt'>
            <div className='center wow fadeInDown'>
              <h1 className='center'>友好機構</h1>
              <br />
            </div>
            <div className='row wow fadeInDown center'>
              <div className='col-sm-11 sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/香港浸会大学.jpg'
                    alt='partners'
                  />
                  <h5>香港浸会大学</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/北师大.jpg'
                    alt='partners'
                  />
                  <h5>北京師範大學</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image responsive src='../../assets/img/partners/support/中戏.jpg' alt='partners' />
                  <h5>中國戲曲學院</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image responsive src='../../assets/img/partners/support/中传.jpg' alt='partners' />
                  <h5>中國傳媒大學</h5>
                </div>
              </div>
              <div className='col-sm-11 sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image responsive src='../../assets/img/partners/support/北舞.jpg' alt='partners' />
                  <h5>北京舞蹈學院</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/中央民族.jpg'
                    alt='partners'
                  />
                  <h5>中央民族大學</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image responsive src='../../assets/img/partners/support/北体.jpg' alt='partners' />
                  <h5>北京體育大學</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/香港理工大学.jpg'
                    alt='partners'
                  />
                  <h5>香港理工大學</h5>
                </div>
              </div>
              <div className='col-sm-11 sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/北大歌剧.jpg'
                    alt='partners'
                  />
                  <h5>北京大學歌劇研究學院</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/人大艺术学院.jpg'
                    alt='partners'
                  />
                  <h5>中國人民大學藝術學院</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/香港城市大学.jpg'
                    alt='partners'
                  />
                  <h5>香港城市大學</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    className='img-responsive small'
                    src='../../assets/img/partners/support/中央戏剧.jpg'
                    alt='partners'
                  />
                  <h5>中央戲劇學院</h5>
                </div>
              </div>
              <div className='col-sm-11 sup-border'>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    className='img-responsive small'
                    src='../../assets/img/partners/support/山东艺术.jpg'
                    alt='partners'
                  />
                  <h5>山東藝術學院</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    className='img-responsive small'
                    src='../../assets/img/partners/support/央美.jpg'
                    alt='partners'
                  />
                  <h5>中央美術學院</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    responsive
                    src='../../assets/img/partners/support/香港中文大学.jpg'
                    alt='partners'
                  />
                  <h5>香港中文大學</h5>
                </div>
                <div className='col-sm-2 col-md-offset-1'>
                  <Image
                    className='img-responsive small'
                    src='../../assets/img/partners/support/中国艺术研究院.jpg'
                    alt='partners'
                  />
                  <h5>中國藝術研究院</h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
