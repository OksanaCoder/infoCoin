import React from "react";
import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import arrowDown from "@assets/icons/arrow-down.svg";
import arrowLong from '@assets/icons/arrow-r-long.svg';
import '@styles/components/Security.css'

const Security = () => {
  return (
    <>
      <Container className="m-mob"> 
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <h6>Ваши устройства</h6>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <h6>Входы с устройств</h6>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            iPhone 12 (User)
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            186.432.233.6:121
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            iPhone 10 (User)
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            186.432.233.6:121
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            iPhone 10R (User)
          </Col>

          <Col lg={6} md={6} sm={6} xs={6}>
            186.432.233.6:121
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6} className="text-center my-3">
            <img src={arrowDown} alt="" />
          </Col>

          <Col lg={6} md={6} sm={6} xs={6} className="text-center my-3">
            <img src={arrowDown} alt="" />
          </Col>
        </Row>
        <Row className='my-5'>
          <h6>Двухэтапная верификация</h6>
          <p>Двухэтапная верификация выполняется по номеру телефона</p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="+380123456789"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className='borderBlack'
            />
            <InputGroup.Text id="basic-addon2" className='btn-arrow'><img src={arrowLong} alt=""/></InputGroup.Text>
          </InputGroup>
        </Row>
      </Container>
    </>
  );
};

export default Security;
