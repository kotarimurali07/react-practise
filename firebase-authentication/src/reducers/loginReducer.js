import initialState from "./initialState";
import ACTION from "../actions/actionTypes";
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ACTION.LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false
      };
    }
    case ACTION.LOGIN_FAILURE: {
      return {
        ...state,
        isFetching: false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
export default loginReducer;
