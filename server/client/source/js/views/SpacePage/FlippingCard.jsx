import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';


export default class FlippingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  render() {
    return (
      <div className='news' id='ziyuan'>
        <ReactCardFlip isFlipped={ this.state.isFlipped }>
          <div className='front' key='front' onClick={ this.handleClick }>
            <div className='quickFlipCta f'>{this.props.frontText}</div>
          </div>

          <div className='back' key='back' onClick={ this.handleClick }>
            <div className='quickFlipCta f1'>{this.props.backText}</div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
