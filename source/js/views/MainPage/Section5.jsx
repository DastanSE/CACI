import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class Section5 extends Component {
  render() {
    return (
      <div className='Section5'>
        <section id="middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 wow fadeInDown">
                <div className="skill">
                  <h2>我們的成果</h2>
                  <p >成立以來，藝文創薈致力於成立文化團體，推動文化發展，取得了滿意的成果，未來必將繼續努力，誠邀您的加入。</p>
                  <div className="progress-wrap">
                    <h4>團隊孵化率</h4>

                    <div>
                      <ProgressBar bsStyle="success" now={40} />
                      <ProgressBar bsStyle="info" now={20} />
                      <ProgressBar bsStyle="warning" now={60} />
                      <ProgressBar bsStyle="danger" now={80} />
                    </div>



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
      </div>
    );
  }
}
