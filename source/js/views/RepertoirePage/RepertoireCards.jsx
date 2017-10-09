import React, { Component } from "react";

export default class RepertoireCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, time } = this.props;
    return (
      <div>
        <article className={typeFilterBy + "article-item jumu-cards"}>
          <a className="link-wrap2" href="" target="_blank">
            <div className="img-box2">
              <p className="type">{type}</p>
              <p className="time">{time}</p>
              <img src="" alt="images" width="370" height="200" />
            </div>
            <div className="height-limiter">
              <h4 />
            </div>
          </a>
        </article>
      </div>
    );
  }
}
