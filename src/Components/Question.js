import React from 'react';
import {Option, Label, Input} from './index'
import { Row, Col } from 'react-flexbox-grid';

const Question = ({type, value, id, ...props})=>(
      <div>
        <Row>
          <Col xs={6} md={3}>
            <Label type={type} value={value}></Label>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Label type={type} value={props.text}></Label>
          </Col>        
        </Row>
        {
          props.options && props.options.map((option, i)=>{
            return <Option key={i} type={type} name={props.answer} id={option.id} value={option.text} {...props}></Option>
          })
        }
        <Row>
          <Col xs={6} md={8}>
            <Input type="button" value="Next" id={id} {...props}></Input>
          </Col>
        </Row>
      </div>
    );

export default Question;