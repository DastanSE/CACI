import React, { Component } from 'react';

export default class Section3 extends Component {
  render() {
    return (
      <div className='Section3'>
        <section id="recent-works">
          <div className="container">
            <div className="center wow fadeInDown animated">
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
      </div>
    );
  }
}
