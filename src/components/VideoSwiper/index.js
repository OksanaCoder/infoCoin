import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import arrowRight from "@assets/icons/arrow-right.svg";
import share from "@assets/icons/share.svg";
import eyeOrange from "@assets/icons/eye-orange.svg";
import eye from "@assets/icons/eye.svg";
import like from "@assets/icons/heart.svg";
import video from "@assets/video/video.mp4";
import video2 from "@assets/video/video-2.mp4";
import speaker from "@assets/icons/audio.svg";

import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
import Stories from "react-insta-stories";

import VideoItem from "@components/VideoItem";

var settings = {
  dots: false,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <></>,
  nextArrow: <></>,
};

const VideoSwiper = () => {
  const [reportValue, setReportValue] = useState("complain");
  const [complainValue, setComplainValue] = useState("reason1");
  const [showComplain, setShowComplain] = useState(false);
  const swiperRef = useRef();

  const handleChangeReport = (event) => {
    console.log(event.target.value, "report");
    setReportValue(event.target.value);
  };
  const handleChangeReason = (event) => {
    console.log(event.target.value, "report");
    setComplainValue(event.target.value);
  };
  const handleSubmit = () => {
    if (showComplain === true) {
      //API call
      setShowComplain(null);
    } else if (showComplain === false) {
      if (reportValue === "complain") {
        setShowComplain(true);
      } else {
        // API CALL
      }
    } else if (showComplain === null) {
      setShowComplain(false);
      setReportValue("complain");
      setComplainValue("reason1");
    }
  };
  const handleResetForm = () => {
    setModalShow(false);
    setShowComplain(false);
    setReportValue("complain");
    setComplainValue("reason1");
  };

  const [modalShow, setModalShow] = React.useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const stories = [
    {
      url: "http://109.87.202.140/ads/1.mp4",
      type: "video/mp4",
      header: "Beyonce",
      profileImage: "https:www.zvuki.ru/images/photo/51/51227.jpg",
    },
    { url: "http://109.87.202.140/ads/2.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/3.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/4.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/5.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/6.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/7.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/8.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/9.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/10.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/11.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/12.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/13.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/14.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/15.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/16.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/17.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/18.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/19.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/20.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/21.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/22.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/23.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/24.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/25.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/26.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/27.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/28.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/29.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/30.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/31.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/32.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/33.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/34.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/35.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/36.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/37.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/38.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/39.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/40.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/41.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/42.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/43.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/44.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/45.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/46.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/47.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/48.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/49.mp4", type: "video/mp4" },
    { url: "http://109.87.202.140/ads/50.mp4", type: "video/mp4" },
  ];
  return (
    //    <div className="flex-column-align-start">
    //       <Row>
    //         <Col
    //           lg={6}
    //           md={6}
    //           sm={12}
    //           xs={12}
    //           className="flex-row-center-align info"
    //         >
    //           <div className="me-5 flex-row-center-align">
    //             <img
    //               src="https:www.zvuki.ru/images/photo/51/51227.jpg"
    //               alt=""
    //               className="profile-icon"
    //             />
    //             <div className="text-left">
    //               <h2 className="title">Beyonce</h2>
    //               <h6 className="hashtag">#beyonce#singer#usa#music</h6>
    //             </div>
    //           </div>
    //           <img className="icon-small" src={arrowRight} alt="" />
    //         </Col>
    //       </Row>
    // <div>

    // <Video

    //         loop
    //         controls={["PlayPause", "Volume"]}
    //         autoPlay
    //         muted
    //         onCanPlayThrough={() => {

    //         }}
    //       >
    //         <source src="http://109.87.202.140/ads/2.mp4" type="video/MP4" className="video"/>
    //         </Video>
    //         {/* <track label="English" kind="subtitles" srcLang="en" src="http:source.vtt" default />

    //     {/* <div className='video'>
    //       <Stories
    //         isPaused={true}
    //         loop={true}
    //         type={video}
    //         stories={stories}
    //         defaultInterval={1500}
    //         width={700}
    //         height={400}

    //     /> */}
    //     {/* </div> */}
    //       <Row className="flex-row-center-align mt-2">
    //          <Col lg={6} md={6} sm={6} xs={6}>
    //            <img src={speaker} alt="" />
    //          </Col>
    //          <Col lg={6} md={6} sm={6} xs={6} className="flex-end">
    //            <img src={share} alt="" className="icon-small ms-4" />
    //            <img
    //              src={eye}
    //              alt=""
    //              className="icon-small ms-4"
    //              onClick={() => setModalShow(true)}
    //            />
    //            <img src={like} alt="" className="icon-small ms-4" />
    //          </Col>
    //          <Modal
    //            show={modalShow}
    //            onHide={() => setModalShow(false)}
    //            size="lg"
    //            aria-labelledby="contained-modal-title-vcenter"
    //            centered
    //          >
    //            <Modal.Header closeButton></Modal.Header>
    //            <Modal.Body>
    //              <div className="text-center">
    //                <img src={eyeOrange} alt=""/>
    //                { (showComplain === true || showComplain === false) && <h6 className="my-2">Неприемлимый контент</h6>}
    //                { showComplain === null && <h6 className="my-2">Спасибо !</h6>}
    //              </div>
    //              <Form className="text-left my-4">
    //                <div className="mb-3 text-left">
    //                  <FormControl component="fieldset">
    //                   { showComplain === false && <> <RadioGroup
    //                      aria-label="report"
    //                      defaultValue="Пожаловаться"
    //                      name="radio-buttons-group"
    //                      value={complainValue}
    //                      onChange={handleChangeReason}
    //                    >
    //                      <FormControlLabel
    //                        value="complain"
    //                        control={<Radio />}
    //                        label="Пожаловаться"
    //                      />
    //                      <FormControlLabel
    //                        value="showOff"
    //                        control={<Radio />}
    //                        label="Больше не показывать"
    //                      />
    //                    </RadioGroup> </> }
    //                   { showComplain === true && <RadioGroup
    //                      aria-label="reasonComplain"
    //                      defaultValue="Причина"
    //                      name="radio-buttons-group"
    //                      value={reportValue}
    //                      onChange={handleChangeReport}
    //                    >
    //                      <FormControlLabel
    //                        value="reason1"
    //                        control={<Radio />}
    //                        label="Причина"
    //                      />
    //                      <FormControlLabel
    //                        value="reason2"
    //                        control={<Radio />}
    //                        label="Причина"
    //                      />
    //                       <FormControlLabel
    //                        value="reason3"
    //                        control={<Radio />}
    //                        label="Причина"
    //                      />
    //                      <FormControlLabel
    //                        value="reason4"
    //                        control={<Radio />}
    //                        label="Причина"
    //                      />
    //                    </RadioGroup> }
    //                   { showComplain === null &&  <h6>Вы помогаете нам сделать
    //                       Infocoin лучше</h6> }

    //                  </FormControl>

    //                </div>

    //              </Form>
    //            </Modal.Body>
    //            <Modal.Footer className="flex-row-center-align">

    //               {showComplain === null ?  <Button
    //                onClick={handleResetForm}
    //                className="btn-simple text-black"
    //              >
    //                Вернуться на главную
    //              </Button> : (<>
    //                    <Button
    //                    onClick={() => setModalShow(false)}
    //                    className="btn-simple text-black"
    //                  >
    //                    Отменить
    //                  </Button>
    //                  <Button className="btn-simple text-black" onClick={handleSubmit}>
    //                    Продолжить
    //                  </Button>
    //                  </>
    //              )}

    //            </Modal.Footer>
    //          </Modal>
    //        </Row>
    //      </div>
    // </div>

    // //   <div className="flex-column-align-start">
    // //         <Row>
    // //           <Col
    // //             lg={6}
    // //             md={6}
    // //             sm={12}
    // //             xs={12}
    // //             className="flex-row-center-align info"
    // //           >
    // //             <div className="me-5 flex-row-center-align">
    // //               <img
    // //                 src="https:www.zvuki.ru/images/photo/51/51227.jpg"
    // //                 alt=""
    // //                 className="profile-icon"
    // //               />
    // //               <div className="text-left">
    // //                 <h2 className="title">Beyonce</h2>
    // //                 <h6 className="hashtag">#beyonce#singer#usa#music</h6>
    // //               </div>
    // //             </div>
    // //             <img className="icon-small" src={arrowRight} alt="" />
    // //           </Col>
    // //         </Row>
    // //   <div>
    // //   <Video

    // //           loop
    // //           controls={["PlayPause", "Volume"]}
    // //           autoPlay
    // //           muted
    // //           onCanPlayThrough={() => {

    // //           }}
    // //         >
    // //           <source src={video} type="video/MP4" className="video"/>

    // //           {/* <track label="English" kind="subtitles" srcLang="en" src="http:source.vtt" default /> */}
    // //         </Video>
    // //         <Row className="flex-row-center-align mt-2">
    // //            <Col lg={6} md={6} sm={6} xs={6}>
    // //              {/* <img src={speaker} alt="" />  */}
    // //            </Col>
    // //            <Col lg={6} md={6} sm={6} xs={6} className="flex-end">
    // //              <img src={share} alt="" className="icon-small ms-4" />
    // //              <img
    // //                src={eye}
    // //                alt=""
    // //                className="icon-small ms-4"
    // //                onClick={() => setModalShow(true)}
    // //              />
    // //              <img src={like} alt="" className="icon-small ms-4" />
    // //            </Col>
    // //            {/* <Modal
    // //              show={modalShow}
    // //              onHide={() => setModalShow(false)}
    // //              size="lg"
    // //              aria-labelledby="contained-modal-title-vcenter"
    // //              centered
    // //            >
    // //              <Modal.Header closeButton></Modal.Header>
    // //              <Modal.Body>
    // //                <div className="text-center">
    // //                  <img src={eyeOrange} alt=""/>
    // //                  <h6 className="my-2">Неприемлимый контент</h6>
    // //                </div>
    // //                <Form className="text-left my-4">
    // //                  <div className="mb-3 text-left">
    // //                    <FormControl component="fieldset">
    // //                      <RadioGroup
    // //                        aria-label="gender"
    // //                        defaultValue="Пожаловаться"
    // //                        name="radio-buttons-group"
    // //                      >
    // //                        <FormControlLabel
    // //                          value="female"
    // //                          control={<Radio />}
    // //                          label="Пожаловаться"
    // //                        />
    // //                        <FormControlLabel
    // //                          value="male"
    // //                          control={<Radio />}
    // //                          label="Больше не показывать"
    // //                        />
    // //                      </RadioGroup>
    // //                    </FormControl>
    // //                  </div>
    // //                </Form>
    // //              </Modal.Body>
    // //              <Modal.Footer className="flex-row-center-align">
    // //                <Button
    // //                  onClick={() => setModalShow(false)}
    // //                  className="btn-simple text-black"
    // //                >
    // //                  Отменить
    // //                </Button>
    // //                <Button className="btn-simple text-black">
    // //                  Продолжить
    // //                </Button>
    // //              </Modal.Footer>
    // //            </Modal> */}
    // //          </Row>
    // //        </div>
    // //   </div>

    // // </Slider>

    <Swiper
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {stories?.map((i) => {
        return (
          <SwiperSlide>
            {({ isActive }) => (
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
                        src="https:www.zvuki.ru/images/photo/51/51227.jpg"
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
                {isActive ? (
                  <Video
                    autoPlay={true}
                    muted={false}
                    loop={false}
                    controls={["PlayPause", "Volume"]}
                    // poster="https:eba.com.ua/wp-content/uploads/2017/11/rbsport1_mar08_prev-1.jpg"
                    onCanPlayThrough={() => {
                      console.log("onCanPlayThrough");
                    }}
                    onEnded={() => {
                      swiperRef.current.slideNext();
                      console.log("ended, now auto slide right");
                    }}
                  >
                    <source src={i.url} type="video/MP4" className="video" />

                    {/* <track label="English" kind="subtitles" srcLang="en" src="http:source.vtt" default /> */}
                  </Video>
                ) : (
                  <Video
                    autoPlay={false}
                    muted={true}
                    loop={false}
                    controls={["PlayPause", "Volume"]}
                    // poster="https:eba.com.ua/wp-content/uploads/2017/11/rbsport1_mar08_prev-1.jpg"
                  >
                    <source src={i.url} type="video/MP4" className="video" />

                    {/* <track label="English" kind="subtitles" srcLang="en" src="http:source.vtt" default /> */}
                  </Video>
                )}

                {/* <ReactPlayer playing url="http://localhost:3001/video.mp4" /> */}

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
                        {(showComplain === true || showComplain === false) && (
                          <h6 className="my-2">Неприемлимый контент</h6>
                        )}
                        {showComplain === null && (
                          <h6 className="my-2">Спасибо !</h6>
                        )}
                      </div>
                      <Form className="text-left my-4">
                        <div className="mb-3 text-left">
                          <FormControl component="fieldset">
                            {showComplain === false && (
                              <>
                                {" "}
                                <RadioGroup
                                  aria-label="report"
                                  defaultValue="Пожаловаться"
                                  name="radio-buttons-group"
                                  value={complainValue}
                                  onChange={handleChangeReason}
                                >
                                  <FormControlLabel
                                    value="complain"
                                    control={<Radio />}
                                    label="Пожаловаться"
                                  />
                                  <FormControlLabel
                                    value="showOff"
                                    control={<Radio />}
                                    label="Больше не показывать"
                                  />
                                </RadioGroup>{" "}
                              </>
                            )}
                            {showComplain === true && (
                              <RadioGroup
                                aria-label="reasonComplain"
                                defaultValue="Причина"
                                name="radio-buttons-group"
                                value={reportValue}
                                onChange={handleChangeReport}
                              >
                                <FormControlLabel
                                  value="reason1"
                                  control={<Radio />}
                                  label="Причина"
                                />
                                <FormControlLabel
                                  value="reason2"
                                  control={<Radio />}
                                  label="Причина"
                                />
                                <FormControlLabel
                                  value="reason3"
                                  control={<Radio />}
                                  label="Причина"
                                />
                                <FormControlLabel
                                  value="reason4"
                                  control={<Radio />}
                                  label="Причина"
                                />
                              </RadioGroup>
                            )}
                            {showComplain === null && (
                              <h6>Вы помогаете нам сделать Infocoin лучше</h6>
                            )}
                          </FormControl>
                        </div>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer className="flex-row-center-align">
                      {showComplain === null ? (
                        <Button
                          onClick={handleResetForm}
                          className="btn-simple text-black"
                        >
                          Вернуться на главную
                        </Button>
                      ) : (
                        <>
                          <Button
                            onClick={() => setModalShow(false)}
                            className="btn-simple text-black"
                          >
                            Отменить
                          </Button>
                          <Button
                            className="btn-simple text-black"
                            onClick={handleSubmit}
                          >
                            Продолжить
                          </Button>
                        </>
                      )}
                    </Modal.Footer>
                  </Modal>
                </Row>
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
    //   //    <SwiperSlide>
    //   //      <div className="flex-column-align-start">
    //   //        <Row>
    //   //          <Col
    //   //            lg={6}
    //   //            md={6}
    //   //            sm={12}
    //   //            xs={12}
    //   //            className="flex-row-center-align info"
    //   //          >
    //   //            <div className="me-5 flex-row-center-align">
    //   //              <img
    //   //                src="https:hiphop4real.com/wp-content/uploads/2018/07/Coolio.jpg"
    //   //                alt=""
    //   //                className="profile-icon"
    //   //              />
    //   //              <div className="text-left">
    //   //                <h2 className="title">Coolio</h2>
    //   //                <h6 className="hashtag">#Coolio#singer#usa#music</h6>
    //   //              </div>
    //   //            </div>
    //   //            <img className="icon-small" src={arrowRight} alt="" />
    //   //          </Col>
    //   //        </Row>
    //   //         <VideoItem />
    //   //        <Row className="flex-row-center-align mt-2">
    //   //          <Col lg={6} md={6} sm={6} xs={6}>
    //   //            {/* <img src={speaker} alt="" />  */}
    //   //          </Col>
    //   //          <Col lg={6} md={6} sm={6} xs={6} className="flex-end">
    //   //            <img src={share} alt="" className="icon-small ms-4" />
    //   //            <img
    //   //              src={eye}
    //   //              alt=""
    //   //              className="icon-small ms-4"
    //   //              onClick={() => setModalShow(true)}
    //   //            />
    //   //            <img src={like} alt="" className="icon-small ms-4" />
    //   //          </Col>
    //   //          <Modal
    //   //            show={modalShow}
    //   //            onHide={() => setModalShow(false)}
    //   //            size="lg"
    //   //            aria-labelledby="contained-modal-title-vcenter"
    //   //            centered
    //   //          >
    //   //            <Modal.Header closeButton></Modal.Header>
    //   //            <Modal.Body>
    //   //              <div className="text-center">
    //   //                <img src={eyeOrange} alt="" />
    //   //                <h6 className="my-2">Неприемлимый контент</h6>
    //   //              </div>
    //   //              <Form className="text-left my-4">
    //   //                <div className="mb-3 text-left">
    //   //                  <FormControl component="fieldset">
    //   //                    <RadioGroup
    //   //                      aria-label="gender"
    //   //                      defaultValue="Пожаловаться"
    //   //                      name="radio-buttons-group"
    //   //                    >
    //   //                      <FormControlLabel
    //   //                        value="female"
    //   //                        control={<Radio />}
    //   //                        label="Пожаловаться"
    //   //                      />
    //   //                      <FormControlLabel
    //   //                        value="male"
    //   //                        control={<Radio />}
    //   //                        label="Больше не показывать"
    //   //                      />
    //   //                    </RadioGroup>
    //   //                  </FormControl>
    //   //                </div>
    //   //              </Form>
    //   //            </Modal.Body>
    //   //            <Modal.Footer className="flex-row-center-align">
    //   //              <Button
    //   //                onClick={() => setModalShow(false)}
    //   //                className="btn-simple text-black"
    //   //              >
    //   //                Отменить
    //   //              </Button>
    //   //              <Button className="btn-simple text-black">
    //   //                Продолжить
    //   //              </Button>
    //   //            </Modal.Footer>
    //   //          </Modal>
    //   //        </Row>
    //   //      </div>
  );
};

export default VideoSwiper;
