import React, { Component } from "react";
import { Row, Col, Media } from "react-bootstrap";

export const ContactInfo = props => {
  return (
    <section id="conatcat-info">
      <div className="container">
        <Row>
          <Col sm={8}>
            <Media className="contact-info">
              <Media.Left className="pull-left">
                <i className="fa fa-phone" />
                <br />
                <i className="fa fa-weixin" style={{ marginTop: "5px" }} />
                <div className="wechat-hover">
                  <img src='https://res.cloudinary.com/cacicloud/image/upload/v1513129322/caci_qr_yck7xp.png' />
                  <span>Wechat: caci-wechat</span>
                </div>
              </Media.Left>
              <Media.Body>
                <div>
                  <div className="contact-info-header">
                    <span>想要聯繫我們？</span>
                  </div>
                  <div
                    style={{ display: "inline-block" }}
                    dangerouslySetInnerHTML={{ __html: props.contacts }}
                  />
                </div>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </div>
    </section>
  );
};

ContactInfo.defaultProps = {
  contacts: `
      <p>
        (香港) 銅鑼灣摩理臣山道84-86號 1樓 | (852) 3610 9194 | <a href="mailto:info@caci.hk?Subject=Hello%20again" target="_top">info@caci.hk</a>
        <br /> (澳門) 提督馬路華隆工業大廈8樓 | (853) 2895-1000 | <a href="mailto:info.mac@caci.hk?Subject=Hello%20again" target="_top">info.mac@caci.hk</a>
        <br /> (北京) 海淀區四道口路2號京果商業大廈A座5層 A5015 | (86) 010-53567027 | <a href="mailto:info.bj@caci.hk?Subject=Hello%20again" target="_top">info.bj@caci.hk</a>
      </p>
  `
};
