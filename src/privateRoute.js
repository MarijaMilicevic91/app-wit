import React from "react";
import authenticator from "./authenticator";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  return authenticator.isAuthenticated === true ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};

export default PrivateRoute;