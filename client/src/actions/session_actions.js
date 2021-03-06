import * as APIUtil from "../util/session";
import jwt_decode from "jwt-decode";
import MySocket from "../socket";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_NEW_NAME = "RECEIVE_NEW_NAME"

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserSignIn = currentUser => ({
  type: RECEIVE_USER_SIGN_IN,
  currentUser
});

export const receiveNewName = name => ({
  type: RECEIVE_NEW_NAME,
  name
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const newName = (name) => dispatch => {
  dispatch(receiveNewName(name))
}

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  MySocket.getSocket().disconnect();
  dispatch(logoutUser());
};

export const demoUser = () => dispatch => 
  APIUtil.demoUser()
    .then(res => {
      const { token, name } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
      window.location.hash = "/lobby";
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });

export const signup = user => dispatch =>
  APIUtil.signup(user)
    .then(res => {
      const { token, name } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
      window.location.hash = "/lobby";
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });

export const login = user => dispatch =>
  APIUtil.login(user)
    .then(res => {
      const { token, name } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
      window.location.hash = "/lobby";
    })
    .catch(err => {
      dispatch(receiveErrors(err));
    });
