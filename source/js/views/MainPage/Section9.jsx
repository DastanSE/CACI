import React, { Component } from 'react';

export default class Section9 extends Component {
  render() {
    return (
      <div className='Section9'>
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
      </div>
    );
  }
}
