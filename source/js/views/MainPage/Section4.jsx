import React, { Component } from "react";

export default class Section4 extends Component {
  render() {
    return (
      <div className="Section4">
        <section id="services" className="service-item">
          <div className="container">
            <div className="center wow fadeInDown animated">
              <h2>我們的服務</h2>
              <p className="lead">Our services</p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="media services-wrap wow fadeInDown animated">
                  <div className="pull-left">
                    <img
                      className="img-responsive"
                      src="../../assets/img/services/services1.png"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">文化項目融資</h3>
                    <p>為來自港澳台及國內外的文化、創業項目進行投資對接，以及法律保障，項目監管等</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="media services-wrap wow fadeInDown animated">
                  <div className="pull-left">
                    <img
                      className="img-responsive"
                      src="../../assets/img/services/services2.png"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">演出項目經理</h3>
                    <p>針對有意赴國內巡演之項目，和有意進入內地市場演出的項目提供嫁接運營和落地服務</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="media services-wrap wow fadeInDown animated">
                  <div className="pull-left">
                    <img
                      className="img-responsive"
                      src="../../assets/img/services/services3.png"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">活動訂制服務</h3>
                    <p>根據客戶的需要，訂制不同類型的大型活動，包括文化節、晚會、演唱會等</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="media services-wrap wow fadeInDown animated">
                  <div className="pull-left">
                    <img
                      className="img-responsive"
                      src="../../assets/img/services/services4.png"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">人才轉介</h3>
                    <p>針對有潛力的年青藝人或工作室，開辦不同的課程，提供各種實踐機會，同時協助相關人員的升學、進修、就業</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="media services-wrap wow fadeInDown animated">
                  <div className="pull-left">
                    <img
                      className="img-responsive"
                      src="../../assets/img/services/services5.png"
                    />
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
      </div>
    );
  }
}
