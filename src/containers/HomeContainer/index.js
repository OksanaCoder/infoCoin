import React from "react";
import { Container } from "react-bootstrap";
import "@styles/components/HomeContainer.css";
import ReactPlayer from "react-player";
import upload from '@assets/icons/upload.svg'

const HomeContainer = () => {

  return (
    <>
      <div className='wrapper'>
            <Container className="flex-row-center">
                <div className='flex-column-align-start'>
                <div className="info">
                    <img src={upload} alt=""/>
                    <h2 className='title'>Red Bull Racing</h2>
                    <h6 className='hashtag'>#drift#redbull#rbwings#rbenergy</h6>
                </div>
                <ReactPlayer
                  
                   url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                   </div>
            </Container>
            
        </div>
    </>
  );
};

export default HomeContainer;
