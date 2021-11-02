import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '@assets/icons/logo.svg'
import compass from '@assets/icons/compass.svg'
import dropdown from '@assets/icons/burger.svg'
import user from '@assets/icons/user.svg'
import '@styles/components/HeaderContainer.css';


const HeaderContainer = () => {
  return (
    <>
      <Navbar className='navbarGrey'>
        <Container>
          <Navbar.Brand to='/'>
             <h1 className='logo'><img src={logo} alt="logo" className='me-2'/>
              INFOCOIN</h1></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link ><img src={compass} className='icon-small' alt=""/></Nav.Link>
            <Nav.Link  className='me-4 ms-4'><img src={dropdown} className='icon-small' alt=""/></Nav.Link>
            <Nav.Link ><img src={user} className='icon-small' alt=""/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderContainer;
