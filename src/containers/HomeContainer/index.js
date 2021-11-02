import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import ReactPlayer from "react-player";
import upload from "@assets/icons/upload.svg";
import arrowRight from "@assets/icons/arrow-right.svg";
import speaker from "@assets/icons/audio.svg";
import share from "@assets/icons/share.svg";
import eye from "@assets/icons/eye.svg";
import like from "@assets/icons/heart.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const HomeContainer = () => {
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
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}

            <Swiper>
              <SwiperSlide>
                <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
              </SwiperSlide>
              <SwiperSlide>
                <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
              </SwiperSlide>
        
            </Swiper>

            <Row className="flex-row-center-align mt-2">
              <Col lg={6} md={6} sm={6} xs={6}>
                <img src={speaker} alt="" />
              </Col>
              <Col lg={6} md={6} sm={6} xs={6} className="flex-end">
                <img src={share} alt="" className="icon-small ms-4" />
                <img src={eye} alt="" className="icon-small ms-4" />
                <img src={like} alt="" className="icon-small ms-4" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeContainer;
