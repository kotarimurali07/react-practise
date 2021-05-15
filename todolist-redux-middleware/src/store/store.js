import { createStore, applyMiddleware } from "redux";
import todoReducer from '../reducers/todoReducer'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
console.log("store");
const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
