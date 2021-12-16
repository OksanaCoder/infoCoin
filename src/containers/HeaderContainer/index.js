import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/icons/logo.svg";
import { ReactComponent as Compass } from "@assets/icons/compass.svg";
import { ReactComponent as User } from "@assets/icons/user.svg";
import { ReactComponent as History } from "@assets/icons/history.svg";
import { ReactComponent as Category } from "@assets/icons/buffer.svg";
import { ReactComponent as Play } from "@assets/icons/play.svg";
import { ReactComponent as Add } from "@assets/icons/group.svg";
import { ReactComponent as Wallet } from "@assets/icons/wallet.svg";
import { ReactComponent as Coins } from "@assets/icons/coins.svg";
import { ReactComponent as Settings } from "@assets/icons/settings.svg";
import { ReactComponent as Web } from "@assets/icons/web.svg";
import { ReactComponent as Headphones } from "@assets/icons/headphones.svg";
import { ReactComponent as Info } from "@assets/icons/info.svg";
import { ReactComponent as DoorOpen } from "@assets/icons/door-open.svg";
import "@styles/components/HeaderContainer.css";
import { Burger } from "@components/Burger";
import logoMain from "@assets/icons/logo-home.svg";
import logoLightMode from "@assets/icons/logo-light.svg";
import { getDataTheme } from "@utils/themeUtil";

const HeaderContainer = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleToggleMenu = (evt) => {
    evt.preventDefault();
    evt.target && setIsOpenMenu(!isOpenMenu);
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const dataTheme = getDataTheme();
    setTheme(dataTheme);
  }, []);

  return (
    <>
      <Navbar className="navbarGrey page">
        <Container>
          <Link to="/" className="text-decoration-none d-flex">
            <Navbar.Brand to="/">
              <h1 className="logo">
                {theme === "dark" ? (
                  <img
                    src={logoLightMode}
                    alt=""
                    width="70%"
                    style={{ marginLeft: "42px", marginTop: "20px" }}
                  />
                ) : (
                  <img
                    src={logoMain}
                    alt=""
                    width="70%"
                    style={{ marginLeft: "42px", marginTop: "20px" }}
                  />
                )}
                INFOCOIN
              </h1>
            </Navbar.Brand>
          </Link>
          <Nav className="ml-auto flex-row-center-align">
            <Nav.Link as="div">
              <Compass className="icon-small" />
            </Nav.Link>
            <Nav.Link as="div" className="me-2 ms-4">
              <Dropdown onToggle={(show) => setIsOpenMenu(show)}>
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
                    <div className="icon-small circle-user" alt="">
                      U
                    </div>
                    <span>@User122434</span>
                    <p className="m-0 version">
                      Баланс IC{" "}
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
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderContainer;
