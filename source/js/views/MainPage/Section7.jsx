import React, { Component } from 'react';

export default class Section7 extends Component {
  render() {
    return (
      <div className='Section7'>
        <section id="content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 wow fadeInDown">
                <div className="tab-wrap">
                  <div className="media">
                    <div className="parrent pull-left">
                      <ul className="nav nav-tabs nav-stacked">
                        <li className="active"><a href="#tab1" data-toggle="tab" className="analistic-01">香港</a></li>
                        <li className=""><a href="#tab2" data-toggle="tab" className="analistic-02">台北</a></li>
                        <li className=""><a href="#tab3" data-toggle="tab" className="tehnical">澳門</a></li>
                        <li className=""><a href="#tab4" data-toggle="tab" className="tehnical">內地</a></li>
                        <li className=""><a href="#tab5" data-toggle="tab" className="tehnical">誠邀</a></li>
                      </ul>
                    </div>
                    <div className="parrent media-body">
                      <div className="tab-content">
                        <div className="tab-pane fade active in" id="tab1">
                          <div className="media">
                            <div className="pull-left">
                              <img className="img-responsive" src="../../assets/img/hk.jpg"></img>
                            </div>
                            <div className="media-body">
                              <h4 >香港</h4>
                              <p>藝文創薈總部設於香港，辦事處位於香港銅鑼灣摩理臣山道84-86號1樓，除了業務營運以外，香港總部作為藝文創薈最先發起的區塊，同時扮演著兩岸四地不同辦事處之間的聯繫樞紐角色，也是兩岸藝文創作者、愛好者進行交流的大本營，每年也會舉辦包括：小舞台藝術節、兩岸青年藝文夏令營、文化實習營、創思論壇、藝術挑戰賽等不同類型的公益活動。</p>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab2">
                          <div className="media">
                            <div className="pull-left">
                              <img className="img-responsive" src="../../assets/img/tw.jpg"></img>
                            </div>
                            <div className="media-body">
                              <h4>台北</h4>
                              <p>台北分部為藝文創薈第二大辦事處，除了業務運營以外，台北分部還主要推廣台灣較為突出的初創團隊為主，包括：文創、設計、原生態音樂、即興戲劇、網絡運營及推廣等。當前，分部正籌備籌建一個綜合的文創咖啡眾創空間，希望可以進一步為台灣當地之文創愛好者提供更好的集聚地。
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab3">
                          <div className="media">
                            <div className="pull-left">
                              <img className="img-responsive" src="../../assets/img/mac.png"></img>
                            </div>
                            <div className="media-body">
                              <h4>澳門</h4>
                              <p>與香港一海之隔，同樣具有殖民地風情，以及多元文化匯聚，澳門分部也是藝文創薈重要的陣地。位於提督馬路上的辦公室同樣集多功能於一身，除了業務運營以外，每年集結港澳台三地文創資源，於全國各地以及海外舉辦多場大型文化節、音樂節、手工藝節，是藝文創薈重要的對外輸出窗口。</p>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab4">
                          <div className="media">
                            <div className="pull-left">
                              <img className="img-responsive" src="../../assets/img/bj.jpg"></img>
                            </div>
                            <div className="media-body">
                              <h4>內地</h4>
                              <p>為了迎接內地近年蓬勃發展的內地市場，北京為首，藝文創薈於內地設有上海、重慶、西安、瀋陽、廣西、深圳、廣州共八處分辦事處，除負責聯絡日常業務外，每地之聯絡處同時致力於組織當地之藝文愛好群體，孵化年青團隊，為推動大中華的藝文發展貢獻力量。</p>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab5">
                          <div className="media">
                            <div className="pull-left">
                              <img className="img-responsive" src="../../assets/img/invite.jpg"></img>
                            </div>
                            <div className="media-body">
                              <h4>誠邀</h4>
                              <p>不論是喜歡藝文的青年、環境良好的文創園區、看好文化產業的投資人、受萬千粉絲擁護的自媒體君，還是希望與良好藝文內容、創作人對接的企業、客戶，個人，藝文創薈十分歡迎大家加入藝文的大家庭，合作、諮詢請直接聯繫公司公共通訊，發訊至 info@caci.hk，或加 公司微信：caci-wechat</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-xs-12 col-sm-4 wow fadeInDown">
                <div className="testimonial">
                  <h4>關於我們</h4>
                  <div className="media testimonial-inner">
                    <div className="pull-left">
                      <img className="img-responsive img-circle" src="../../assets/img/icon.png"></img>
                    </div>
                    <div className="media-body">
                      <p>「藝文創薈(北京)文化傳播有限公司」，總部設於香港，同時於台北、澳門、北京設有辦事處，主要從事港台及國外文化項目內地融資、演出項目打包、演藝人才培養及轉介、活動訂制、文化項目咨詢五大範疇，致力於促進由創作人、投資人、演藝人、文化消費者四大群體所組成的兩岸文化鏈條，打造當代的中國藝術文化的品牌。</p>
                    </div>
                  </div>
                  <div className="media testimonial-inner">
                    <div className="pull-left">
                      <img className="img-responsive img-circle" src="../../assets/img/yjc.jpg"></img>
                    </div>
                    <div className="media-body">
                      <p>公司同時擁有自己的文化投資基金池、藝文孵化器、製作團隊、文化產品經紀團隊、演藝公司咨詢團隊、傳媒發佈平台等戰略板塊，每年度推出具亮點的核心作品。</p>
                    </div>
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