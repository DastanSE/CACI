import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.showModal,
    };
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Modal show={ this.state.show } onHide={ this.close }>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div dangerouslySetInnerHTML={ { __html: this.props.modalBody } } />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.close }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
