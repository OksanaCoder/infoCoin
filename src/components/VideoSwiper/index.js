
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import arrowRight from "@assets/icons/arrow-right.svg";
import share from "@assets/icons/share.svg";
import eyeOrange from "@assets/icons/eye-orange.svg";
import eye from "@assets/icons/eye.svg";
import like from "@assets/icons/heart.svg";
import video from "@assets/video/video.mp4";
import video2 from "@assets/video/video-2.mp4";

import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import VideoItem from '@components/VideoItem';

const VideoSwiper = () => {
  
  
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Swiper
        // spaceBetween={50}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex-column-align-start">
            <Row>
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="flex-row-center-align info"
              >
                <div className="me-5 flex-row-center-align">
                  <img
                    src="https://www.zvuki.ru/images/photo/51/51227.jpg"
                    alt=""
                    className="profile-icon"
                  />
                  <div className="text-left">
                    <h2 className="title">Beyonce</h2>
                    <h6 className="hashtag">#beyonce#singer#usa#music</h6>
                  </div>
                </div>
                <img className="icon-small" src={arrowRight} alt="" />
              </Col>
            </Row>
            <Video
              autoPlay
              muted
              loop
              controls={["PlayPause", "Volume"]}
              // poster="https://eba.com.ua/wp-content/uploads/2017/11/rbsport1_mar08_prev-1.jpg"
              onCanPlayThrough={() => {
      
              }}
            >
              <source src={video} type="video/MP4" className="video"/>

              {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
            </Video>
            <Row className="flex-row-center-align mt-2">
              <Col lg={6} md={6} sm={6} xs={6}>
                {/* <img src={speaker} alt="" />  */}
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
                    <img src={eyeOrange} alt=""/>
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
                  <Button className="btn-simple text-black">
                    Продолжить
                  </Button>
                </Modal.Footer>
              </Modal>
            </Row>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex-column-align-start">
            <Row>
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="flex-row-center-align info"
              >
                <div className="me-5 flex-row-center-align">
                  <img
                    src="https://hiphop4real.com/wp-content/uploads/2018/07/Coolio.jpg"
                    alt=""
                    className="profile-icon"
                  />
                  <div className="text-left">
                    <h2 className="title">Coolio</h2>
                    <h6 className="hashtag">#Coolio#singer#usa#music</h6>
                  </div>
                </div>
                <img className="icon-small" src={arrowRight} alt="" />
              </Col>
            </Row>
             <VideoItem />
            <Row className="flex-row-center-align mt-2">
              <Col lg={6} md={6} sm={6} xs={6}>
                {/* <img src={speaker} alt="" />  */}
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
                    <img src={eyeOrange} alt="" />
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
                  <Button className="btn-simple text-black">
                    Продолжить
                  </Button>
                </Modal.Footer>
              </Modal>
            </Row>
          </div>
        </SwiperSlide>
      </Swiper>
    )
}

export default VideoSwiper