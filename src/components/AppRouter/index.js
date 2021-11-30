import React, { useRef } from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PublicRoute, PrivateRoute } from './Layout.js';
import HomeContainer from '@containers/HomeContainer';
import BaseContainer from '@containers/BaseContainer';
import AuthContainer from '@containers/AuthContainer/index.js';
import History from '@components/History/History';
import Categories from '@components/Categories/Categories.js';
import Account from '@components/Account/index.js';
import Wallet from '@components/Wallet/index.js';
import Settings from '@components/Settings/index.js';
import CacheAndData from '@components/CacheAndData/index.js';
import Information from '@components/Information/index.js';
import Support from '@components/Support/index.js';
import Exit from '@components/Exit/index.js';
import { AuthorProfile } from '@components/AuthorProfile';
import LinkBrowsingHistory from '@components/History/LinkBrowsingHistory.js';
import './transitions.css';
import HeaderContainer from '@containers/HeaderContainer/index.js';

const AppRouter = () => {
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
    <>
      <HeaderContainer />

      <TransitionGroup component="div">
        <CSSTransition
          key={location.pathname}
          classNames="pageSlider"
          timeout={timeout}
          // key={currentKey}
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div
            ref={nodeRef}
            className={
              getPathDepth(location) - prevDepth.current >= 0 ? 'left' : 'right'
            }
          >
            <Switch location={location}>
              <PublicRoute
                exact
                path="/auth"
                component={() => <AuthContainer />}
              />
              <PrivateRoute
                exact
                path="/history"
                component={() => (
                  <BaseContainer>
                    <History />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/history/:item"
                component={() => (
                  <BaseContainer>
                    <LinkBrowsingHistory />
                  </BaseContainer>
                )}
              />

              <PrivateRoute
                exact
                path="/account"
                component={() => (
                  <BaseContainer>
                    <Account />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/categories"
                component={() => (
                  <BaseContainer>
                    <Categories />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/wallet"
                component={() => (
                  <BaseContainer>
                    <Wallet />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/settings"
                component={() => (
                  <BaseContainer>
                    <Settings />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/cache-and-data"
                component={() => (
                  <BaseContainer>
                    <CacheAndData />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/support"
                component={() => (
                  <BaseContainer>
                    <Support />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/info"
                component={() => (
                  <BaseContainer>
                    <Information />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/exit"
                component={() => (
                  <BaseContainer>
                    <Exit />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path="/profile/:author"
                component={() => (
                  <BaseContainer>
                    <AuthorProfile />
                  </BaseContainer>
                )}
              />
              <PrivateRoute
                exact
                path={['/']}
                component={() => (
                  <BaseContainer>
                    <HomeContainer />
                  </BaseContainer>
                )}
              />
              <Redirect exact to="/login" />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default AppRouter;
