import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}
