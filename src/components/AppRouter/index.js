import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
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

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/auth" component={() => <AuthContainer />} />
          {/* <PublicRoute
                                    exact
                                    path="/login"
                                    component={() => (
                                        <LoginPage/>
                                    )}
                                />
                                <PublicRoute
                                    exact
                                    path="/register"
                                    component={() => (
                                        <RegisterPage/>
                                    )}
                                />          */}
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
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
