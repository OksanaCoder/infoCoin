import { actionTypes } from '@redux_actions/auth'

const initialState = {
  token: localStorage.getItem('token') || '',
  isAuthentificated: false,
  user: null, //User()
  loaded: false,
  pending: false
};

export default function authentificationReducer(state = initialState, action = {}) {
    switch (action.type) {
      case actionTypes.AUTH_LOGIN :
        return {
          ...state,
          isAuthentificated: true,
          user: action.data.user,
          token: action.data.token,
          loaded: true,
          pending: false,
        };
        case actionTypes.AUTH_LOGOUT:
        return {
          ...state,
          isAuthentificated: false,
          user: {},
          token: '',
          loaded: false,
          pending: false,
        };
        case actionTypes.AUTH_SIGN_UP:
        return {
          ...state,
          isAuthentificated: true,
          user: action.data.user,
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
        case actionTypes.PENDING :
          return {
            ...state,
            pending: true,
            loaded: false
          };
      case actionTypes.NOT_AUTH:
        return {
          ...state,
          pending: false,
          loaded: false
        }
      default:
        return state;
    }
}