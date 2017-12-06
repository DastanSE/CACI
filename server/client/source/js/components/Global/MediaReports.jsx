import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { PanelGroup, Panel, Media, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

const NEWSDATA = [
  {
    title: '中关村大街：以“人”为本 吸引创新人才聚集-海淀网',
    link: 'https://www.nur.kz/1661333-arestovan-figurant-krovavoy-draki-vo.html',
    content: 'afasdjkfnaskdjnfasjndflksajndfklasjndfkasjdnf',
    imgSrc: '../../assets/img/1.png',
  },
  {
    title: 'test1',
    link: 'https://www.nur.kz/1661333-arestovan-figurant-krovavoy-draki-vo.html',
    content: 'afasdjkfnaskdjnfasjndflksajndfklasjndfkasjdnf',
    imgSrc: '../../assets/img/2.png',
  },
  {
    title: 'test2',
    link: 'https://www.nur.kz/1661333-arestovan-figurant-krovavoy-draki-vo.html',
    content: 'afasdjkfnaskdjnfasjndflksajndfklasjndfkasjdnf',
    imgSrc: '../../assets/img/3.png',
  },
  {
    title: 'test3',
    link: 'https://www.nur.kz/1661333-arestovan-figurant-krovavoy-draki-vo.html',
    content: 'afasdjkfnaskdjnfasjndflksajndfklasjndfkasjdnf',
    imgSrc: '../../assets/img/4.png',
  },
];

class MediaReports extends Component {
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

  componentDidMount() {
    this.props.fetchNews();
  }


  render() {
    const size = 5;
    return (
      <div className='skill-wrap clearfix'>
        <div className='center'>
          <h2>媒體報道</h2>
        </div>
        <PanelGroup
          bsClass='news-panel-group'
          defaultActiveKey={ this.state.activeKey }
          onSelect={ this.handleSelectPanel.bind(this) }
          accordion
        >
          {this.props.news.data.slice(0, size).map((data, index) => {
            return (
              <Panel
                bsClass='news-panel'
                key={ index }
                collapsible
                header={
                  <h3>
                    {data.news_title}
                    <i className='fa fa-angle-right pull-right' />
                  </h3>
                }
                eventKey={ `${ index + 1 }` }
              >
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
          <Panel
            bsClass='news-panel'
            header={
              <h3>
                <NavLink className='accordion-toggle' activeClassName='' to={ routeCodes.NEWSPAGE }>
                  更多關於我們的新聞 <i className='fa fa-newspaper-o' aria-hidden='true' />
                  <i className='fa fa-angle-right pull-right' />
                </NavLink>
              </h3>
            }
          />
        </PanelGroup>
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps, actions)(MediaReports);
