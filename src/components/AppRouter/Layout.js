import React from "react";
import { Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Loader from '@components/Loader'

export const PublicRoute = ({ component: Components, ...rest }) => {
  // const authentificated = useSelector(state => state.authentificationReducer.isAuthentificated);
  return (
    <>
      <Route {...rest} render={(props) => <Components {...props} />} />
    </>
  );
};
export const PrivateRoute = ({ component: Components, ...rest }) => {
  return (
    <>
      <Route {...rest} render={(props) => <Components {...props} />} />
    </>
  );
};
