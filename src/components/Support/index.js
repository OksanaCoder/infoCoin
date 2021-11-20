import React from 'react';
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap';
import headphones from '@assets/icons/headphones.svg';
import SupportApply from '@components/SupportApply';
import InformationCenter from '@components/InformationCenter';

const Support = () => {
  return (
    <div className="wrapper">
      <Container className="my-3 d-flex">
        <img className="me-3" src={headphones} alt="" />
        <h4>Поддержка</h4>
      </Container>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row
            style={{
              display: 'flex !important',
              alignItems: 'center !important',
            }}
          >
            <Col sm={7}>
              <Nav variant="pills" className="flex-column tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    Написать в службу поддержки
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Центр информации</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={5}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <SupportApply />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <InformationCenter />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Support;
