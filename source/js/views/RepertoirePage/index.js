import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import Section1 from './Section1';


export default class RepertoirePage extends Component {
  render() {
    return (
      <div>
        <div id="jumu-banner">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>


            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="../../assets/img/index-top1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="../../assets/img/index-top1.jpg" alt="" />
                <div className="carousel-caption">
              </div>
            </div>

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
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
                <h4>精品劇目</h4>
                <ul className="article-filter">
                  <li><a className="active" href="#" data-filter=".xiju">戲劇</a></li>
                  <li><a href="#" data-filter=".wudao">舞蹈</a></li>
                  <li><a href="#" data-filter=".yinyue">音乐</a></li>
                  <li><a href="#" data-filter=".zhuchang">駐場演出</a></li>
                  <li><a href="#" data-filter=".ertong">兒童劇</a></li>
                  <li><a href="#" data-filter=".huaju">話劇</a></li>
                  <li><a href="#" data-filter=".lvyou">旅遊演出</a></li>
                  <li><a href="#" data-filter=".xiqu">戲曲</a></li>
                  <li><a href="#" data-filter=".zaji">雜技</a></li>
                  <li><a href="#" data-filter=".moshu">魔術</a></li>
                  <li><a href="#" data-filter=".qita">其他</a></li>
                </ul>
                <div className="clear"></div>
                <hr />
                <h4>演出场馆</h4>
                <ul className="article-filter">
                  <li><a className="active" href="#" data-filter=".beijing">北京</a></li>
                  <li><a href="#" data-filter=".shanghai">上海</a></li>
                  <li><a href="#" data-filter=".guangzhou">廣州</a></li>
                  <li><a href="#" data-filter=".tianjin">天津</a></li>
                  <li><a href="#" data-filter=".shenzhen">深圳</a></li>
                  <li><a href="#" data-filter=".nanijing">南京</a></li>
                  <li><a href="#" data-filter=".chengdu">成都</a></li>
                  <li><a href="#" data-filter=".chongqing">重慶</a></li>
                  <li><a href="#" data-filter=".zhengzhou">鄭州</a></li>
                  <li><a href="#" data-filter=".xian">西安</a></li>
                  <li><a href="#" data-filter=".wuhan">武漢</a></li>
                  <li><a href="#" data-filter=".changsha">長沙</a></li>
                  <li><a href="#" data-filter=".hefei">合肥</a></li>
                  <li><a href="#" data-filter=".qitac">其他城市</a></li>
                </ul>
                <div className="clear"></div>
                <hr />
                <h4>表演团队</h4>
                <ul className="article-filter">
                  <li><a className="active" href="#" data-filter=".huajut">話劇團</a></li>
                  <li><a href="#" data-filter=".ertongt">兒童劇團</a></li>
                  <li><a href="#" data-filter=".gejut">歌劇團</a></li>
                  <li><a href="#" data-filter=".wujut">舞劇團</a></li>
                  <li><a href="#" data-filter=".xijut">戲劇團</a></li>
                  <li><a href="#" data-filter=".quyit">曲藝團</a></li>
                  <li><a href="#" data-filter=".zajit">雜技團</a></li>
                  <li><a href="#" data-filter=".maxit">馬戲團</a></li>
                  <li><a href="#" data-filter=".muout">木偶團</a></li>
                  <li><a href="#" data-filter=".piyingt">皮影團</a></li>
                  <li><a href="#" data-filter=".qitat">其他</a></li>
                </ul>
              </div>

  <div className="cards article-items" style={{minHeight: 300}}>
        <article className="xiju article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">戲劇</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="wudao article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">舞蹈</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="yinyue article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">音樂</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="zhuchang article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">駐場演出</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="ertong article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">兒童劇</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="huaju article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">話劇</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="lvyou article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">旅遊演出</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="xiqu article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">戲曲</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="zaji article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">雜技</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="moshu article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">魔術</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="qita article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">其他</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
  </div>

    <div className="cards article-items" style={{minHeight: 100}}>
        <article className="beijing article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">北京</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="shanghai article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">上海</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="guangzhou article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">廣州</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="tianjin article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">天津</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="shenzhen article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">深圳</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="nanjing article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">南京</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
      <article className="chengdu article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">成都</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="chongqing article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">重慶</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="zhengzhou article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">鄭州</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="xian article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">西安</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="wuhan article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">武漢</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="changsha article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">長沙</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
      <article className="hefei article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">合肥</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="qitac article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">其他城市</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>

  </div>


  <div className="cards article-items" style={{minHeight: 100}}>
        <article className="huajut article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">話劇團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="ertongt article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">兒童劇團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="gejut article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">歌劇團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="wujut article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">舞劇團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="xijut article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">戲劇團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="quyit article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">曲藝團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="zajit article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">雜技團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="maxit article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">馬戲團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="muout article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">木偶團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="piyingt article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">皮影團</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
        <article className="qitat article-item jumu-cards">
          <a className="link-wrap2" href="" target="_blank">

            <div className="img-box2">

              <p className="type">其他</p>
              <p className="time"></p>
              <img src="" alt="images" width="370" height="200"  />
            </div>
            <div className="height-limiter">
              <h4></h4>
            </div>
          </a>
        </article>
      </div>
    </div>
  </div>
  <div className="clear"></div>


</div>
</div>
</div>
    );
  }
}
