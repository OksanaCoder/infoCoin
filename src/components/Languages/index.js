import React from 'react';
import {
  Col,
  Container,
  Row,
  // InputGroup, FormControl
} from 'react-bootstrap';
// import arrowDown from "@assets/icons/arrow-down.svg";
// import arrowLong from "@assets/icons/arrow-r-long.svg";
import '@styles/components/Security.css';

const Languages = () => {
  return (
    <>
      <Container className="m-mob">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h6>Стиль уведомлений</h6>
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={6} md={6} sm={6} xs={6}>
            Русский (Ru)
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            Русский (Ru)
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            English (En)
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Languages;
