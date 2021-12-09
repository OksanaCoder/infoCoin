import React, { useRef } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HeaderContainer from '@containers/HeaderContainer/index.js';
import { Col, Row } from 'react-bootstrap';
// import { useSelector } from "react-redux";
// import Loader from '@components/Loader'

export const PublicRoute = ({ component: Components, ...rest }) => {
  // const authentificated = useSelector(state => state.authentificationReducer.isAuthentificated);
  return (
    <>
      <Route {...rest} render={props => <Components {...props} />} />
    </>
  );
};
export const PrivateRoute = ({ component: Components, ...rest }) => {
  let location = useLocation();
  const timeout = { enter: 800, exit: 400 };

  const getPathDepth = location => {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter(n => n !== '');
    return pathArr.length;
  };

  const prevDepth = useRef(getPathDepth(location));
  const nodeRef = useRef(null);
  return (
    <Row className='d-flex'>
      <HeaderContainer />
      <Col
            lg={9} md={9} sm={9}>
      <TransitionGroup component="div">
        <CSSTransition
          key={location.pathname}
          classNames="pageSlider"
          timeout={timeout}
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div
            ref={nodeRef}
            className={
              getPathDepth(location) - prevDepth.current >= 0 ? 'left' : 'right'
            }
          >
            <Route {...rest} render={props => <Components {...props} />} />
          </div>
        </CSSTransition>
      </TransitionGroup>
      </Col>
    </Row>
  );
};
