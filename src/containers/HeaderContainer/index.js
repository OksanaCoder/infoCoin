import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import { ReactComponent as Compass } from '@assets/icons/compass.svg';
import { ReactComponent as DropdownIcon } from '@assets/icons/burger.svg';
import { ReactComponent as User } from '@assets/icons/user.svg';
import { ReactComponent as History } from '@assets/icons/history.svg';
import { ReactComponent as Category } from '@assets/icons/buffer.svg';
import { ReactComponent as Play } from '@assets/icons/play.svg';
import { ReactComponent as Add } from '@assets/icons/group.svg';
import { ReactComponent as Wallet } from '@assets/icons/wallet.svg';
import { ReactComponent as Coins } from '@assets/icons/coins.svg';
import { ReactComponent as Settings } from '@assets/icons/settings.svg';
import { ReactComponent as Web } from '@assets/icons/web.svg';
import { ReactComponent as Headphones } from '@assets/icons/headphones.svg';
import { ReactComponent as Info } from '@assets/icons/info.svg';
import { ReactComponent as DoorOpen } from '@assets/icons/door-open.svg';
import '@styles/components/HeaderContainer.css';

const HeaderContainer = () => {
  return (
    <>
      <Navbar className="navbarGrey">
        <Container>
          <Link to="/" className="text-decoration-none d-flex">
            <Navbar.Brand to="/">
              <h1 className="logo">
                <Logo className="me-2" />
                INFOCOIN
              </h1>
            </Navbar.Brand>
          </Link>
          <Nav className="ml-auto flex-row-center-align">
            <Nav.Link>
              <Compass className="icon-small" />
            </Nav.Link>
            <Nav.Link className="me-2 ms-4">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <DropdownIcon className="icon-small" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/history" className="text-decoration-none">
                    <Dropdown.Item href="#/action-1">
                      <History className="me-3" />
                      История
                    </Dropdown.Item>
                  </Link>
                  <Link
                    to="/categories"
                    className="text-decoration-none d-flex"
                  >
                    <Dropdown.Item href="#/action-2">
                      <Category className="me-3" />
                      Категория
                    </Dropdown.Item>
                  </Link>
                  <Dropdown.Item href="#/action-3">
                    <Play className="me-3" />
                    Общий Плейлист
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <Add className="me-3" />
                    Мой Плейлист
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="d-flex"
                >
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
                    <p className="m-0 version">
                      Баланс IC{' '}
                      <span>
                        12.3 <Coins />
                      </span>
                    </p>
                  </Dropdown.Item>
                  <Link to="/wallet" className="text-decoration-none d-flex">
                    <Dropdown.Item href="#/action-2">
                      <Wallet className="me-3" />
                      Кошелек
                    </Dropdown.Item>
                  </Link>
                  <Link to="/account" className="text-decoration-none">
                    <Dropdown.Item href="#/action-3">
                      <User className="me-3" />
                      Аккаунт
                    </Dropdown.Item>
                  </Link>
                  <Link to="/settings" className="text-decoration-none">
                    <Dropdown.Item href="#/action-3">
                      <Settings className="me-3" />
                      Настройки
                    </Dropdown.Item>
                  </Link>
                  <Link to="/cache-and-data" className="text-decoration-none">
                    <Dropdown.Item href="#/action-3">
                      <Web className="me-3" />
                      Кеш и данные
                    </Dropdown.Item>
                  </Link>
                  <Link to="/support" className="text-decoration-none">
                    <Dropdown.Item href="#/action-3">
                      <Headphones className="me-3" />
                      Поддержка
                    </Dropdown.Item>
                  </Link>
                  <Link to="/info" className="text-decoration-none">
                    <Dropdown.Item href="#/action-3">
                      <Info className="me-3" />
                      Информация
                    </Dropdown.Item>
                  </Link>
                  <Link to="/exit" className="text-decoration-none">
                    <Dropdown.Item href="#/action-3">
                      <DoorOpen className="me-3" />
                      Выход
                    </Dropdown.Item>
                  </Link>
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
