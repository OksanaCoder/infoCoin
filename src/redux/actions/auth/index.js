export const actionTypes = {
  AUTH_LOGIN: "AUTH_LOGIN",
  AUTH_LOGOUT: "AUTH_LOGOUT",
  AUTH_SIGN_UP: "AUTH_SIGN_UP",
  // AUTH_REFRESH: 'AUTH_REFRESH',
  // AUTH_FORGOT: 'AUTH_FORGOT',
  // AUTH_RESET: 'AUTH_RESET',
  PENDING: "AUTH_PENDING",
  NOT_AUTH: "NOT_AUTH",
  SAVE_USER: "SAVE_USER",
};

export const authLogin = (data = {}) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    data,
  };
};

export const authLogout = (data = {}) => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    data,
  };
};

export const authSignUp = (data = {}) => {
  return {
    type: actionTypes.AUTH_SIGN_UP,
    data,
  };
};

// export const authForgot = (data={}) => {
//     return ({
//         type: actionTypes.AUTH_FORGOT,
//         data
//     })
// }
// export const authResetAuction = (data={}) => {
//     return ({
//         type: actionTypes.AUTH_RESET,
//         data
//     })
// }

// export const authRefresh = (data={}) => {
//     return ({
//         type: actionTypes.AUTH_REFRESH,
//         data
//     })
// }

export const authPending = (data = {}) => {
  return {
    type: actionTypes.PENDING,
    data,
  };
};

export const notAuth = (data = {}) => {
  return {
    type: actionTypes.NOT_AUTH,
    data,
  };
};

export const saveUserAction = (data) => {
  return {
    type: actionTypes.SAVE_USER,
    data,
  };
};
