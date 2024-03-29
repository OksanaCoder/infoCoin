import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mode from "@assets/icons/schema.svg";
import "@styles/components/Security.css";
import { setThemeInBrowser } from "@utils/themeUtil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useDispatch, useSelector } from "react-redux";
import { setThemeInRedux } from '@redux_actions/auth'

const Schema = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.authentificationReducer.theme)

  function handleThemeChange(value) {
    setThemeInBrowser(value);
    dispatch(setThemeInRedux({theme: value}))
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
          name="radio-buttons-group"
          value={theme}
          onChange={(e) => handleThemeChange(e.target.value)}
        >
          <Row className="my-5 text-center m-auto row-col-sm">
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="d-flex justify-content-center flex-column my-3"
            >
              <img
                src={mode}
                alt=""
                width="100"
                onClick={() => handleThemeChange("light")}
              />
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
              <img
                src={mode}
                alt=""
                width="100"
                onClick={() => handleThemeChange("dark")}
              />
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
              <img
                src={mode}
                alt=""
                width="100"
                onClick={() => handleThemeChange("system")}
              />
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
