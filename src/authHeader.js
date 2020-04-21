import React, { useReducer } from "react";
import authenticator from "./authenticator";
import {Link,  withRouter } from "react-router-dom";

const BaseAuthHeader = props => {
  const { history } = props;
  const signOutHandler = () => authenticator.signout(() => history.push("/"));
  
  return authenticator.isAuthenticated ? (
      <span>
      <p className="text">Welcome!  
      <a className="text" href="/movies/favorites">
         Favorites
      </a>
      <button onClick={signOutHandler}>Sign out</button>
      </p>
      </span>
  ) : (
    <p className="text">
      You are not logged in{" "}
      <button onClick={() => history.push("/login")}>Login</button>
    </p>
       
  )
  };
export default withRouter(BaseAuthHeader);