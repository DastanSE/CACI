import React, { Component } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import Section1 from "./Section1";
import JumuType from "./JumuType";

const REPERTOIRE = [
  { typeFilterBy: ".wudao", type: "舞蹈" },
  { typeFilterBy: ".xiju", type: "戲劇" },
  { typeFilterBy: ".yinyue", type: "音乐" },
  { typeFilterBy: ".zhuchang", type: "駐場演出" },
  { typeFilterBy: ".ertong", type: "兒童劇" },
  { typeFilterBy: ".huaju", type: "話劇" },
  { typeFilterBy: ".lvyou", type: "旅遊演出" },
  { typeFilterBy: ".xiqu", type: "戲曲" },
  { typeFilterBy: ".zaji", type: "雜技" },
  { typeFilterBy: ".moshu", type: "魔術" },
  { typeFilterBy: ".otherrepertoire", type: "其他" }
];

const CITIES = [
  { typeFilterBy: ".beijing", type: "北京" },
  { typeFilterBy: ".shanghai", type: "上海" },
  { typeFilterBy: ".guangzhou", type: "廣州" },
  { typeFilterBy: ".tianjin", type: "天津" },
  { typeFilterBy: ".shenzhen", type: "深圳" },
  { typeFilterBy: ".nanjing", type: "南京" },
  { typeFilterBy: ".chengdu", type: "成都" },
  { typeFilterBy: ".chongqing", type: "重慶" },
  { typeFilterBy: ".zhengzhou", type: "鄭州" },
  { typeFilterBy: ".xian", type: "西安" },
  { typeFilterBy: ".wuhan", type: "武漢" },
  { typeFilterBy: ".changsha", type: "長沙" },
  { typeFilterBy: ".hefei", type: "合肥" },
  { typeFilterBy: ".othercities", type: "其他城市" }
];

const ACTGROUPS = [
  { typeFilterBy: ".huajut", type: "話劇團" },
  { typeFilterBy: ".ertongt", type: "兒童劇團" },
  { typeFilterBy: ".gejut", type: "歌劇團" },
  { typeFilterBy: ".wujut", type: "舞劇團" },
  { typeFilterBy: ".xijut", type: "戲劇團" },
  { typeFilterBy: ".quyit", type: "曲藝團" },
  { typeFilterBy: ".zajit", type: "雜技團" },
  { typeFilterBy: ".maxit", type: "馬戲團" },
  { typeFilterBy: ".muout", type: "木偶團" },
  { typeFilterBy: ".piyingt", type: "皮影團" },
  { typeFilterBy: ".othergroups", type: "其他" }
];

export default class RepertoirePage extends Component {
  render() {
    return (
      <div>
        <div id="jumu-banner">
          <Carousel
            id="carousel-example-generic"
            prevIcon={
              <a
                className="left carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="prev"
              >
                <span
                  className="glyphicon glyphicon-chevron-left"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
            }
            nextIcon={
              <a
                className="right carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="next"
              >
                <span
                  className="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            }
          >
            {[
              { imgsrc: "../../assets/img/index-top1.jpg" },
              { imgsrc: "../../assets/img/index-top1.jpg" }
            ].map((data, index) => {
              return (
                <Carousel.Item key={index} animateIn={true}>
                  <img src={data.imgsrc} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>

        <div id="primary" className="content-area">
          <div id="main" className="site-main" role="main">
            <div className="site-branding">
              <h1 className="site-title">劇目採購</h1>
            </div>
            <div id="jumu">
              <div className="jumu-type">
                <h3>全部分類</h3>
                <hr />
                <JumuType typeName="精品劇目" typesArray={REPERTOIRE} />
                <hr />
                <JumuType typeName="演出场馆" typesArray={CITIES} />
                <hr />
                <JumuType typeName="表演团队" typesArray={ACTGROUPS} />
              </div>
            </div>

            <div className="cards article-items" style={{ minHeight: 300 }}>
              <article className="xiju article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">戲劇</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="wudao article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">舞蹈</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="yinyue article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">音樂</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="zhuchang article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">駐場演出</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="ertong article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">兒童劇</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="huaju article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">話劇</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="lvyou article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">旅遊演出</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="xiqu article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">戲曲</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="zaji article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">雜技</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="moshu article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">魔術</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="qita article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">其他</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
            </div>

            <div className="cards article-items" style={{ minHeight: 100 }}>
              <article className="beijing article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">北京</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="shanghai article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">上海</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="guangzhou article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">廣州</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="tianjin article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">天津</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="shenzhen article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">深圳</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="nanjing article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">南京</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="chengdu article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">成都</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="chongqing article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">重慶</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="zhengzhou article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">鄭州</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="xian article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">西安</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="wuhan article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">武漢</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="changsha article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">長沙</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="hefei article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">合肥</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="qitac article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">其他城市</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
            </div>

            <div className="cards article-items" style={{ minHeight: 100 }}>
              <article className="huajut article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">話劇團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="ertongt article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">兒童劇團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="gejut article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">歌劇團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="wujut article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">舞劇團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="xijut article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">戲劇團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="quyit article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">曲藝團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="zajit article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">雜技團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="maxit article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">馬戲團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="muout article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">木偶團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="piyingt article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">皮影團</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
              <article className="qitat article-item jumu-cards">
                <a className="link-wrap2" href="" target="_blank">
                  <div className="img-box2">
                    <p className="type">其他</p>
                    <p className="time" />
                    <img src="" alt="images" width="370" height="200" />
                  </div>
                  <div className="height-limiter">
                    <h4 />
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
