import React from 'react';
import { Container } from 'react-bootstrap';
import '@styles/components/HomeContainer.css';
import VideoSwiper from '@components/VideoSwiper/VideoSwiper';
import ReCAPTCHA from "react-google-recaptcha";

const HomeContainer = () => {
  const recaptchaRef = React.createRef();
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (

    <>
      <Container className="wrapper">
        <Container className="flex-row-column">
          <VideoSwiper />
          <ReCAPTCHA
            ref={recaptchaRef}
            // size="invisible"
            sitekey="6LckU0MdAAAAADWY8V4yEJlDd-ibaCxEw9g7LbtI"
            onChange={onChange}
          />
        </Container>
      </Container>
    </>
  );
};

export default HomeContainer;
