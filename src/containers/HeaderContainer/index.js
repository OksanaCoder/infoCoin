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
import wallet from "@assets/icons/wallet.svg";
import coins from "@assets/icons/coins.svg";
import settings from "@assets/icons/settings.svg";
import web from "@assets/icons/web.svg";
import headphones from "@assets/icons/headphones.svg";
import info from "@assets/icons/info.svg";
import doorOpen from "@assets/icons/door-open.svg";
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
          <Nav className="ml-auto flex-row-center-align">
            <Nav.Link>
              <img src={compass} className="icon-small" alt="" />
            </Nav.Link>
            <Nav.Link className="me-2 ms-4">
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
        
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='d-flex'>
                <div className="icon-small circle-user" alt="">
                  U
              </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                  <div className="icon-small circle-user" alt="">
                  U
                 </div>
                   <span>@User122434</span>
                   <p className="m-0">Баланс IC <img src={coins} alt=""/>
                     </p></Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                  <img src={wallet} className="me-3" alt=""/>
                    Кошелек
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={user} className="me-3" alt=""/>
                    Аккаунт
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={settings} className="me-3" alt=""/>
                    Настройки
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={web} className="me-3" alt=""/>
                    Кеш и данные
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={headphones} className="me-3" alt=""/>
                    Поддержка
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={info} className="me-3" alt=""/>
                    Информация
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <img src={doorOpen} className="me-3" alt=""/>
                    Выход
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderContainer;
