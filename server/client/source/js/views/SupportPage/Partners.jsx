import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PartnerCard } from './PartnerCard';

export const Partners = () => {
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
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129141/partners/support/%E6%A2%85%E6%B0%8F%E4%BC%A0%E5%AA%92_axapfe.jpg'
                partnerCompanyName='梅氏传媒'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129140/partners/support/%E6%88%8F%E6%9B%B2%E5%AD%A6%E4%BC%9A_ajb3pc.jpg'
                partnerCompanyName='中國戲曲表演學會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129141/partners/support/%E7%BD%97%E5%85%B0_walqom.jpg'
                partnerCompanyName='羅蘭數位音樂教育'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129133/partners/support/macao_cs62tr.jpg'
                partnerCompanyName='澳門國際青年藝術創作人協會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129141/partners/support/%E7%BA%A2%E9%9F%B5_bohlia.jpg'
                partnerCompanyName='紅韻教育集團'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129134/partners/support/%E4%B8%AD%E5%9B%BD%E5%AD%A6%E7%94%9F%E6%96%87%E5%8C%96%E4%B8%8E%E8%89%BA%E6%9C%AF%E8%81%94%E5%90%88%E4%BC%9A_slwg7l.png'
                partnerCompanyName='中國學生文化與藝術聯合會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129141/partners/support/%E8%90%BD%E7%BD%91_smrfhz.jpg'
                partnerCompanyName='落網獨立音樂網'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129140/partners/support/%E5%BC%98%E5%BE%B7%E9%BE%99%E7%8B%AE%E5%9B%A2_vpcpba.jpg'
                partnerCompanyName='香港弘德龍獅體育會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129133/partners/support/active_kgnjbc.jpg'
                partnerCompanyName='ACTIVE'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129133/partners/support/hkyouth_ztkusz.jpg'
                partnerCompanyName='香港青年創業軍'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129140/partners/support/%E6%BE%B3%E9%97%A8%E6%8E%A8%E5%B9%BF%E5%8D%8F%E4%BC%9A_vagvfk.jpg'
                partnerCompanyName='澳門文化遺產推廣協會'
              />
            </Col>
            <Col xs={ 6 } sm={ 3 } md={ 2 }>
              <PartnerCard
                partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129133/partners/support/zj_jl9eju.jpg'
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
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129138/partners/support/%E5%9B%BD%E9%99%85%E6%95%99%E8%82%B2%E4%BA%92%E5%8A%A8_ve5dyt.jpg'
              partnerCompanyName='國際教育互動集團'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129134/partners/support/%E4%B8%AD%E5%9C%8B%E5%95%86%E7%95%A5%E8%81%AF%E5%90%88%E6%9C%83_lustkn.jpg'
              partnerCompanyName='中國商略聯合會'
            />
          </Col>
          <Col xsOffset={ 3 } xs={ 6 } smOffset={ 0 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129133/partners/support/vela_kmyeg4.jpg'
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
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129142/partners/support/%E9%A6%99%E6%B8%AF%E6%B5%B8%E4%BC%9A%E5%A4%A7%E5%AD%A6_vjbwhv.jpg'
              partnerCompanyName='香港浸会大学'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129139/partners/support/%E5%8C%97%E5%B8%88%E5%A4%A7_t45spi.jpg'
              partnerCompanyName='北京師範大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129135/partners/support/%E4%B8%AD%E6%88%8F_fej5k2.jpg'
              partnerCompanyName='中國戲曲學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129134/partners/support/%E4%B8%AD%E4%BC%A0_hnaesg.jpg'
              partnerCompanyName='中國傳媒大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129138/partners/support/%E5%8C%97%E8%88%9E_mk0i3j.jpg'
              partnerCompanyName='北京舞蹈學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129134/partners/support/%E4%B8%AD%E5%A4%AE%E6%B0%91%E6%97%8F_j3niwd.jpg'
              partnerCompanyName='中央民族大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129144/partners/support/%E5%8C%97%E4%BD%93_s2aavj.jpg'
              partnerCompanyName='北京體育大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129143/partners/support/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6_bk5ilv.png'
              partnerCompanyName='香港理工大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129139/partners/support/%E5%8C%97%E5%A4%A7%E6%AD%8C%E5%89%A7_jteqof.jpg'
              partnerCompanyName='北京大學歌劇研究學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129137/partners/support/%E4%BA%BA%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%AD%A6%E9%99%A2_gyn3g6.jpg'
              partnerCompanyName='中國人民大學藝術學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129142/partners/support/%E9%A6%99%E6%B8%AF%E5%9F%8E%E5%B8%82%E5%A4%A7%E5%AD%A6_s0cgxa.jpg'
              partnerCompanyName='香港城市大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129137/partners/support/%E4%B8%AD%E5%A4%AE%E6%88%8F%E5%89%A7_smnfhj.jpg'
              partnerCompanyName='中央戲劇學院'
            />
          </Col>
          <Col xs={ 6 } smOffset={ 0 } sm={ 3 } mdOffset={ 2 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129142/partners/support/%E5%B1%B1%E4%B8%9C%E8%89%BA%E6%9C%AF_hznpjs.jpg'
              partnerCompanyName='山東藝術學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129139/partners/support/%E5%A4%AE%E7%BE%8E_gcvis6.jpg'
              partnerCompanyName='中央美術學院'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129145/partners/support/%E9%A6%99%E6%B8%AF%E4%B8%AD%E6%96%87%E5%A4%A7%E5%AD%A6_hetusw.jpg'
              partnerCompanyName='香港中文大學'
            />
          </Col>
          <Col xs={ 6 } sm={ 3 } md={ 2 }>
            <PartnerCard
              partnerCompanyImg='https://res.cloudinary.com/cacicloud/image/upload/v1510129137/partners/support/%E4%B8%AD%E5%9B%BD%E8%89%BA%E6%9C%AF%E7%A0%94%E7%A9%B6%E9%99%A2_hg9xfa.jpg'
              partnerCompanyName='中國藝術研究院'
            />
          </Col>
        </Row>
      </section>
    </div>
  );
};
