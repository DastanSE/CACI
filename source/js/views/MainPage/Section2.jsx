import React, { Component } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';

export default class Section2 extends Component {
  render() {
    return (
      <div className='Section2'>
        <section id='feature'>
          <div className='container'>
            {/* <ScrollAnimation animateIn='fadeIn'> */}
            <div className='center wow'>
              <h2>我們的特點</h2>
              <p className='lead'>Our Features</p>
              <p className='lead'>
                藝文創薈由一群來自兩岸，熱愛藝術、科創的青年發起，自成立之初即希望透過各項不同類型的活動積極推廣現當代藝文創作、科技創新的最新發展，推動藝術、文化、創意融於生活，同時通過對傳統文化的研習、傳承、發展，為現當代藝術提供吸養，遂步促進兩岸之間的藝文、科創交流和跨領域的對話，匯聚各界專才，建立交流平台，鼓勵本地藝文創作、科技創新。
                <br /> 同時促進各地文化、科創界別對外交流，為各地多元文化發展、文化藝術創作、科技創新培養有為人才。
              </p>
            </div>
            {/* </ScrollAnimation> */}

            <div className='features'>
              <div className='row'>
                {/* <ScrollAnimation animateIn='fadeIn'></ScrollAnimation> */}
                <div
                  className='col-md-4 col-sm-6 wow fadeInDown animated'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='feature-wrap'>
                    <i className='fa fa-bullhorn' />
                    <h3>熱愛藝術與科創</h3>
                    <h4>Keen on art and science</h4>
                  </div>
                </div>
                {/* <ScrollAnimation animateIn='fadeIn'></ScrollAnimation> */}
                <div
                  className='col-md-4 col-sm-6 wow fadeInDown animated'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='feature-wrap'>
                    <i className='fa fa-comments' />
                    <h3>推廣創作與創新</h3>
                    <h4>Promote creation and innovation</h4>
                  </div>
                </div>
                {/* <ScrollAnimation animateIn='fadeIn'></ScrollAnimation> */}
                <div
                  className='col-md-4 col-sm-6 wow fadeInDown animated'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='feature-wrap'>
                    <i className='fa fa-cloud-download' />
                    <h3>研習、傳承和發展傳統文化</h3>
                    <h4>Research, inherit and develop traditional culture</h4>
                  </div>
                </div>
                {/* <ScrollAnimation animateIn='fadeIn'></ScrollAnimation> */}
                <div
                  className='col-md-4 col-sm-6 wow fadeInDown animated'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='feature-wrap'>
                    <i className='fa fa-leaf' />
                    <h3>促進兩岸文化交流</h3>
                    <h4>Enhance cross-straits cutural exchange</h4>
                  </div>
                </div>
                {/* <ScrollAnimation animateIn='fadeIn'></ScrollAnimation> */}
                <div
                  className='col-md-4 col-sm-6 wow fadeInDown animated'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='feature-wrap'>
                    <i className='fa fa-cogs' />
                    <h3>提供創作平台</h3>
                    <h4>Provide platform for you</h4>
                  </div>
                </div>
                {/* <ScrollAnimation animateIn='fadeIn'></ScrollAnimation> */}
                <div
                  className='col-md-4 col-sm-6 wow fadeInDown animated'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='feature-wrap'>
                    <i className='fa fa-heart' />
                    <h3>培養藝術有為人才</h3>
                    <h4>Cultivate new talents</h4>
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
