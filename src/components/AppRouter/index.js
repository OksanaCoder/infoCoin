import React from "react";
import {BrowserRouter, Switch, Redirect} from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./Layout.js";
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import HomeContainer from '@containers/HomeContainer';
import BaseContainer from '@containers/BaseContainer';
import AuthContainer from "@containers/AuthContainer/index.js";

const AppRouter = () => {


    return (
        <>
            <BrowserRouter>
                <Switch>
                <PublicRoute
                        exact
                        path="/auth"
                        component={() => (
                            <AuthContainer/>
                        )}
                    />
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
                        path={["/"]}
                        component={() => (
                            <BaseContainer>
                                <HomeContainer/>
                            </BaseContainer>
                        )}
                    />
                 

                    <Redirect exact to="/login"/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;