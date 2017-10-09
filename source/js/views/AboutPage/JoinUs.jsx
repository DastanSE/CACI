import React, { Component } from "react";
import { Row, Col, Carousel } from "react-bootstrap";

export default class JoinUs extends Component {
  render() {
    return (
      <div className="skill-wrap clearfix" id="join-us">
        <div className="center wow fadeInDown">
          <h2>加入我們</h2>
          <p className="lead">
            CACI-藝文創薈是一座服務於公眾，獨立的公益性藝術機構，總部設於香港，同時於台北、澳門、北京設有辦事處，由一群來自兩岸，熱愛藝術、科創的青年發起，致力於透過各項不同類型的活動積極推廣現當代藝文創作、科技創新的最新發展，同時通過對傳統文化的研習、傳承、發展，為現當代藝術提供吸養，遂步促進兩岸之間的藝文、科創交流和跨領域的對話。
          </p>
        </div>
        <table className="table table-hover bus-table">
          <tbody>
            <tr>
              <td>職位名稱</td>
              <td>工作經驗</td>
              <td>類型</td>
              <td />
            </tr>
            <tr>
              <td className="mbold">
                <a href="<?php the_permalink(); ?>" />
              </td>
              <td />
              <td />
              <td>
                <a className="btn btn-danger btn-xs" href="">
                  了解更多>>
                </a>
              </td>
            </tr>

            <tr>
              <td colSpan="4" className="center">
                <a className="btn btn-danger" href="http://caci.hk/job/">
                  查看更多职位
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
