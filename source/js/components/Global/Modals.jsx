import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Modals extends Component {

  render() {
    return (
      <Modal show={ this.props.showModal } onHide={ this.props.close }>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div dangerouslySetInnerHTML={ { __html: this.props.modalBody } } />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ this.props.close }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
