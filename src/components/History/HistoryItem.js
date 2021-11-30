import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { ReactComponent as Play } from '@assets/icons/play-video.svg';
import './HistoryItem.css';

const HistoryItem = ({ item }) => {
  const { id } = item;

  const { name, cover, tags } = item.author;
  return (
    <Col lg={3} md={4} sm={6} xs={12} className="my-2 page">
      <Link
        to={{
          pathname: `${'/history'}/${id}`,
          state: item,
        }}
      >
        <div className="history-box-image-wrap">
          <img className="history-box-cover" src={cover} alt="video cover" />
          <div className="history-box">
            <div>
              <h6 className="history-name-onImage">{name}</h6>
              <ul className="history-hashtag">
                {tags.map(tag => (
                  <li key={tag} className="history-hashtag-item">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Play />
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default HistoryItem;
