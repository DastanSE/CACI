import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <section className="home-slider main-slider">
          <div id="carousel-home" className="no-margin carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-home" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-home" data-slide-to="1"></li>
              <li data-target="#carousel-home" data-slide-to="2"></li>
              <li data-target="#carousel-home" data-slide-to="3"></li>
              <li data-target="#carousel-home" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active" >
                <div className="container">
                  <div className="row slide-margin">
                    <div className="col-sm-6">
                      <div className="carousel-content">
                        <h1 className="animation animated-item-1">我們是藝文創薈</h1>
                        <h4 className="animation animated-item-2">一群來自兩岸，熱愛藝術、科創的青年…</h4>
                        <a className="btn-slide animation animated-item-3" href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item" >
                <div className="container">
                  <div className="row slide-margin">
                    <div className="col-sm-6">
                      <div className="carousel-content">
                        <h1 className="animation animated-item-1"></h1>
                        <h4 className="animation animated-item-2">

                        </h4>
                        <a className="btn-slide animation animated-item-3" href="<?php the_permalink(); ?>">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="prev hidden-xs" href="#carousel-home" data-slide="prev">
              <i className="fa fa-chevron-left"></i>
            </a>
            <a className="next hidden-xs" href="#carousel-home" data-slide="next">
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>

        </section>

        <section id="feature">
          <div className="container">
            <div className="center wow fadeInDown">
              <h2>我們的特點</h2>
              <p className="lead">Our Features</p>
              <p className="lead">藝文創薈由一群來自兩岸，熱愛藝術、科創的青年發起，自成立之初即希望透過各項不同類型的活動積極推廣現當代藝文創作、科技創新的最新發展，推動藝術、文化、創意融於生活，同時通過對傳統文化的研習、傳承、發展，為現當代藝術提供吸養，遂步促進兩岸之間的藝文、科創交流和跨領域的對話，匯聚各界專才，建立交流平台，鼓勵本地藝文創作、科技創新。
                <br /> 同時促進各地文化、科創界別對外交流，為各地多元文化發展、文化藝術創作、科技創新培養有為人才。</p>
            </div>
            <div className="row">
              <div className="features">
                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-bullhorn"></i>
                    <h3>熱愛藝術與科創</h3>
                    <h4>Keen on art and science</h4>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-comments"></i>
                    <h3>推廣創作與創新</h3>
                    <h4>Promote creation and innovation</h4>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-cloud-download"></i>
                    <h3>研習、傳承和發展傳統文化</h3>
                    <h4>Research, inherit and develop traditional culture</h4>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-leaf"></i>
                    <h3>促進兩岸文化交流</h3>
                    <h4>Enhance cross-straits cutural exchange</h4>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-cogs"></i>
                    <h3>提供創作平台</h3>
                    <h4>Provide platform for you</h4>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-heart"></i>
                    <h3>培養藝術有為人才</h3>
                    <h4>Cultivate new talents</h4>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        <section id="recent-works">
          <div className="container">
            <div className="center wow fadeInDown">
              <h2>近期活動</h2>
              <p className="lead">Recent Activities</p>
            </div>
            <div className="row">

          <div className="col-xs-12 col-sm-4 col-md-3 huodongbox">
            <div className="recent-work-wrap">
              <img className="img-responsive" src="" alt=""></img>
              <div className="overlay">
                <div className="recent-work-inner">


                </div>
              </div>
            </div>
          </div>
          </div>

          </div>
        </section>
        <section id="services" className="service-item">
          <div className="container">
            <div className="center wow fadeInDown">
              <h2>我們的服務</h2>
              <p className="lead">Our services</p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="media services-wrap wow fadeInDown">
                  <div className="pull-left">
                    <img className="img-responsive" src="/images/services/services1.png"></img>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">文化項目融資</h3>
                    <p>為來自港澳台及國內外的文化、創業項目進行投資對接，以及法律保障，項目監管等</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="media services-wrap wow fadeInDown">
                  <div className="pull-left">
                    <img className="img-responsive" src="/images/services/services2.png"></img>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">演出項目經理</h3>
                    <p>針對有意赴國內巡演之項目，和有意進入內地市場演出的項目提供嫁接運營和落地服務</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="media services-wrap wow fadeInDown">
                  <div className="pull-left">
                    <img className="img-responsive" src="/images/services/services3.png"></img>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">活動訂制服務</h3>
                    <p>根據客戶的需要，訂制不同類型的大型活動，包括文化節、晚會、演唱會等</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="media services-wrap wow fadeInDown">
                  <div className="pull-left">
                    <img className="img-responsive" src="/images/services/services4.png"></img>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">人才轉介</h3>
                    <p>針對有潛力的年青藝人或工作室，開辦不同的課程，提供各種實踐機會，同時協助相關人員的升學、進修、就業</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="media services-wrap wow fadeInDown">
                  <div className="pull-left">
                    <img className="img-responsive" src="/images/services/services5.png"></img>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">文化項目咨詢</h3>
                    <p>為初創的青年藝文工作室、演藝單位等提供業務咨詢和運營扶持，促進其業務發展</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section id="middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 wow fadeInDown">
                <div className="skill">
                  <h2>我們的成果</h2>
                  <p >成立以來，藝文創薈致力於成立文化團體，推動文化發展，取得了滿意的成果，未來必將繼續努力，誠邀您的加入。</p>
                  <div className="progress-wrap">
                    <h4>團隊孵化率</h4>
                    <div className="progress">
                      <div className="progress-bar  color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                        <span className="bar-width">85%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrap">
                    <h4>眾籌成功率</h4>
                    <div className="progress">
                      <div className="progress-bar color2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                        <span className="bar-width">55%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrap">
                    <h4>活動發起率</h4>
                    <div className="progress">
                      <div className="progress-bar color3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                        <span className="bar-width">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrap">
                    <h4>合作誠意度</h4>
                    <div className="progress">
                      <div className="progress-bar color4" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
                        <span className="bar-width">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 wow fadeInDown">
                <div className="accordion">
                  <h2>媒體報導</h2>
                  <div className="panel-group" id="accordion1">

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <p className="panel-title">
                          <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#post-<?php echo $post->ID ?>">

                            <i className="fa fa-angle-right pull-right"></i>
                          </a>
                        </p>
                      </div>
                      <div id="post-<?php echo $post->ID ?>" className="panel-collapse collapse">
                        <div className="panel-body">
                          <div className="media accordion-inner">
                            <div className="pull-left">
                              <img className="img-responsive" src=""></img>
                            </div>
                            <div className="media-body">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">

                            <a className="accordion-toggle" href="http://caci.hk/news">
                             更多關於我們的新聞  <i className="fa fa-smile-o"></i>
                              <i className="fa fa-angle-right pull-right"></i>
                            </a>
                          </h3>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </section>

        <section id="partner">
          <div className="container">
            <div className="center wow fadeInDown">
              <h2>進駐單位</h2>
              <p className="lead">Our Partners</p>
            </div>
            <div className="row">
              <a className="col-sm-2 col-md-offset-1" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/cj.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/macao.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/active.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/mahu.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/fu.png"></img></a>
            </div>
            <div className="row"><a className="col-sm-2 col-sm-offset-1" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/wow.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/beauty.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/muyi.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/shangyi.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/zhitu.png"></img></a>

            <div className="row"><a className="col-sm-2 col-sm-offset-1" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/yuemu.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/cycber.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/shiwei.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/atls.png"></img></a>
              <a className="col-sm-2" href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="/images/partners/vf.png"></img></a></div>
          </div>
        </div>

        </section>

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
                              <img className="img-responsive" src="/images/hk.jpg"></img>
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
                              <img className="img-responsive" src="/images/tw.jpg"></img>
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
                              <img className="img-responsive" src="/images/mac.png"></img>
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
                              <img className="img-responsive" src="/images/bj.jpg"></img>
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
                              <img className="img-responsive" src="/images/invite.jpg"></img>
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
                      <img className="img-responsive img-circle" src="/images/icon.png"></img>
                    </div>
                    <div className="media-body">
                      <p>「藝文創薈(北京)文化傳播有限公司」，總部設於香港，同時於台北、澳門、北京設有辦事處，主要從事港台及國外文化項目內地融資、演出項目打包、演藝人才培養及轉介、活動訂制、文化項目咨詢五大範疇，致力於促進由創作人、投資人、演藝人、文化消費者四大群體所組成的兩岸文化鏈條，打造當代的中國藝術文化的品牌。</p>
                    </div>
                  </div>
                  <div className="media testimonial-inner">
                    <div className="pull-left">
                      <img className="img-responsive img-circle" src="/images/yjc.jpg"></img>
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

        <div className="news" id="lianmeng">
          <div className="container">
            <div className="skill-wrap clearfix" >
              <div className="center wow fadeInDown">
                <h2 >藝術聯盟</h2>
                <p className="lead" >Art Alliance</p>
              </div>
            </div>
            <div className="row lianmeng">
              <div className="col-sm-3 col-xs-6 lm">
                <a href="http://caci.hk/dance">舞蹈</a>
              </div>
              <div className="col-sm-3 col-xs-6 lm">
                <a href="#">音樂</a>
              </div>
              <div className="col-sm-3 col-xs-6 lm">
                <a href="#">美術</a>
              </div>
              <div className="col-sm-3 col-xs-6 lm">
                <a href="#">建築</a>
              </div>
              <div className="col-sm-3 col-xs-6 lm">
                <a href="#">戲劇</a>
              </div>
              <div className="col-sm-3 col-xs-6 lm">
                <a href="#">文學</a>
              </div>
              <div className="col-sm-3 col-xs-6 lm">
                <a href="#">電影</a>
              </div>
              <div className="col-sm-3 col-xs-6 lm">
                <a href="#">體育</a>
              </div>
            </div>
          </div>
        </div>




        <section id="m-changdi" className="">
          <div className="container">
            <div className="center wow fadeInDown">
              <h2>场地租赁</h2>
              <p className="lead">Venue Rental</p>
            </div>
            <div className="row">

              <div className="col-sm-3 col-xs-6 ">
                 <img className="img-responsive img-circle" src="/imglili/1.jpg" ></img>
              </div>
               <div className="col-sm-3 col-xs-6 ">
                 <img className="img-responsive img-circle" src="/imglili/3.jpg"></img>
              </div>
               <div className="col-sm-3 col-xs-6 ">
                 <img className="img-responsive img-circle" src="/imglili/2.jpg"></img>
              </div>
               <div className="col-sm-3 col-xs-6 ">
                 <img className="img-responsive img-circle" src="/imglili/4.jpg"></img>
              </div>

           </div>


          </div>

        </section>

        <section id="conatcat-info">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <div className="media contact-info wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="pull-left">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="media-body">
                    <h2>想要聯繫我們？</h2>
                    <p> (香港) 銅鑼灣摩理臣山道84-86號 1樓 | (852) 3610 9194 | info@caci.hk
                      <br /> (澳門) 提督馬路華隆工業大廈8樓 | (853) 2895-1000 | info.mac@caci.hk
                      <br /> (北京) 海淀區四道口路2號京果商業大廈A座5層 A5015 | (86) 010-53567027 | info.bj@caci.hk
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
