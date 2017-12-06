import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsList from './NewsList';

class NewsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchNews();
  }

  render() {
    return (
      <div>
        <div className='news-page-top'>
          <h1>媒体报导</h1>
        </div>
        <section id='news' className='container'>
          <div className='center'>
            <h2>媒體報導</h2>
            <p className='lead'>News</p>
          </div>
          <NewsList news={ this.props.news.data } />
        </section>
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps, actions)(NewsPage);
