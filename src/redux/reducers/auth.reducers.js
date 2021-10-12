import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    name: "",
    username: "",
    email: "",
    contactNumber: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  // loading: false,
  // error: null,
  // message: "",
};
export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;

    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...initState,
        //loading: true,
      };
      break;
    // case authConstants.LOGOUT_SUCCESS:
    //   state = {
    //     ...initState,
    //   };
    //   break;
    // case authConstants.LOGOUT_FAILURE:
    //   state = {
    //     ...initState,
    //     loading: false,
    //     error: action.payload.error,
    //   };
    //   break;
  }
  return state;
};
