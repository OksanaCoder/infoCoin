import React, { useState, useRef, useEffect } from 'react';
import {
  // Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
} from 'react-bootstrap';
import '@styles/components/HomeContainer.css';
import '@styles/components/VideoSwiper.css';
import arrowRight from '@assets/icons/arrow-right.svg';
import { ReactComponent as Share } from '@assets/icons/share.svg';
import { ReactComponent as EyeOrange } from '@assets/icons/eye-orange.svg';
import { ReactComponent as Eye } from '@assets/icons/eye.svg';
import { ReactComponent as Like } from '@assets/icons/heart.svg';
// import video from '@assets/video/video.mp4';
// import video2 from '@assets/video/video-2.mp4';
// import speaker from '@assets/icons/audio.svg';
import playBtn from '@assets/icons/play-icon.png';
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import ReactPlayer from 'react-player';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { stories } from './stories';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import Stories from 'react-insta-stories';
// import VideoItem from '@components/VideoItem';
import Geetest from 'react-geetest';
import './gt.js'
// import ReCAPTCHA from "react-google-recaptcha";

import { Link } from 'react-router-dom';

const VideoSwiper = () => {

  const onSuccess = isSuccess => console.log(isSuccess);

  const [reportValue, setReportValue] = useState('complain');
  const [complainValue, setComplainValue] = useState('reason1');
  const [showComplain, setShowComplain] = useState(false);
  const swiperRef = useRef();
  const storiesData = stories;

  // console.log(story);
  // const videoTime = vidioRef.currentTime;
  // console.log(`current Time`, videoTime);
  const handleChangeReport = event => {
    console.log(event.target.value, 'report');
    setReportValue(event.target.value);
  };
  const handleChangeReason = event => {
    console.log(event.target.value, 'report');
    setComplainValue(event.target.value);
  };
  const handleSubmit = () => {
    if (showComplain === true) {
      //API call
      setShowComplain(null);
    } else if (showComplain === false) {
      if (reportValue === 'complain') {
        setShowComplain(true);
      } else {
        // API CALL
      }
    } else if (showComplain === null) {
      setShowComplain(false);
      setReportValue('complain');
      setComplainValue('reason1');
    }
  };
  const handleResetForm = () => {
    setModalShow(false);
    setShowComplain(false);
    setReportValue('complain');
    setComplainValue('reason1');
  };

  const [modalShow, setModalShow] = useState(false);
  const playerRef = useRef();
  const [playing, setPlaying] = useState(true)
  const [randomSecond, setRandomSecond] = useState(0)
  const [captchaConfirmed, setCaptchaConfirmed] = useState(false)

  useEffect(() => {
    if (playing || captchaConfirmed) {
      return
    }
    checkCaptcha()
  }, [playing])

  const checkCaptcha = () => {
    if (window.confirm('Are you a human?')) {
      setCaptchaConfirmed(true)
      setPlaying(true)
    }
  }

  // const [playing, setPlaying] = useState(false);
  // const videoRef = useRef(null);

  // const onVideoPress = () => {
  //   if (playing) {
  //     videoRef.current.pause();
  //     setPlaying(false);
  //   } else {
  //     videoRef.current.play();
  //     setPlaying(true);
  //   }
  // };
  // const startRandomizer = () => {

  //   window.setTimeout( function(){
  
  //     window.alert("Hello World ");
  //     // startRandomizer();
  
  //   },  5000); // From 10 to 110 secconds
  
  // } 
  
  // startRandomizer(); 
  return (
    <>
    <Geetest
      gt="7f4efd47dc1fbf4a62dffecb6e5e4b98"
      challenge="1c597815356b7a58b70f3dbcce505258"
      onSuccess={onSuccess}
    />
     {/* <ReCAPTCHA
    sitekey="6LckU0MdAAAAADWY8V4yEJlDd-ibaCxEw9g7LbtI"
    onChange={onChange}
  
  /> */}
  {/* <form onSubmit={() => { recaptchaRef.current.execute(); }}> */}
    {/* <ReCAPTCHA
      ref={recaptchaRef}
      // size="invisible"
      sitekey="6LckU0MdAAAAADWY8V4yEJlDd-ibaCxEw9g7LbtI"
      onChange={onChange}
    /> */}
  {/* </form> */}
    <Swiper
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => (swiperRef.current = swiper)}
      allowSlideNext={false}
      allowSlidePrev={false}
      // noSwiping={true}
    >
      {storiesData?.map(i => (
        <SwiperSlide key={i.id}>
          {({ isActive }) => (
            <div className="flex-column-align-stpauseart">
              <Row>
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="flex-row-center-align info"
                >
                  <div className="flex-row-center-align">
                    <Link
                      to={{
                        pathname: `${'/profile'}/${i.author.id}`,
                        state: i?.author,
                      }}
                    >
                      <img
                        src={i.author.avatar}
                        alt="profile avatar"
                        className="profile-icon"
                      />
                    </Link>
                    <div className="text-left">
                      <h2 className="title">
                        <Link
                          to={{
                            pathname: `${'/profile'}/${i.author.id}`,
                            state: i?.author,
                          }}
                        >
                          {i.author.name}
                        </Link>{' '}
                      </h2>
                      <ul className="hashtag">
                        {i.author.tags.map(tag => (
                          <li key={tag} className="hashtag-item">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <img className="icon-small ms-2:" src={arrowRight} alt="" />
                </Col>
              </Row>
              {isActive ? (
                <Video
                  playsInline
                  autoPlay={true}
                  muted={false}
                  loop={false}
                  controls={['PlayPause', 'Volume']}
                  // poster="https:eba.com.ua/wp-content/uploads/2017/11/rbsport1_mar08_prev-1.jpg"
                  ref={playerRef}
                  playing={playing}
                  onDuration={(duration) => {
                    setRandomSecond(Math.floor(Math.random() * duration))
                  }}
                  onPlay={() => setPlaying(true)}
                  onProgress={async (data) => {
                    if (captchaConfirmed || data.playedSeconds < randomSecond) {
                      return
                    }
                    setPlaying(false)
                  }}
                  onCanPlayThrough={() => {
                    console.log('onCanPlayThrough');
                  }}
                  onEnded={() => {
                    swiperRef.current.allowSlideNext = true;
                    swiperRef.current.slideNext();
                    swiperRef.current.allowSlideNext = false;
                    
                    console.log('ended, now auto slide right');
                  }}
                >
                  <source
                    defer
                    src={i.url}
                    type="video/MP4"
                    className="video"
                  />

                  {/* <track label="English" kind="subtitles" srcLang="en" src="http:source.vtt" default /> */}
                </Video>
              ) : (
                <Video
                  playsInline
                  autoPlay={false}
                  muted={true}
                  loop={false}
                  controls={['PlayPause', 'Volume']}
                   ref={playerRef}
      playing={playing}
      onDuration={(duration) => {
        setRandomSecond(Math.floor(Math.random() * duration))
      }}
      onPlay={() => setPlaying(true)}
      onProgress={async (data) => {
        if (captchaConfirmed || data.playedSeconds < randomSecond) {
          return
        }
        setPlaying(false)
      }}
                  // poster="https:eba.com.ua/wp-content/uploads/2017/11/rbsport1_mar08_prev-1.jpg"
                >
                  {/* <source src={i.url} type="video/MP4" className="video" /> */}

                  {/* <track label="English" kind="subtitles" srcLang="en" src="http:source.vtt" default /> */}
                </Video>
              )}


              {/* <ReactPlayer playing url="http://localhost:3001/video.mp4" /> */}

              <Row className="flex-row-center-align mt-2">
                <Col lg={6} md={6} sm={6} xs={6}>
                  {/* <img src={speaker} alt="" />  */}
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="flex-end">
                  <Share className="icon-small icon-hover" />
                  <Eye
                    className="icon-small icon-hover ms-4"
                    onClick={() => setModalShow(true)}
                  />
                  <Like className="icon-small icon-hover ms-4" />
                </Col>
                {modalShow && (
                  <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    backdropClassName="modal-window-backdrop"
                    centered
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <div className="text-center">
                        <EyeOrange />
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
                                </RadioGroup>{' '}
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
                )}
              </Row>
              
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  
    </>
  );
};

export default VideoSwiper;
