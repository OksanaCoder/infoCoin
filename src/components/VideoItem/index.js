import React  from "react";
import "@styles/components/HomeContainer.css";
import video2 from "@assets/video/video-2.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const VideoItem = () => {
  return (
    <Video
      autoPlay
      muted
      loop
      oncanplay="muted=true"
      controls={["PlayPause", "Volume"]}
      // poster="https://eba.com.ua/wp-content/uploads/2017/11/rbsport1_mar08_prev-1.jpg"
      onCanPlayThrough={() => {
        // Do stuff
      }}
    >
      <source src={video2} type="video/MP4" />

      {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
    </Video>
  );
};

export default VideoItem;
