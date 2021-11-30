import React from 'react';
import { Container } from 'react-bootstrap';
import '@styles/components/HomeContainer.css';
import VideoSwiper from '@components/VideoSwiper/VideoSwiper';

const HomeContainer = () => {
  return (
    <>
      <Container className="wrapper flex-row-column container-padding-none page">
        <VideoSwiper />
      </Container>
    </>
  );
};

export default HomeContainer;
