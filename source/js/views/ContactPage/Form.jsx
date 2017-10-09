import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, HelpBlock, FormGroup } from 'react-bootstrap';

export const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={ id }>
      <ControlLabel>{label}</ControlLabel>
      <FormControl { ...props } />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <FieldGroup id='formControlsName' type='text' label='姓名*' placeholder='例如： 李小龙' />
          <FieldGroup
            id='formControlsEmail'
            type='email'
            label='Email*'
            placeholder='Enter email'
          />
          <FieldGroup id='formControlsMain' label='主题' type='text' />
          <FormGroup controlId='formControlsTextarea'>
            <ControlLabel>内容*</ControlLabel>
            <FormControl componentClass='textarea' placeholder='' style={ { height: 100 } } />
          </FormGroup>
          <Button bsSize='large' bsStyle='danger'>
            发送
          </Button>
        </form>
      </div>
    );
  }
}
