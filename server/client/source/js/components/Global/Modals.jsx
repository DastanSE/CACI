import React, { Component } from 'react';
import { Modal, Button, Carousel, Image } from 'react-bootstrap';
import MarkdownElement from './MarkdownElement';

export default class Modals extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, images, date, body } = this.props;

    return (
      <Modal className='event-modal' show={ this.props.showModal } onHide={ this.props.close }>
        <Modal.Body>
          {images.length > 1 ? (
            <Carousel id='modal-slider' slide interval={ 2000 }>
              {images.map((data, index) => {
                return (
                  <Carousel.Item key={ index }>
                    <Image src={ data } alt='Carousel' />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <Image src={ images[0] } />
          )}
          <Modal.Header>
            <button type='button' id='lightbox-close' onClick={ this.props.close }>
              <span aria-hidden='true'>×</span>
            </button>
            <Modal.Title>{title}</Modal.Title>
            <i className='fa fa-clock-o' aria-hidden='true' /> {date}
          </Modal.Header>

          <MarkdownElement text={ body } />
        </Modal.Body>
        <Modal.Footer>
          <span className='social-media'>
            <i className='fa fa-facebook fa-2x' aria-hidden='true' />
          </span>
          <Button onClick={ this.props.close }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
