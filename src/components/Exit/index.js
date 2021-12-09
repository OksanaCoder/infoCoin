import React from 'react';
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap';
import doorOpen from '@assets/icons/door-open.svg';
import ChangeAccount from '../ChangeAccount/index';
import { useHistory } from "react-router-dom";


const Exit = () => {
  let history = useHistory();

  const logOut = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      history.replace("/auth");
  };


  return (
    <div className="wrapper page">
      <Container className="my-3 d-flex">
        <img className="me-3" src={doorOpen} alt="" />
        <h4>Выход</h4>
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
                  <Nav.Link onClick={logOut} eventKey="first">Сменить аккаунт</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <button onClick={logOut} className="delete">Выйти из аккаунта</button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={5}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ChangeAccount />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Exit;
