import React, { Component } from 'react';
import { Pagination, PanelGroup, Panel, Media, Image } from 'react-bootstrap';


export default class NewsList extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      activeKey: '0',
    };
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }
  handleSelectPanel(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <div>
        <div id='accordion1'>
          <PanelGroup
            bsClass='news-panel-group'
            defaultActiveKey={ this.state.activeKey }
            onSelect={ this.handleSelectPanel.bind(this) }
            accordion
          >
            {this.props.news.map((data, index) => {
              return (
                <Panel bsClass='news-panel' key={index} collapsible header={ <h3>{data.news_title}<i className="fa fa-angle-right pull-right"/></h3> } eventKey={`${index+1}`}>
                  <Media>
                    <Media.Left className='pull-left'>
                      <Image className='news-panel-img' src={ data.news_imgSrc } alt='Image' responsive />
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>{data.news_title}</Media.Heading>
                      <p>{data.news_introduction}</p>
                      <a href={ data.news_link }>Read more</a>
                    </Media.Body>
                  </Media>
                </Panel>
              );
            })}
          </PanelGroup>
        </div>
        <div className='page_navi'>
          <Pagination
            first={ <p>返回首页</p> }
            prev={ <p>上一页</p> }
            next={ <p>下一页</p> }
            last={ <p>最后一页</p> }
            ellipsis
            boundaryLinks
            maxButtons={ 5 }
            bsSize='small'
            activePage={ this.state.activePage }
            onSelect={ this.handleSelect.bind(this) }
          />
        </div>
      </div>
    );
  }
}
