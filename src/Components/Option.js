import React from 'react';
import {Input, Label} from './index';
import { Row, Col } from 'react-flexbox-grid';

const Option = ({type, value, name, id, ...props}) => {
  return (
    <Row>
      <Col xs={6} md={3}>
        <Input type="radio" value={value} name={name} id={id} {...props}></Input>
        <Label type={type} forOption={id} value={value} {...props}></Label>
      </Col>
    </Row>
  )
}
export default Option;