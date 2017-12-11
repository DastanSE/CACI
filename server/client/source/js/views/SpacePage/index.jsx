import React, { Component } from 'react';
import { ResourceSection } from './ResourceSection';
import { Project } from './Project';
import { Group } from './Group';
import { Process } from './Process';
import { Partners } from './Partners';
import { ContactInfo } from '../../components/Global/ContactInfo';


export default class SpacePage extends Component {
  render() {
    return (
      <div>
        <div className='ywspacetop'>
          <div className='center space-txt'>
            <h1>場地扶持計劃</h1>
          </div>
        </div>
        <Project />
        <Group />
        <Process />
        <Partners />
        <ResourceSection />
        <ContactInfo
          contacts={ `
            <h2>想要聯繫我們？</h2>
            <p>
              連絡人：林先生 (010-5356 7027)
              <br />微信號：藝文君 （caci-wechat)
              <br />查詢電郵：<a href="mailto:ywchwx@126.com?Subject=Hello%20again" target="_top">ywchwx@126.com</a>
              <br />辦公地址：海澱區四道口路2號京果商廈A座5015藝聚場 （北京）
            </p>
          ` }
        />
      </div>
    );
  }
}
