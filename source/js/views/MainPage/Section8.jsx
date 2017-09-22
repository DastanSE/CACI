import React, { Component } from 'react';

export default class Section8 extends Component {
  render() {
    return (
      <div className='Section8'>
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
      </div>
    );
  }
}
