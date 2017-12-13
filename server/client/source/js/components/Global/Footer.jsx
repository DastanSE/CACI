import React from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export const Footer = () => {
  return (
    <div className='Footer'>
      <section id='bottom'>
        <div className='container wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='600ms'>
          <Row>
            <Col xs={ 6 } sm={ 3 } md={ 3 }>
              <div className='widget'>
                <h3>公司概況</h3>
                <ul>
                  <li>
                    <Link to={ routeCodes.ABOUT }>關於我們</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.NEWSPAGE }>媒體報導</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.JOBSPAGE }>加入我們</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.CONTACT }>聯繫我們</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={ 6 } sm={ 3 } md={ 3 }>
              <div className='widget'>
                <h3>社區共享</h3>
                <ul>
                  <li>
                    <Link to={ routeCodes.CROWDFUND }>眾籌</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.ARTICLE }>文章</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.TEAMPAGE }>團隊</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Clearfix visibleXsBlock />
            <Col xs={ 6 } sm={ 3 } md={ 3 }>
              <div className='widget'>
                <h3>合作咨詢</h3>
                <ul>
                  <li>
                    <Link to={ routeCodes.CONTACT }>活動訂制</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.CONTACT }>場地租賃</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.CONTACT }>項目咨詢</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.CONTACT }>贊助支持</Link>
                  </li>
                  <li>
                    <Link to={ routeCodes.CONTACT }>其他咨詢</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={ 6 } sm={ 3 } md={ 3 }>
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
                    <a
                      href='https://www.facebook.com/dragondnascentre/?ref=br_rs'
                    >
                      龍騰舞蹈藝術中心
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://goo.gl/VGSyFm
'
                    >港澳非物質文化遺產發展研究會</a>
                  </li>
                  <li>
                    <a
                      href='http://www.zgysyjy.org.cn/116/116_1.html
'
                    >中國藝術研究院戲曲研究所</a>
                  </li>
                  <li>
                    <a href='http://www.zgxqbyxh.com/'>中国戏曲表演学会</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <footer className='footer'>
        <p>© CACI – 藝文創薈文化傳播有限公司 2017</p>
      </footer>
    </div>
  );
};
