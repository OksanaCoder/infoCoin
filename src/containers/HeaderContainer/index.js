import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from "@assets/icons/logo.svg";
import compass from "@assets/icons/compass.svg";
import dropdown from "@assets/icons/burger.svg";
import user from "@assets/icons/user.svg";
import history from "@assets/icons/history.svg";
import category from "@assets/icons/buffer.svg";
import play from "@assets/icons/play.svg";
import add from "@assets/icons/group.svg";
import "@styles/components/HeaderContainer.css";

const HeaderContainer = () => {
  return (
    <>
      <Navbar className="navbarGrey">
        <Container>
          <Navbar.Brand to="/">
            <h1 className="logo">
              <img src={logo} alt="logo" className="me-2" />
              INFOCOIN
            </h1>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <img src={compass} className="icon-small" alt="" />
            </Nav.Link>
            <Nav.Link className="me-4 ms-4">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img src={dropdown} className="icon-small" alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <img src={history} className="me-3" alt=""/>
                    История</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                  <img src={category} className="me-3" alt=""/>
                    Категория
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={play} className="me-3" alt=""/>
                    Общий Плейлист
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={add} className="me-3" alt=""/>
                    Мой Плейлист
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link>
              <img src={user} className="icon-small" alt="" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderContainer;
