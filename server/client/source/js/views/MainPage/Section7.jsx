import React, { Component } from 'react';
import { Row, Col, Image, Tab, Nav, NavItem, Media } from 'react-bootstrap';

export const Section7 = props => {
  return (
    <section id='content'>
      <div className='container'>
        <Row>
          <Col xs={ 12 } md={ 6 }>
            <Tab.Container className='tab-wrap' defaultActiveKey='tab1'>
              <Media>
                <Media.Left className='pull-left' align='top'>
                  <Nav bsStyle='tabs' stacked>
                    <NavItem eventKey='tab1'>香港</NavItem>
                    <NavItem eventKey='tab2'>台北</NavItem>
                    <NavItem eventKey='tab3'>澳門</NavItem>
                    <NavItem eventKey='tab4'>內地</NavItem>
                    <NavItem eventKey='tab5'>誠邀</NavItem>
                  </Nav>
                </Media.Left>
                <Media.Body>
                  <Tab.Content bsStyle='parrent' animation>
                    <Tab.Pane eventKey='tab1'>
                      <Media>
                        <Media.Left className='pull-left'>
                          <Image
                            height={ 200 }
                            width={ 200 }
                            src='http://res.cloudinary.com/cacicloud/image/upload/v1510123713/hk_q8i4t0.jpg'
                            responsive
                          />
                        </Media.Left>
                        <Media.Body>
                          <h4>香港</h4>
                          <p>
                            藝文創薈總部設於香港，辦事處位於香港銅鑼灣摩理臣山道84-86號1樓，除了業務營運以外，香港總部作為藝文創薈最先發起的區塊，同時扮演著兩岸四地不同辦事處之間的聯繫樞紐角色，也是兩岸藝文創作者、愛好者進行交流的大本營，每年也會舉辦包括：小舞台藝術節、兩岸青年藝文夏令營、文化實習營、創思論壇、藝術挑戰賽等不同類型的公益活動。
                          </p>
                        </Media.Body>
                      </Media>
                    </Tab.Pane>
                    <Tab.Pane eventKey='tab2'>
                      <Media>
                        <Media.Left className='pull-left'>
                          <Image
                            height={ 200 }
                            width={ 200 }
                            src='http://res.cloudinary.com/cacicloud/image/upload/v1510123748/tw_auhuq6.jpg'
                            responsive
                          />
                        </Media.Left>
                        <Media.Body>
                          <h4>台北</h4>
                          <p>
                            台北分部為藝文創薈第二大辦事處，除了業務運營以外，台北分部還主要推廣台灣較為突出的初創團隊為主，包括：文創、設計、原生態音樂、即興戲劇、網絡運營及推廣等。當前，分部正籌備籌建一個綜合的文創咖啡眾創空間，希望可以進一步為台灣當地之文創愛好者提供更好的集聚地。
                          </p>
                        </Media.Body>
                      </Media>
                    </Tab.Pane>
                    <Tab.Pane eventKey='tab3'>
                      <Media>
                        <Media.Left className='pull-left'>
                          <Image
                            height={ 200 }
                            width={ 200 }
                            src='http://res.cloudinary.com/cacicloud/image/upload/v1510123794/mac_uffi20.png'
                            responsive
                          />
                        </Media.Left>
                        <Media.Body>
                          <h4>澳門</h4>
                          <p>
                            與香港一海之隔，同樣具有殖民地風情，以及多元文化匯聚，澳門分部也是藝文創薈重要的陣地。位於提督馬路上的辦公室同樣集多功能於一身，除了業務運營以外，每年集結港澳台三地文創資源，於全國各地以及海外舉辦多場大型文化節、音樂節、手工藝節，是藝文創薈重要的對外輸出窗口。
                          </p>
                        </Media.Body>
                      </Media>
                    </Tab.Pane>
                    <Tab.Pane eventKey='tab4'>
                      <Media>
                        <Media.Left className='pull-left'>
                          <Image
                            height={ 200 }
                            width={ 200 }
                            src='http://res.cloudinary.com/cacicloud/image/upload/v1510123828/bj_m5fptr.jpg'
                            responsive
                          />
                        </Media.Left>
                        <Media.Body>
                          <h4>內地</h4>
                          <p>
                            為了迎接內地近年蓬勃發展的內地市場，北京為首，藝文創薈於內地設有上海、重慶、西安、瀋陽、廣西、深圳、廣州共八處分辦事處，除負責聯絡日常業務外，每地之聯絡處同時致力於組織當地之藝文愛好群體，孵化年青團隊，為推動大中華的藝文發展貢獻力量。
                          </p>
                        </Media.Body>
                      </Media>
                    </Tab.Pane>
                    <Tab.Pane eventKey='tab5'>
                      <Media>
                        <Media.Left className='pull-left'>
                          <Image
                            height={ 200 }
                            width={ 200 }
                            src='http://res.cloudinary.com/cacicloud/image/upload/v1510123862/invite_zstvkc.jpg'
                            responsive
                          />
                        </Media.Left>
                        <Media.Body>
                          <h4>誠邀</h4>
                          <p>
                            不論是喜歡藝文的青年、環境良好的文創園區、看好文化產業的投資人、受萬千粉絲擁護的自媒體君，還是希望與良好藝文內容、創作人對接的企業、客戶，個人，藝文創薈十分歡迎大家加入藝文的大家庭，合作、諮詢請直接聯繫公司公共通訊，發訊至
                            info@caci.hk，或加 公司微信：caci-wechat
                          </p>
                        </Media.Body>
                      </Media>
                    </Tab.Pane>
                  </Tab.Content>
                </Media.Body>
              </Media>
            </Tab.Container>
          </Col>

          <Col xs={ 12 } sm={ 12 } md={ 6 }>
            <div className='testimonial'>
              <h4>關於我們</h4>

              <Media className='testimonial-inner'>
                <Media.Left className='pull-left' align='top'>
                  <Image
                    src='https://res.cloudinary.com/cacicloud/image/upload/v1523627457/mainpage/icon.png'
                    responsive
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    「藝文創薈(北京)文化傳播有限公司」，總部設於香港，同時於台北、澳門、北京設有辦事處，主要從事港台及國外文化項目內地融資、演出項目打包、演藝人才培養及轉介、活動訂制、文化項目咨詢五大範疇，致力於促進由創作人、投資人、演藝人、文化消費者四大群體所組成的兩岸文化鏈條，打造當代的中國藝術文化的品牌。
                  </p>
                </Media.Body>
              </Media>

              <Media className='testimonial-inner'>
                <Media.Left className='pull-left' align='top'>
                  <Image
                    src='http://res.cloudinary.com/cacicloud/image/upload/v1510123932/yjc_ebs3pd.jpg'
                    responsive
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    公司同時擁有自己的文化投資基金池、藝文孵化器、製作團隊、文化產品經紀團隊、演藝公司咨詢團隊、傳媒發佈平台等戰略板塊，每年度推出具亮點的核心作品。
                  </p>
                </Media.Body>
              </Media>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
