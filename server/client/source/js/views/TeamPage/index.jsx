import React from 'react';
import { Row, Col, Image, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routeCodes } from '../App';


const TEAM = [
  {
    company: '羅蘭數字音樂教育',
    img:
      'https://res.cloudinary.com/cacicloud/image/upload/v1510129141/partners/support/罗兰_walqom.jpg',
  },
  {
    company: '粵目演藝工作室',
    img:
      'https://res.cloudinary.com/cacicloud/image/upload/v1510127465/partners/粤目演义_o9rlsx.jpg',
  },
  {
    company: '北京情定文化傳播有限公司',
    img:
      'https://res.cloudinary.com/cacicloud/image/upload/v1510129140/partners/support/情定北京_j0idvn.jpg',
  },
  {
    company: '龍騰舞蹈藝術中心',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148700/partners/l-longt.jpg',
  },
  {
    company: '北京馬馬虎虎文化轉播有限公司',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148701/partners/馬虎-.jpg',
  },
  {
    company: '智途教育諮詢有限公司',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148700/partners/ztjy.jpg',
  },
  {
    company: '藝樹公學',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148702/partners/YSGX.png',
  },
  {
    company: '時維空間 ',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148700/partners/l-shiwei.jpg',
  },
  {
    company: '目一空間',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148701/partners/m1.jpg',
  },
  {
    company: '華麗轉身',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148918/partners/hlzs.png',
  },
  {
    company: '阿特拉斯（北京）文化傳播有限責任公司',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513148987/partners/阿特-1.png',
  },
  {
    company: '府身體劇場',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513149032/partners/fust.png',
  },
  {
    company: '北京尚藝天成文化傳媒有限公司',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513149109/partners/sy.jpg',
  },
  {
    company: '北京春江映畫文化傳播有限公司',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513149108/partners/cjyh-3.png',
  },
  {
    company: 'WOW舞工作室',
    img: 'https://res.cloudinary.com/cacicloud/image/upload/v1513149111/partners/wow-1.png',
  },
];

const TeamPage = () => {
  return (
    <div>
      <div className='teampage-header'>
        <div className='teampage-title'>
          <h1>孵化團隊</h1>
          <p>這裡有青年藝術家，現代工作室</p>
        </div>
      </div>
      <section id='feature' className='transparent-bg'>
        <div className='container'>
          <Row>
            {TEAM.map((data, index) => (
              <Col xs={ 6 } sm={ 6 } md={ 4 }>
                <div className='clients-comments text-center'>
                  <Image src={ data.img } alt='' circle />
                  <h4>{data.company}</h4>
                </div>
              </Col>
            ))}
          </Row>
          <div className='get-started center'>
            <h2>想要向我們展示？</h2>
            <p className='lead' />
            <div className='request'>
              <h4>
                <Link to={ routeCodes.CONTACT }>提交申請</Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
