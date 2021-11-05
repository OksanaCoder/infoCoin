import React from "react";
import { Container } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import VideoSwiper from "@components/VideoSwiper";



const HomeContainer = () => {

  return (
    <>
      <div className="wrapper">
        <Container className="flex-row-center">
             <VideoSwiper />
        </Container>
      </div>
    </>
  );
};

export default HomeContainer;
