import React from 'react';
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap';
import web from '@assets/icons/web.svg';
import ClearCache from '@components/ClearCache';
import TrafficSavings from '@components/TrafficSavings';

const CacheAndData = () => {
  return (
    <div className="wrapper">
      <Container className="my-3 d-flex">
        <img className="me-3" src={web} alt="" />
        <h4>Кэш и сетевые данные</h4>
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
                  <Nav.Link eventKey="first">Очистить кэш приложений</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Экономия трафика</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={5}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ClearCache />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <TrafficSavings />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default CacheAndData;
