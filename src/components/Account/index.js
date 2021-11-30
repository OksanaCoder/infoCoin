import React from 'react';
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap';
import userImg from '@assets/icons/user.svg';
import Preferences from '@components/Preferences';
import UserProfile from '@components/UserProfile';
import { Security } from '@components/Security';
import NonContent from '@components/NonContent';

const Account = () => {
  return (
    <>
      <div className="wrapper page">
        <Container className="my-3 d-flex">
          <img className="me-3" src={userImg} alt="" />
          <h4>Аккаунт</h4>
        </Container>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={7}>
                <Nav variant="pills" className="flex-column tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Стать рекламодателем</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Личные данные</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Безопасность</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      Предпочтительные категории контента
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Неприемлемый контент</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={5}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <UserProfile />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <UserProfile />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Security />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Preferences />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <NonContent />
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

export default Account;
