import React, { useState } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import { ReactComponent as Compass } from '@assets/icons/compass.svg';
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
import { Burger } from '@components/Burger';
import { connect } from 'react-redux';
import logoMain from '@assets/icons/logo-home.svg';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import facebook from '@assets/icons/facebook.svg'
import twitter from '@assets/icons/twitter.svg'
import insta from '@assets/icons/insta.svg'
import youtube from '@assets/icons/youtube.svg'


const HeaderContainer = ({ user }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleToggleMenu = evt => {
    evt.preventDefault();
    evt.target && setIsOpenMenu(!isOpenMenu);
  };
  return (
    <Col lg={3} md={3} sm={3}>
      <ProSidebar>
        <SidebarHeader>
          <Link to="/" className="text-decoration-none d-flex">
            <Navbar.Brand to="/">
              {/* <h1 className="logo">
                <Logo className="me-2" />
                INFOCOIN
              </h1> */}
              <img
                src={logoMain}
                alt=""
                width="70%"
                style={{ marginLeft: '10px', marginTop: '20px' }}
              />
            </Navbar.Brand>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          {/* <Nav> */}
          {!user ? (
            <>
              <Nav.Item>
                <div className="icon-small circle-user" alt="">
                  U
                </div>
                <span>@User122434</span>
              </Nav.Item>
              <br></br>
              <Link to="/" className="text-decoration-none my-2">
              <Nav.Item as="p" className="my-2">
                {/* <Play className="me-3" /> */}
                Общий Плейлист
              </Nav.Item>
              </Link>
              <Nav.Item as="p" className="my-2">
                {/* <Add className="me-3" /> */}
                Мой Плейлист
              </Nav.Item>
              <Link to="/history" className="text-decoration-none my-2">
                <Nav.Item as="p">
                  {/* <History className="me-3" /> */}
                  История
                </Nav.Item>
              </Link>

              <Link
                to="/categories"
                className="text-decoration-none d-flex my-2"
              >
                <Nav.Item as="p">
                  {/*<Category className="me-3" /> */}
                  Категории
                </Nav.Item>
              </Link>
              <Link to="/interesting" className="text-decoration-none d-flex">
                <Nav.Item as="p">
                  {/*<Category className="me-3" /> */}
                  Интересное
                </Nav.Item>
              </Link>
              <br></br>
              {/* <Nav.Item>
                    <p className="m-0 version">
                      Баланс IC{' '}
                      <span>
                        12.3 <Coins />
                      </span>
                    </p>
                  </Nav.Item> */}
              <Link to="/wallet" className="text-decoration-none d-flex my-2">
                <Nav.Item as="p">
                  {/* <Wallet className="me-3" /> */}
                  Мой кошелек
                </Nav.Item>
              </Link>

              <Link to="/settings" className="text-decoration-none my-2">
                <Nav.Item as="p">
                  {/* <Settings className="me-3" /> */}
                  Настройки
                </Nav.Item>
              </Link>
              <Link to="/info" className="text-decoration-none my-2">
                <Nav.Item as="p">
                  {/* <Info className="me-3" /> */}
                  Информация
                </Nav.Item>
              </Link>
              <Link to="/support" className="text-decoration-none my-2">
                <Nav.Item as="p">
                  {/* <Headphones className="me-3" /> */}
                  Поддержка
                </Nav.Item>
              </Link>

              {/* <Link to="/account" className="text-decoration-none">
                <Nav.Item as="p">
                  <User className="me-3" />
                  Аккаунт
                </Nav.Item>
              </Link>
              <Link to="/cache-and-data" className="text-decoration-none">
                <Nav.Item as="p">
                  <Web className="me-3" />
                  Кеш и данные
                </Nav.Item>
              </Link>
              <Link to="/support" className="text-decoration-none">
                <Nav.Item as="p">
                  <Headphones className="me-3" />
                  Поддержка
                </Nav.Item>
              </Link>
              <Link to="/info" className="text-decoration-none">
                <Nav.Item as="p">
                  <Info className="me-3" />
                  Информация
                </Nav.Item>
              </Link>
              <Link to="/exit" className="text-decoration-none">
                <Nav.Item as="p">
                  <DoorOpen className="me-3" />
                  Выход
                </Nav.Item>
              </Link> */}
            </>
          ) : (
            <Link to="/auth" className="text-decoration-none">
              <Nav.Link as="div" className="ms-2">
                <User className="icon-small" />
                <small>Вход/Регистрация</small>
              </Nav.Link>
            </Link>
          )}
        </SidebarContent>
        <SidebarFooter className='p-4'>
          <Row>
            <Col className='my-3'>
              <img alt="" src={facebook}/>
            </Col>
            <Col className='my-3'>
              {' '}
              <img alt="" src={twitter} />
            </Col>
            <Col className='my-3'>
              {' '}
              <img alt="" src={insta} />
            </Col>
            <Col className='my-3'>
              {' '}
              <img alt="" src={youtube} />
            </Col>
          </Row>
          <Row>
            <small className='text-dark'>Copyright © INFOCOIN INC. 2021 All rights reserved.</small>
          </Row>
        </SidebarFooter>
      </ProSidebar>
      {/* <Navbar className="navbarGrey page">
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
            <Nav.Link as="div">
              <Compass className="icon-small" />
            </Nav.Link>

            {user? (
<>
            <Nav.Link as="div" className="me-2 ms-4">
              <Dropdown onToggle={show => setIsOpenMenu(show)}>
                <Dropdown.Toggle
                  as="div"
                  split="false"
                  variant="success"
                  id="dropdown-basic"
                >
                  <Burger
                    isOpenMenu={isOpenMenu}
                    handleToggleMenu={handleToggleMenu}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="burger-dropdown-menu">
                  <Link to="/history" className="text-decoration-none">
                    <Dropdown.Item as="p">
                      <History className="me-3" />
                      История
                    </Dropdown.Item>
                  </Link>
                  <Link
                    to="/categories"
                    className="text-decoration-none d-flex"
                  >
                    <Dropdown.Item as="p">
                      <Category className="me-3" />
                      Категория
                    </Dropdown.Item>
                  </Link>
                  <Dropdown.Item as="p">
                    <Play className="me-3" />
                    Общий Плейлист
                  </Dropdown.Item>
                  <Dropdown.Item as="p">
                    <Add className="me-3" />
                    Мой Плейлист
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link as="div">
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

                <Dropdown.Menu className="user-dropdown-menu">
                  <Dropdown.Item href="#/action-1">
                    {user ? (
                      <>
                       <div className="icon-small circle-user" alt="">
                       U
                     </div>
                     <span>@User122434</span>
                     </>

                    ):(null)}
                   

                    <p className="m-0 version">
                      Баланс IC{' '}
                      <span>
                        12.3 <Coins />
                      </span>
                    </p>
                  </Dropdown.Item>
                  <Link to="/wallet" className="text-decoration-none d-flex">
                    <Dropdown.Item as="p">
                      <Wallet className="me-3" />
                      Кошелек
                    </Dropdown.Item>
                  </Link>
                  <Link to="/account" className="text-decoration-none">
                    <Dropdown.Item as="p">
                      <User className="me-3" />
                      Аккаунт
                    </Dropdown.Item>
                  </Link>
                  <Link to="/settings" className="text-decoration-none">
                    <Dropdown.Item as="p">
                      <Settings className="me-3" />
                      Настройки
                    </Dropdown.Item>
                  </Link>
                  <Link to="/cache-and-data" className="text-decoration-none">
                    <Dropdown.Item as="p">
                      <Web className="me-3" />
                      Кеш и данные
                    </Dropdown.Item>
                  </Link>
                  <Link to="/support" className="text-decoration-none">
                    <Dropdown.Item as="p">
                      <Headphones className="me-3" />
                      Поддержка
                    </Dropdown.Item>
                  </Link>
                  <Link to="/info" className="text-decoration-none">
                    <Dropdown.Item as="p">
                      <Info className="me-3" />
                      Информация
                    </Dropdown.Item>
                  </Link>
                  <Link to="/exit" className="text-decoration-none">
                    <Dropdown.Item as="p">
                      <DoorOpen className="me-3" />
                      Выход
                    </Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            </>
          ) : (
            <Link to="/auth" className="text-decoration-none">
              <Nav.Link as="div" className="ms-2">
                  <User className="icon-small" /><small>Вход/Регистрация</small> 
              </Nav.Link>
            </Link>
          )
          }
          </Nav>
        </Container>
      </Navbar> */}
    </Col>
  );
};

const mapStateToProps = state => {
  return {
    user: state.authentificationReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
