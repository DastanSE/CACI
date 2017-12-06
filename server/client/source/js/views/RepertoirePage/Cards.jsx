import React, { Component } from 'react';

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className={ this.props.classname }>
        <div className='link-wrap2'>
          <div className='img-box2'>
            <p className='type'>{this.props.type}</p>
            <p className='time' />
            <img src={this.props.imgSrc} alt='images' width='370' height='200' />
          </div>
          
        </div>
      </article>
    );
  }
}
