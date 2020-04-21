import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import authenticator from "../authenticator";

const LoginPage = props => {
  const [loggedInStatue, setLoggedInStatus] = useState(false);
  // console.log(props.location)
  const login = () => {
    authenticator.authenticate("user1", "pass1", status =>
      setLoggedInStatus(status)
    );
  };
  const { from } = props.location.state || { from: { pathname: "/" } };
  if (loggedInStatue === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <form className="container col-6">
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button onClick={login}>Log in</button>
                <p className="forgot-password text-right">
                <a href="#"> Forgot password?</a>
                </p>
            </form>
    </>
  );
};

export default LoginPage;