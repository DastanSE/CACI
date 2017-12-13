import React, { Component } from 'react';
import OwnMasonry from '../../components/Global/OwnMasonry';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Card from '../../components/Global/Card';
import { Loading } from '../../components/Global/Loading';
import { formatDate } from '../../services/index';

const brakePoints = [350, 576, 769, 992, 1200];

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      articles: [],
    };
  }

  componentDidMount() {
    this.props.fetchArticle().then(() => this.setState({ articles: this.props.article.data }));
  }

  filterArticles(sortByType) {
    const sortedArticles = this.props.article.data.filter(data => {
      return data.article_type === sortByType;
    });

    this.setState({
      articles: sortedArticles,
    });
  }

  render() {
    return (
      <div>
        <div id='primary' className='content-area'>
          <div id='main' className='site-main' role='main'>
            <div className='site-branding'>
              <h1 className='site-title'>藝文資訊</h1>
            </div>

            <div className='tb-category'>
              <ul className='article-filter' style={ { paddingLeft: 0 } }>
                <li
                  style={ { borderColor: 'rgb(255, 87, 34)' } }
                  onClick={ () => this.filterArticles('藝術評論') }
                >
                  <span className='article-btn1 active'>藝術評論</span>
                </li>

                <li
                  style={ { borderColor: 'rgb(171, 71, 188)' } }
                  onClick={ () => this.filterArticles('科技新聞') }
                >
                  <span className='article-btn2'>科技新聞</span>
                </li>

                <li
                  style={ { borderColor: 'rgb(255, 87, 34)' } }
                  onClick={ () => this.filterArticles('文藝推薦') }
                >
                  <span className='article-btn1'>文藝推薦</span>
                </li>
                <li
                  style={ { borderColor: 'rgb(171, 71, 188)' } }
                  onClick={ () => this.filterArticles('世相百科') }
                >
                  <span className='article-btn2'>世相百科</span>
                </li>
              </ul>
            </div>
            <div style={ { width: '70%', marginLeft: '15%' } }>
              <OwnMasonry brakePoints={ brakePoints }>
                {this.state.articles.map((data, index) => (
                  <Card
                    key={ index }
                    img1={ data.article_images[0] }
                    title={ data.article_title }
                    date={ formatDate(new Date(data.article_date)) }
                    subtitle={ data.article_subtitle }
                    images={ data.article_images }
                    body={ data.article_content }
                  />
                ))}
              </OwnMasonry>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ article }) {
  return { article };
}

export default connect(mapStateToProps, actions)(ArticlePage);
