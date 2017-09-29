import React, { Component } from 'react';

export default class JumuType extends Component {
  render() {
    return (
      <div>
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
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}
