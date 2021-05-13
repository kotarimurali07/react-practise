import {
  loginRequest,
  loginSuccess,
  loginFailure
} from "../actions/actionCreators";
import firebase from "../config/firebaseConfig";

export const onLogin = (creds) => {
  return (dispatch, { getFirebase }) => {
    dispatch(loginRequest());
    // const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
        console.log(user + "==================");
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};
// import {
//   loginRequest,
//   loginSuccess,
//   loginFailure
// } from "../actions/actionCreators";
// import axios from "axios";
// import firebase from "../config/firebaseConfig";
// export const onLogin = (creds) => {
//   return function (dispatch) {
//     dispatch(loginRequest());

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(creds.email, creds.password)
//       .then(({ user }) => {
//         console.log(user+"==================");
//         dispatch(loginSuccess(user));
//         // return user.getIdToken()
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch(loginFailure(error));
//       });
//   };
// };
