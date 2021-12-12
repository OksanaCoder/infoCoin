import { actionTypes } from "@redux_actions/auth";

const initialState = {
  token: localStorage.getItem("token") ?? "",
  user: JSON.parse(localStorage.getItem("user") ?? "{}"),
  isAuthentificated: false,
  loaded: false,
  pending: false,
};

export function authenticationReducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        token: action.data.token,
        isAuthentificated: true,
        loaded: true,
        pending: false,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: "",
        user: {},
        isAuthentificated: false,
        loaded: false,
        pending: false,
      };
    case actionTypes.AUTH_SIGN_UP:
      return {
        ...state,
        isAuthentificated: false,
        pending: false,
      };
    // case actionTypes.AUTH_FORGOT :
    //   return {
    //     ...state,
    //     isAuthentificated: false,
    //     loaded: false,
    //     pending: false,
    //   };
    //   case actionTypes.AUTH_RESET :
    //     return {
    //       ...state,
    //       isAuthentificated: false,
    //       loaded: false,
    //       pending: false,
    //     };
    // case actionTypes.AUTH_REFRESH :
    //   return {
    //     ...state,
    //     isAuthentificated: true,
    //     loaded: false,
    //     pending: false,
    //   };
    case actionTypes.PENDING:
      return {
        ...state,
        pending: true,
        loaded: false,
      };
    case actionTypes.NOT_AUTH:
      return {
        ...state,
        pending: false,
        loaded: false,
      };
    case actionTypes.SAVE_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
}
