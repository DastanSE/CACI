import React from 'react';
import { Row, Col, Carousel, Image, Media } from 'react-bootstrap';

export const Members = props => {
  return (
    <div>
      <div className='center'>
        <h2>團隊成員</h2>
      </div>
      <Row>
        <Col md={ 3 } sm={ 6 }>
          <div className='single-profile-top'>
            <div className='media'>
              <div className='pull-left'>
                <a href='#'>
                  <img className='media-object' src='../../assets/img/member/li.jpg' alt='' />
                </a>
              </div>
              <div className='media-body'>
                <h4>李國輝</h4>
                <h5>行政總監</h5>
              </div>
            </div>
            <p>
              北京大學國際關係學院碩士、香港城市大學中國企業管理專業本科、中華商略聯合會北京秘書長，曾任職於香港中小企商會，提供進入內地市場的基金和落地服務，並自行開設遊學公司，擁有8年以上的活動運營經驗。
            </p>
          </div>
        </Col>

        <div className='col-md-3 col-sm-6 col-md-offset-1'>
          <div className='single-profile-top'>
            <div className='media'>
              <div className='pull-left'>
                <a href='#'>
                  <img className='media-object' src='../../assets/img/member/yi.jpg' alt='' />
                </a>
              </div>
              <div className='media-body'>
                <h4>張伊諾</h4>
                <h5>財務總監</h5>
              </div>
            </div>

            <p>畢業於北京大學國際關係學院，曾任職於國家公共部門，以及中國鋼鐵協會等不同半官方協會，擁有良好的公共行政經驗，兼管企業政府關係。</p>
          </div>
        </div>
        <div className='col-md-3 col-sm-6 col-md-offset-1'>
          <div className='single-profile-top'>
            <div className='media'>
              <div className='pull-left'>
                <a href='#'>
                  <img className='media-object' src='../../assets/img/member/cheng.jpg' alt='' />
                </a>
              </div>
              <div className='media-body'>
                <h4>程沛威</h4>
                <h5>版權事務部門主管</h5>
              </div>
            </div>

            <p>
              前香港作曲家及作詞家協會(CASH) 總經理，三大唱片公司（環球、索尼及華納音樂）的合資企業公司OneStop Asia
              CEO,國際唱片業協會(IFPI)亞洲區業務顧問並成功創辦版權集體管理組織香港音像聯盟(HKRIA)。
            </p>
          </div>
        </div>
        <div className='col-md-3 col-sm-6 col-md-offset-1'>
          <div className='single-profile-top'>
            <div className='media'>
              <div className='pull-left'>
                <a href='#'>
                  <img className='media-object' src='../../assets/img/member/mamudi.jpg' alt='' />
                </a>
              </div>
              <div className='media-body'>
                <h4>马沐笛</h4>
                <h5>版權事務部門主管</h5>
              </div>
            </div>

            <p>
              前香港作曲家及作詞家協會(CASH) 總經理，三大唱片公司（環球、索尼及華納音樂）的合資企業公司OneStop Asia
              CEO,國際唱片業協會(IFPI)亞洲區業務顧問並成功創辦版權集體管理組織香港音像聯盟(HKRIA)。
            </p>
          </div>
        </div>
      </Row>
      <div className='row team-bar'>
        <div className='first-one-arrow hidden-xs'>
          <hr />
        </div>
        <div className='first-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-up' />
        </div>
        <div className='second-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-down' />
        </div>
        <div className='third-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-up' />
        </div>
        <div className='fourth-arrow hidden-xs'>
          <hr /> <i className='fa fa-angle-down' />
        </div>
      </div>

      <div className='row clearfix'>
        <div className='col-md-3 col-sm-6'>
          <div className='single-profile-bottom'>
            <div className='media'>
              <div className='pull-left'>
                <a href='#'>
                  <img className='media-object' src='../../assets/img/member/zhang.jpg' alt='' />
                </a>
              </div>
              <div className='media-body'>
                <h4>張紫伶</h4>
                <h5>藝術總監</h5>
              </div>
            </div>

            <p>
              中國藝術研究院博士在讀、香港演藝學院職任教師，粵劇宗師白駒榮孫女，名伶白雪梅之女。自幼習琴，師承著名作曲家唐康年老師、著名小提琴表演家Sharon Stanis
              (Lafayette String Quartet)、及Andrew
              Dawes老師，十多歲便考取皇家音樂學院演奏文憑，曾獲多項國際比賽獎項。曾就讀加拿大維多利亞大學音樂系，後畢業於加拿大卑斯省大學主修音樂，並得到該兩所大學的全額獎學金。
            </p>
          </div>
        </div>
        <div className='col-md-3 col-sm-6 col-md-offset-1'>
          <div className='single-profile-bottom'>
            <div className='media'>
              <div className='pull-left'>
                <a href='#'>
                  <img className='media-object' src='../../assets/img/member/cui.jpg' alt='' />
                </a>
              </div>
              <div className='media-body'>
                <h4>崔遠曦</h4>
                <h5>影視總監</h5>
              </div>
            </div>

            <p>
              畢業於中國戲曲學院導演系，曾任第六屆FIRST青年電影展評委，中共北京市宣傳部主辦2014年北京榜樣候選人，及北京青年報2014中國青春榜樣。畢業後致力於影視製作，國家發改委全球華人事業傳承菁英培養計劃宣傳片《一的光芒》
              製片人, 《中華好詩詞》節目宣傳片導演, 院線電影《美女特工》
              北京製片,阿里影業網絡節目《故事》製片主任,梅氏（北京）文化傳媒有限公司製片人等，同時主導製作微電影超過40部。
            </p>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-md-offset-1'>
          <div className='single-profile-bottom'>
            <div className='media'>
              <div className='pull-left'>
                <a href='#'>
                  <img className='media-object' src='../../assets/img/member/zhai.jpg' alt='' />
                </a>
              </div>
              <div className='media-body'>
                <h4>翟月</h4>
                <h5>Founder and CEO</h5>
              </div>
            </div>
            <p>
              香港中文大學文化管理碩士，澳門科技大學傳播學學士，澳門亞太旅遊與文化藝術學會副理事長，《視覺養分》嶺南實驗空間專欄作者，曾任職澳門麥卡德（Macard）服務有限公司、香港蘇富比拍賣行亞洲當代藝術部、澳門法國文化協會，自行成立的公司獲得第八屆「挑戰杯」全國大學生創業計劃競賽全國金獎、最佳展示獎，第三屆中國杭州大學生創業大賽三等獎。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
