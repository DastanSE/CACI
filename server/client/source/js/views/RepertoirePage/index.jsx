import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Carousel } from 'react-bootstrap';
import * as actions from '../../actions';
import Cards from './Cards';
import JumuType from './JumuType';
import { formatDate } from '../../services';
import OwnMasonry from '../../components/Global/OwnMasonry';

const brakePoints = [350, 576];

const REPERTOIRE = [
  { typeFilterBy: '.wudao', type: '舞蹈' },
  { typeFilterBy: '.xiju', type: '戲劇' },
  { typeFilterBy: '.yinyue', type: '音乐' },
  { typeFilterBy: '.zhuchang', type: '駐場演出' },
  { typeFilterBy: '.ertong', type: '兒童劇' },
  { typeFilterBy: '.huaju', type: '話劇' },
  { typeFilterBy: '.lvyou', type: '旅遊演出' },
  { typeFilterBy: '.xiqu', type: '戲曲' },
  { typeFilterBy: '.zaji', type: '雜技' },
  { typeFilterBy: '.moshu', type: '魔術' },
  { typeFilterBy: '.otherrepertoire', type: '其他' },
];

const CITIES = [
  { typeFilterBy: '.beijing', type: '北京' },
  { typeFilterBy: '.shanghai', type: '上海' },
  { typeFilterBy: '.guangzhou', type: '廣州' },
  { typeFilterBy: '.tianjin', type: '天津' },
  { typeFilterBy: '.shenzhen', type: '深圳' },
  { typeFilterBy: '.nanjing', type: '南京' },
  { typeFilterBy: '.chengdu', type: '成都' },
  { typeFilterBy: '.chongqing', type: '重慶' },
  { typeFilterBy: '.zhengzhou', type: '鄭州' },
  { typeFilterBy: '.xian', type: '西安' },
  { typeFilterBy: '.wuhan', type: '武漢' },
  { typeFilterBy: '.changsha', type: '長沙' },
  { typeFilterBy: '.hefei', type: '合肥' },
  { typeFilterBy: '.othercities', type: '其他城市' },
];

const ACTGROUPS = [
  { typeFilterBy: '.huajut', type: '話劇團' },
  { typeFilterBy: '.ertongt', type: '兒童劇團' },
  { typeFilterBy: '.gejut', type: '歌劇團' },
  { typeFilterBy: '.wujut', type: '舞劇團' },
  { typeFilterBy: '.xijut', type: '戲劇團' },
  { typeFilterBy: '.quyit', type: '曲藝團' },
  { typeFilterBy: '.zajit', type: '雜技團' },
  { typeFilterBy: '.maxit', type: '馬戲團' },
  { typeFilterBy: '.muout', type: '木偶團' },
  { typeFilterBy: '.piyingt', type: '皮影團' },
  { typeFilterBy: '.othergroups', type: '其他' },
];

class RepertoirePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    this.props.fetchRepertoire().then(() => this.setState({ content: this.props.repertoire.data }));
  }


  filterContent = async (sortByType) => {
     const sortedContent = await this.props.repertoire.data.filter(data => {
      return data.repertoire_type === sortByType;
    });

    await this.setState({
      content: sortedContent,
    });
   }


  render() {
    return (
      <div>
        <div id='jumu-banner'>
          <Carousel
            id='jumu-slider'
            prevIcon={
              <span className='prev'>
                <i className='fa fa-chevron-left' />
              </span>
            }
            nextIcon={
              <span className='next'>
                <i className='fa fa-chevron-right' />
              </span>
            }
            slide
            interval={ 2000 }
          >
            {[
              {
                imgsrc:
                  'https://res.cloudinary.com/cacicloud/image/upload/v1510128455/index-top1_rflzc7.jpg',
              },
              {
                imgsrc:
                  'https://res.cloudinary.com/cacicloud/image/upload/v1510128455/index-top1_rflzc7.jpg',
              },
            ].map((data, index) => {
              return (
                <Carousel.Item key={ index } animateIn={ true }>
                  <img src={ data.imgsrc } />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div id='primary' className='content-area'>
          <div id='main' className='site-main' role='main'>
            <div className='site-branding'>
              <h1 className='site-title'>劇目採購</h1>
            </div>
            <Row>
              <Col xs={ 12 } sm={ 4 } md={ 3 } lgOffset={ 1 } lg={ 3 }>
                <div id='jumu'>
                  <div className='jumu-type'>
                    <h3>全部分類</h3>
                    <hr />
                    <JumuType typeName='精品劇目' filterContent={ this.filterContent } typesArray={ REPERTOIRE } />
                    <hr />
                    <JumuType typeName='演出场馆' filterContent={ this.filterContent } typesArray={ CITIES } />
                    <hr />
                    <JumuType typeName='表演团队' filterContent={ this.filterContent } typesArray={ ACTGROUPS } />
                    <hr />
                  </div>
                </div>
              </Col>
              <Col xs={ 12 } sm={ 8 } md={ 9 } lg={ 7 }>
                <div style={ { minHeight: 300 } } >
                  <OwnMasonry brakePoints={ brakePoints } >
                    {this.state.content.map((data, index) => (
                      <Cards
                        key={ index }
                        title={ data.repertoire_title }
                        time={ formatDate(new Date(data.repertoire_date)) }
                        imgSrc={ data.repertoire_imgSrc }
                        type={ data.repertoire_type }
                        discription={ data.repertoire_discription }
                      />
                    ))}
                  </OwnMasonry>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className='clear' />
      </div>
    );
  }
}

function mapStateToProps({ repertoire }) {
  return { repertoire };
}

export default connect(mapStateToProps, actions)(RepertoirePage);
