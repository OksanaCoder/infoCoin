import React from 'react';
import {
  Col,
  Container,
  Row,
  // InputGroup, FormControl
} from 'react-bootstrap';
import mode from '@assets/icons/schema.svg';
import '@styles/components/Security.css';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const Schema = () => {
    const setDarkMode = () => {
    // export function setLightTheme() {
    //   document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light')
    // }
    
    // export function setDarkTheme() {
    //   document.getElementsByTagName('body')[0].setAttribute('data-theme', 'dark')
    // }
      
     const mode = document.getElementsByTagName('body')[0].setAttribute('data-theme', 'dark');
     localStorage.setItem('mode', mode)
    
  }
  const setLightMode = () => {
   const mode = document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
   localStorage.setItem('mode', mode)
  }
  return (
    <>
      <Container className="m-mob flex-col-center">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h6>Тема приложения</h6>
          </Col>
        </Row>
        <RadioGroup
          aria-label="report"
          defaultValue="Пожаловаться"
          name="radio-buttons-group"
          //    value={complainValue}
          //    onChange={handleChangeReason}
        >
          <Row className="my-5 text-center m-auto row-col-sm">
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="d-flex justify-content-center flex-column my-3"
            >
              <img src={mode} alt="" width="100"  onClick={setLightMode}/>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Светлая"
              />
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="d-flex justify-content-center flex-column my-3"
            >
              <img src={mode} alt="" width="100"  onClick={setDarkMode}/>
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="Темная"
              />
            </Col>
            <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="d-flex justify-content-center flex-column margin-left"
          >
            <img src={mode} alt="" width="100"/>
            <FormControlLabel
              value="system"
              control={<Radio />}
              label="Системная"
             
            />
          </Col>
          </Row>
        </RadioGroup>
       
      </Container>
    </>
  );
};

export default Schema;
