import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { DefaultPlayer as Video } from 'react-html5video';
import './LinkBrowsingHistoryItem.css';

const LinkBrowsingHistoryItem = ({ props, arrowRight }) => {
  const history = useHistory();
  const lonelyPlayer = useRef();
  const buttonRef = useRef();
  const [videoPlaying, setVideoPlaying] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoHovering, setVideoHovering] = useState(null);
  const [buttonHoverig, setButtonHoverig] = useState(false);

  useEffect(() => {
    video !== null &&
      video.addEventListener('play', () => {
        setVideoPlaying(true);
      });
    videoPlaying === true &&
      video !== null &&
      video.addEventListener('pause', () => {
        setVideoPlaying(false);
      });
    return () => {
      video !== null &&
        video.removeEventListener('play', () => {
          setVideoPlaying(null);
        }) &&
        video.removeEventListener('pause', () => {
          setVideoPlaying(null);
        });
    };
  }, [video, videoPlaying]);

  const handlerGoBack = evt => {
    evt &&
      history.push({
        pathname: `${'/history'}`,
      });
  };

  const getHovering = (bool, evt) => {
    evt.target.nodeName === 'DIV' && setVideoHovering(bool);
  };

  const getButtonState = (bool, evt) => {
    evt.target.nodeName === 'BUTTON'
      ? setButtonHoverig(bool)
      : setButtonHoverig(bool);
  };

  return (
    <div className="history-wrapper">
      <Col lg={6} md={6} sm={12} xs={12} className="flex-row-center-align info">
        <div className="flex-row-center-align">
          <Link
            to={{
              pathname: `${'/profile'}/${props.author.id}`,
              state: props?.author,
            }}
          >
            <img
              src={props.author.avatar}
              alt="profile avatar"
              className="profile-icon"
            />
          </Link>
          <div className="text-left">
            <h2 className="title">
              <Link
                to={{
                  pathname: `${'/profile'}/${props.author.id}`,
                  state: props?.author,
                }}
              >
                {props.author.name}
              </Link>{' '}
            </h2>
            <ul className="hashtag">
              {props.author.tags.map(tag => (
                <li key={tag} className="hashtag-item">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img className="icon-small ms-2:" src={arrowRight} alt="" />
      </Col>
      <div
        className={`${'lonely-player-wrapper'} ${videoHovering && 'hovering'}`}
        onMouseEnter={evt => getHovering(true, evt)}
        onMouseLeave={evt => getHovering(false, evt)}
      >
        <Video
          ref={lonelyPlayer}
          playsInline
          autoPlay={true}
          muted={false}
          loop={false}
          controls={['PlayPause', 'Volume']}
          console={[]}
          onCanPlayThrough={evt => setVideo(evt.target)}
          className={`${
            (videoPlaying && buttonHoverig) || (videoPlaying && videoHovering)
              ? 'play'
              : 'pause'
          }`}
        >
          <source defer src={props.url} type="video/MP4" className="video" />
        </Video>
        {videoHovering === true && (
          <button
            ref={buttonRef}
            onClick={handlerGoBack}
            className={`${'goBack'}`}
            onMouseEnter={evt => getHovering(true, evt)}
            onMouseLeave={evt => getHovering(true, evt)}
            onMouseOut={evt => getButtonState(false, evt)}
            onMouseOver={evt => getButtonState(true, evt)}
          ></button>
        )}
      </div>
    </div>
  );
};

export default LinkBrowsingHistoryItem;
