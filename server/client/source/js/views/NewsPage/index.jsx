import React, { Component } from 'react';
import NewsList from './NewsList';


export default class NewsPage extends Component {
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
          <NewsList />
        </section>
      </div>
    );
  }
}
