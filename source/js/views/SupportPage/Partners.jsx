import React from 'react';
import { Row, Col, Image, Thumbnail } from 'react-bootstrap';
import { PartnerCard } from './PartnerCard';

export const Partners = props => {
  return (
    <div>
      <section className='suptxt'>
        <Col>
          <div className='center'>
            <h1 className='center'>合作機構</h1>
            <br />
          </div>
          <Row className='sup-border'>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/梅氏传媒.jpg'
                partnerCompanyName='梅氏传媒'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/戏曲学会.jpg'
                partnerCompanyName='中國戲曲表演學會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/罗兰.jpg'
                partnerCompanyName='羅蘭數位音樂教育'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/macao.jpg'
                partnerCompanyName='澳門國際青年藝術創作人協會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/红韵.jpg'
                partnerCompanyName='紅韻教育集團'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/中国学生文化与艺术联合会.jpg'
                partnerCompanyName='中國學生文化與藝術聯合會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/落网.jpg'
                partnerCompanyName='落網獨立音樂網'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/弘德龙狮团.jpg'
                partnerCompanyName='香港弘德龍獅體育會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/active.jpg'
                partnerCompanyName='ACTIVE'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/hkyouth.jpg'
                partnerCompanyName='香港青年創業軍'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/澳门推广协会.jpg'
                partnerCompanyName='澳門文化遺產推廣協會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='../../assets/img/partners/support/zj.jpg'
                partnerCompanyName='中加國際留學移民諮詢服務中心'
              />
            </Col>
          </Row>
        </Col>
      </section>
      <section className='suptxt'>
        <div className='center'>
          <h1 className='center'>贊助單位</h1>
          <br />
        </div>
        <Row className='sup-border'>
          <Col xsOffset={ 0 } xs={ 6 } smOffset={ 1 }  sm={ 3 } mdOffset={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/国际教育互动.jpg'
              partnerCompanyName='國際教育互動集團'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/中國商略聯合會.jpg'
              partnerCompanyName='中國商略聯合會'
            />
          </Col>
          <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/vela.jpg'
              partnerCompanyName='香港太平洋帆船酒店'
            />
          </Col>
        </Row>
      </section>

      <section className='suptxt'>
        <div className='center'>
          <h1 className='center'>友好機構</h1>
          <br />
        </div>
        <Row className='sup-border'>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/香港浸会大学.jpg'
              partnerCompanyName='香港浸会大学'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/北师大.jpg'
              partnerCompanyName='北京師範大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/中戏.jpg'
              partnerCompanyName='中國戲曲學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/中传.jpg'
              partnerCompanyName='中國傳媒大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/北舞.jpg'
              partnerCompanyName='北京舞蹈學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/中央民族.jpg'
              partnerCompanyName='中央民族大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/北体.jpg'
              partnerCompanyName='北京體育大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/香港理工大学.jpg'
              partnerCompanyName='香港理工大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/北大歌剧.jpg'
              partnerCompanyName='北京大學歌劇研究學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/人大艺术学院.jpg'
              partnerCompanyName='中國人民大學藝術學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/香港城市大学.jpg'
              partnerCompanyName='香港城市大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/中央戏剧.jpg'
              partnerCompanyName='中央戲劇學院'
            />
          </Col>
          <Col xs={ 6 } smOffset={ 0 } sm={ 3 } mdOffset={ 2 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/山东艺术.jpg'
              partnerCompanyName='山東藝術學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/央美.jpg'
              partnerCompanyName='中央美術學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/香港中文大学.jpg'
              partnerCompanyName='香港中文大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='../../assets/img/partners/support/中国艺术研究院.jpg'
              partnerCompanyName='中國藝術研究院'
            />
          </Col>
        </Row>
      </section>
    </div>
  );
};
