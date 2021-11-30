import React from 'react';
import { Container } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useLocation } from 'react-router';
import './AuthorProfile.css';
// import '@styles/components/HomeContainer.css';

const AuthorProfile = () => {
  const { state } = useLocation();
  const { avatar, cover, name, description } = state;

  return (
    <div className="author page">
      <img className="author-cover" src={cover} alt="profile cover" />

      <Container>
        <div className="author-info">
          <img className="author-avatar" src={avatar} alt="profile avatar" />
          <h3 className="author-name">{name}</h3>
          <p className="author-description">{description}</p>
        </div>
      </Container>
      <PerfectScrollbar
      //   className="scrollBar"
      >
        <Container>
          <h4 className="page-heading">Все видео</h4>
          <ul className=" row">
            {/* <li className="my-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="video-item">
                <p>item</p>
              </div>
            </li> */}
          </ul>
        </Container>
      </PerfectScrollbar>
    </div>
  );
};

export default AuthorProfile;
