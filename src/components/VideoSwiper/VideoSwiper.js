import React, { useState, useRef } from 'react';
import {
  Row,
  Col,
  Modal,
  Button,
  //  Form
} from 'react-bootstrap';
import '@styles/components/HomeContainer.css';
import '@styles/components/VideoSwiper.css';
import arrowRight from '@assets/icons/arrow-right.svg';
import { ReactComponent as Share } from '@assets/icons/share.svg';
import { ReactComponent as Eye } from '@assets/icons/eye.svg';
import { ReactComponent as Like } from '@assets/icons/heart.svg';
// import {
//   FormControl,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from '@material-ui/core';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { stories } from './stories';
import './gt.js';
// import Geetest from 'react-geetest';
// import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import LinkBrowsingHistoryItem from '@components/History/LinkBrowsingHistoryItem';
import UnacceptableСontentModal from './UnacceptableСontentModal';

import ReCAPTCHA from "react-google-recaptcha";



const VideoSwiper = ({ props }) => {

  const recaptchaRef = React.createRef();

  const handleCaptcha = () => {
    setCaptchaConfirm(true);
    setModalCaptcha(false);
  }
  // const onSuccess = isSuccess => console.log(isSuccess);
  // const [reportValue, setReportValue] = useState('complain');
  // const [complainValue, setComplainValue] = useState('reason1');
  // const [showComplain, setShowComplain] = useState(false);

  const swiperRef = useRef();
  const videoRef = useRef();
  const storiesData = stories;

  // console.log(story);
  // const videoTime = vidioRef.currentTime;
  // console.log(`current Time`, videoTime);

  // if modalShow === true, then stop plaing video
  const [modalShow, setModalShow] = useState(false);
  const [modalCaptcha, setModalCaptcha] = useState(false);
  const [captchaConfirm, setCaptchaConfirm] = useState(false);
  const [targetVideo, setTargetVideo] = useState('');
  const handleCloseModal = () => {
    setModalCaptcha(false);
  };
  const handleConfirm = () => {
    setCaptchaConfirm(true);
    setModalCaptcha(false);
  };

  const handlerToggleModal = evt => {
    evt.preventDefault();

    if (evt.target.id === evt.currentTarget.id) {
      setTargetVideo(evt?.target?.id);
      setModalShow(!modalShow);
    }
  };

  // const playerRef = useRef();
  // const [playing, setPlaying] = useState(true);
  // const [randomSecond, setRandomSecond] = useState(0);
  // const [captchaConfirmed, setCaptchaConfirmed] = useState(false);

  // useEffect(() => {
  //   if (playing || captchaConfirmed) {
  //     return;
  //   }
  //   // checkCaptcha()
  // }, [playing]);

  // const checkCaptcha = () => {
  //   if (window.confirm("Are you a human?")) {
  //     setCaptchaConfirmed(true);
  //     setPlaying(true);
  //   }
  // };

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
  // function onChange(value) {
  // console.log("Captcha value:", value);
  // }
  // const recaptchaRef = React.createRef();

  return (
    <>
      {/* <Geetest
      gt="your-gt"
      challenge="your-challenge"
      onSuccess={onSuccess}
    /> */}
      {/* <ReCAPTCHA
    sitekey="6LckU0MdAAAAADWY8V4yEJlDd-ibaCxEw9g7LbtI"
    onChange={onChange}
  
  /> */}
      
      <Swiper
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => (swiperRef.current = swiper)}
        allowSlideNext={false}
        allowSlidePrev={false}
        // noSwiping={true}
      >
        {props === undefined &&
          storiesData?.map(i => (
            <SwiperSlide key={i.id}>
              {({ isActive }) => (
                <div className="flex-column-align mob-padding">
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
                      <img
                        className="icon-small ms-2:"
                        src={arrowRight}
                        alt=""
                      />
                    </Col>
                  </Row>
                  {isActive ? (
                    <Video
                      // style={{marginLeft: "-3px"}}
                      ref={videoRef}
                      playsInline
                      autoPlay={true}
                      muted={false}
                      loop={false}
                      controls={['PlayPause', 'Volume']}
                      // poster="https:eba.com.ua/wp-content/uploads/2017/11/rbsport1_mar08_prev-1.jpg"
                      onDurationChange={event => {
                        console.log(event.target.duration);
                        // setRandomSecond(Math.floor(Math.random() * duration));
                      }}
                      onPlay={() => {}}
                      onEnded={() => {
                        swiperRef.current.allowSlideNext = true;
                        swiperRef.current.slideNext();
                        swiperRef.current.allowSlideNext = false;
                        setTimeout(() => {
                          videoRef.current.videoEl.pause();
                          setModalCaptcha(true);
                          // if (window.confirm("Are you a human?")) {
                          //   videoRef.current.videoEl.play();
                          // }
                          if (captchaConfirm) {
                            videoRef.current.videoEl.play();
                          }
                        }, 1000 * Math.floor(Math.random() * 3 + 1));
                      }}
                    >
                      <source
                        defer
                        src={i.url}
                        type="video/MP4"
                        className="video"
                      />
                      <Modal show={modalCaptcha} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                        
                        </Modal.Header>
                        <Modal.Body>

                      <form onSubmit={() => { recaptchaRef.current.execute(); }}> 
                       <ReCAPTCHA
                        ref={recaptchaRef}
                        // size="invisible"
                        sitekey="6LckU0MdAAAAADWY8V4yEJlDd-ibaCxEw9g7LbtI"
                        onChange={handleCaptcha}
                      /> 
                      </form> 
                        </Modal.Body>
                        {/* <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleCloseModal}
                          >
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleConfirm}>
                            Confirm
                          </Button>
                        </Modal.Footer> */}
                      </Modal>
                      {/* <track label="English" kind="subtitles" srcLang="en" src="http:source.vtt" default /> */}
                    </Video>
                  ) : (
                    <Video
                      playsInline
                      autoPlay={false}
                      muted={true}
                      loop={false}
                      controls={['PlayPause', 'Volume']}
                      onProgress={async data => {
                        // if (
                        //   captchaConfirmed ||
                        //   data.playedSeconds < randomSecond
                        // ) {
                        //   return;
                        // }
                        // setPlaying(false);
                      }}
                    ></Video>
                  )}

                  <Row className="flex-row-center-align mt-2">
                    <Col lg={6} md={6} sm={6} xs={6}>
                      {/* <img src={speaker} alt="" />  */}
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="flex-end">
                      <Share className="icon-small icon-hover" />
                      <Eye
                        className="icon-small icon-hover ms-4"
                        id={i.id}
                        // prop={}
                        onClick={handlerToggleModal}
                      />

                      <Like className="icon-small icon-hover ms-4" />
                    </Col>
                  </Row>
                </div>
              )}
            </SwiperSlide>
          ))}

        {props !== undefined && (
          <LinkBrowsingHistoryItem props={props} arrowRight={arrowRight} />
        )}
      </Swiper>
      {modalShow && (
        <UnacceptableСontentModal
          handlerToggleModal={handlerToggleModal}
          key={targetVideo}
          videoId={targetVideo}
        />
      )}
    </>
  );
};

export default VideoSwiper;
