import React from 'react';
import { Link } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export const Footer = () => {
  return (
    <div className='Footer'>
      <section id='bottom'>
        <div className='container wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='600ms'>
          <div className='row'>
            <div className='col-md-3 col-sm-3 col-xs-6'>
              <div className='widget'>
                <h3>公司概況</h3>
                <ul>
                  <li>
                    <Link to={ routeCodes.ABOUT }>關於我們</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.NEWSPAGE }>
                      媒體報導
                    </Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.JOBSPAGE }>
                      加入我們
                    </Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.CONTACT }>聯繫我們</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-3 col-sm-3 col-xs-6'>
              <div className='widget'>
                <h3>社區共享</h3>
                <ul>
                  <li>
                    <a href=''>眾籌</a>
                  </li>
                  <li>
                    <a href=''>文章</a>
                  </li>
                  <li>
                    <a href=''>團隊</a>
                  </li>
                  <li>
                    <a href=''>商店</a>
                  </li>
                  <li>
                    <a href=''>其他</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-3 col-sm-3 col-xs-6'>
              <div className='widget'>
                <h3>合作咨詢</h3>
                <ul>
                  <li>
                    <a href=''>活動訂制</a>
                  </li>
                  <li>
                    <a href=''>場地租賃</a>
                  </li>
                  <li>
                    <a href=''>項目咨詢</a>
                  </li>
                  <li>
                    <a href=''>贊助支持</a>
                  </li>
                  <li>
                    <a href=''>其他咨詢</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-3 col-sm-3 col-xs-6'>
              <div className='widget'>
                <h3>友好單位</h3>
                <ul>
                  <li>
                    <a href='http://yiwen-iei.com/'>藝文國際教育</a>
                  </li>
                  <li>
                    <a href='http://cbsa.asia/'>中華商略聯合會</a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/dragondnascentre/?ref=br_rs
'>龍騰舞蹈藝術中心</a>
                  </li>
                  <li>
                    <a href='https://goo.gl/VGSyFm
'>Active Production
港澳非物質文化遺產發展研究會</a>
                  </li>
                  <li>
                    <a href='http://www.zgysyjy.org.cn/116/116_1.html
'>中國藝術研究院戲曲研究所</a>
                  </li>
                  <li>
                    <a href='http://www.zgxqbyxh.com/'>中国戏曲表演学会</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <p>© CACI – 藝文創薈文化傳播有限公司 2017</p>
      </footer>
    </div>
  );
};
