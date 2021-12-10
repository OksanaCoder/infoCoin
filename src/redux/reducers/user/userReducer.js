import { userActionTypes } from '@redux_actions/user/userActions'

const initialState = {
  user: {}
};

export default function userReducer(state = initialState, action = {}) {
    switch (action.type) {
      case userActionTypes.SAVE_USER:
        return {
          ...state,
          user: action
        };
      default:
        return state;
    }
}