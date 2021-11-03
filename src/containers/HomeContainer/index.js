import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import ReactPlayer from "react-player";
import upload from "@assets/icons/upload.svg";
import arrowRight from "@assets/icons/arrow-right.svg";
import speaker from "@assets/icons/audio.svg";
import share from "@assets/icons/share.svg";
import eye from "@assets/icons/eye.svg";
import like from "@assets/icons/heart.svg";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

const HomeContainer = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="wrapper">
        <Container className="flex-row-center">
          <div className="flex-column-align-start">
            <Row>
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="flex-row-center-align info"
              >
                <img src={upload} alt="" className="me-3" />
                <div className="me-5">
                  <h2 className="title">Red Bull Racing</h2>
                  <h6 className="hashtag">#drift#redbull#rbwings#rbenergy</h6>
                </div>
                <img className="icon-small" src={arrowRight} alt="" />
              </Col>
            </Row>
            <ReactPlayer
              // playing
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <Row className="flex-row-center-align mt-2">
              <Col lg={6} md={6} sm={6} xs={6}>
                <img src={speaker} alt="" />
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="flex-end">
                <img src={share} alt="" className="icon-small ms-4" />
                <img
                  src={eye}
                  alt=""
                  className="icon-small ms-4"
                  onClick={() => setModalShow(true)}
                />
                <img src={like} alt="" className="icon-small ms-4" />
              </Col>
              <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <div className="text-center">
                    <img src={eye} alt="" />
                    <h6 className="my-2">Неприемлимый контент</h6>
                  </div>
                  <Form className="text-left my-4">
                    <div className="mb-3 text-left">
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="gender"
                          defaultValue="Пожаловаться"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Пожаловаться"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Больше не показывать"
                          />
                         
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="flex-row-center-align">
                  <Button
                    onClick={() => setModalShow(false)}
                    className="btn-simple text-black"
                  >
                    Отменить
                  </Button>
                  <Button className="btn-simple text-black">Продолжить</Button>
                </Modal.Footer>
              </Modal>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeContainer;
