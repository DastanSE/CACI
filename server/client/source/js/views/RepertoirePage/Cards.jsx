import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import MarkdownElement from '../../components/Global/MarkdownElement';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <article>
        <div className='jumu-card-wrap' onClick={ () => this.setState({ show: true }) }>          
          <div className='img-box'>
            <img src={ this.props.imgSrc } alt='images' />
          </div>
          <span className='type'>{this.props.type}</span>
          <span className='time'>{this.props.time}</span>
          <h4>{this.props.title}</h4>
        </div>
        <Modal
          className='modal-element'
          show={ this.state.show }
          onHide={ () => this.setState({ show: false }) }
        >
          <Modal.Body>
            <Modal.Header>
              <span
                id='lightbox-close'
                onClick={ () => this.setState({ show: false }) }
                aria-hidden='true'
              />
              <Modal.Title>{this.props.title}</Modal.Title>
              <i className='fa fa-clock-o' aria-hidden='true' /> {this.props.time}
            </Modal.Header>
            <MarkdownElement text={ this.props.discription } />
          </Modal.Body>
          <Modal.Footer>
            <span className='social-media'>
              <i className='fa fa-facebook fa-2x' aria-hidden='true' />
            </span>
            <Button onClick={ () => this.setState({ show: false }) }>Close</Button>
          </Modal.Footer>
        </Modal>
      </article>
    );
  }
}
