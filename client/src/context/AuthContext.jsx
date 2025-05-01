import React, { useState, useEffect, useCallback, useContext } from 'react';
import { AppConstants } from '../constants';

let logoutTimer;

const initialState = {
  token: '',
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
}

const AuthContext = React.createContext(initialState);

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem(AppConstants.TOKEN);
  const storedExpirationDate = localStorage.getItem(AppConstants.TOKEN_EXPIRY);

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem(AppConstants.TOKEN);
    localStorage.removeItem(AppConstants.TOKEN_EXPIRY);
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem(AppConstants.TOKEN);
    localStorage.removeItem(AppConstants.TOKEN_EXPIRY);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem(AppConstants.TOKEN, token);
    localStorage.setItem(AppConstants.TOKEN_EXPIRY, expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext)

export { useAuthContext, AuthContextProvider };
