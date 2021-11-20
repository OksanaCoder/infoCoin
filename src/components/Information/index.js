import React from 'react';
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap';
import info from '@assets/icons/info.svg';
import About from '@components/About';
import TermsUse from '@components/TermsUse';
import PrivacyPolicy from '@components/PrivacyPolicy';
import Copyright from '@components/Copyright';

const Information = () => {
  return (
    <div className="wrapper">
      <Container className="my-3 d-flex">
        <img className="me-3" src={info} alt="" />
        <h4>Информация</h4>
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
                  <Nav.Link eventKey="first">О InfoCoin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Условия пользования</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Политика конфиденциальности
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Авторские права</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={5}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <About />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <TermsUse />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <PrivacyPolicy />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Copyright />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Information;
