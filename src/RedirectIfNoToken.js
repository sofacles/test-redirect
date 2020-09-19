import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';

const RedirectIfNoToken = ({ children, ...rest }) => {
  let history = useHistory();
  const tokenExpiry = localStorage.getItem('adminTokenExpires');
  const currentMsec = new Date().valueOf();
  //If the value in the localStorate.adminTokenExpires is still in the future, consider the user validated.
  const probablyAuthorized =
    tokenExpiry !== null && Number.parseInt(tokenExpiry) > currentMsec;

  if (!probablyAuthorized) {
    history.push(rest.path);
  }

  return (
    <Route
      render={({ location }) =>
        probablyAuthorized ? children : <Redirect to="/Login" />
      }
    />
  );
};

export default RedirectIfNoToken;
