import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import MarkdownElement from '../../components/Global/MarkdownElement';

export default class JobDiscription extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    const { job_title, job_experience, job_discription, job_type } = this.props.data;
    return (
      <span>
        <Button bsSize='xsmall' bsStyle='danger' onClick={ () => this.setState({ show: true }) }>
          了解更多
        </Button>

        <Modal className='modal-element' show={ this.state.show } onHide={ this.close.bind(this) }>
          <Modal.Body>
            <Modal.Header>
              <span id='lightbox-close' onClick={ this.close.bind(this) } aria-hidden='true' />
              <Modal.Title>
                <h1>{job_title}</h1>
              </Modal.Title>
              <i className='fa fa-briefcase' aria-hidden='true' /> {job_type}
              <br />
              <i className='fa fa-clock-o' aria-hidden='true' /> {job_experience}
            </Modal.Header>

            <MarkdownElement text={ job_discription } />
          </Modal.Body>
          <Modal.Footer>
            <span className='social-media'>
              <i className='fa fa-facebook fa-2x' aria-hidden='true' />
            </span>
            <Button onClick={ this.props.close }>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
