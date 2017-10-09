import React, { Component } from 'react';

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className={ this.props.classname }>
        <a className='link-wrap2' href='' target='_blank'>
          <div className='img-box2'>
            <p className='type'>{this.props.type}</p>
            <p className='time' />
            <img src='' alt='images' width='370' height='200' />
          </div>
          <div className='height-limiter'>
            <h4 />
          </div>
        </a>
      </article>
    );
  }
}
