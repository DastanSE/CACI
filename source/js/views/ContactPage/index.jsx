import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Form from './Form';

const Marker = text => (
  <div>
    <i className='fa fa-map-marker' style={ { width: 15, height: 30, color: 'red' } }>
      {text}
    </i>
  </div>
);

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        {/* <div id="right-menu">
          <ul>
            <li><a href="http://caci.hk/" onclick="kk(this)">首页</a></li>
            <li><a href="http://caci.hk/yiwen-space/" onclick="kk(this)">孵化進駐</a></li>
            <li><a href="http://caci-bj.com/" onclick="kk(this)">商店藝廊</a></li>
            <li><a href="http://caci.hk/repertoire/" onclick="kk(this)">劇目採購</a></li>
            <li><a href="http://caci.hk/events/" onclick="kk(this)">活動信息</a></li>
            <li><a href="http://caci.hk/article/" onclick="kk(this)">藝文資訊</a></li>
            <li><a href="javascript:scroll(0,0)" onclick="kk(this)"> ▲ </a></li>
          </ul>
        </div> */}
        <section id='contact-info'>
          <div className='center'>
            <h2>怎麼聯繫我們?</h2>
            <p className='lead'>How to contact us?</p>
          </div>
          <div className='gmap-area'>
            <div className='container'>
              <div className='row' style={ { textAlign: 'center' } }>
                <div className=' col-md-4 map-content'>
                  <address>
                    <h5>香港地址</h5>
                    <p>銅鑼灣摩利臣山道84-86號太平洋帆船酒店 1樓</p>
                    <p>
                      Phone:(852) 3610 9194
                      <br /> Email: info@caci.hk
                    </p>
                  </address>
                  <div className='gmap' style={ { width: 250, height: 250 } }>
                    <GoogleMapReact
                      defaultCenter={ { lat: 22.27, lng: 114.18 } }
                      defaultZoom={ 12 }
                    >
                      <Marker lat={ 22.2757788 } lng={ 114.1777487 } />
                    </GoogleMapReact>
                  </div>
                </div>
                <div className=' col-md-4 map-content'>
                  <address>
                    <h5>北京地址</h5>
                    <p>海淀區四道口路2號京果商業大廈A座5層 A5015</p>
                    <p>
                      Phone: (86) 010-53567027
                      <br /> Email: info@caci.hk
                    </p>
                  </address>
                  <div className='gmap' style={ { width: 250, height: 250 } }>
                    <GoogleMapReact
                      defaultCenter={ { lat: 39.9605515, lng: 116.3429829 } }
                      defaultZoom={ 12 }
                    >
                      <Marker lat={ 39.9605515 } lng={ 116.3429829 } />
                    </GoogleMapReact>
                  </div>
                </div>

                <div className=' col-md-4 map-content'>
                  <address>
                    <h5>澳門地址</h5>
                    <p>提督馬路華隆工業大廈8樓</p>
                    <p>
                      Phone:(853) 2895-1000
                      <br /> Email: info@caci.hk
                    </p>
                  </address>
                  <div className='gmap' style={ { width: 250, height: 250 } }>
                    <GoogleMapReact
                      defaultCenter={ { lat: 22.2061564, lng: 113.542505 } }
                      defaultZoom={ 15 }
                    >
                      <Marker lat={ 22.2061564 } lng={ 113.542505 } />
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='contact-page'>
          <div className='container'>
            <div className='center'>
              <h2>您的信息</h2>
              <p className='lead'>我們需要您的建議</p>
            </div>
            <Form />
          </div>
        </section>
      </div>
    );
  }
}
