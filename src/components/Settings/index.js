import React from 'react';
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap';
import settings from '@assets/icons/settings.svg';
// import Preferences from "@components/Preferences";
// import Security from '@components/Security';
import Languages from '@components/Languages';
import Notifications from '@components/Notifications';
import Schema from '@components/Schema';

const Settings = () => {
  return (
    <>
      <div className="wrapper page">
        <Container className="my-3 d-flex">
          <img className="me-3" src={settings} alt="" />
          <h4>Настройки</h4>
        </Container>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={7} className="leftBar">
                <Nav variant="pills" className="flex-column tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Уведомления</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Язык приложения</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      Цветовая схема приложения
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={5}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Notifications />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Languages />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Schema />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </>
  );
};

export default Settings;
