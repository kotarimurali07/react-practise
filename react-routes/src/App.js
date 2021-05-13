import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./container/Index";
import Demo from "./container/Demo";
import Home from "./container/Home";
import Contact from "./container/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Index />
        <Route exact path="/" component={Demo} />
        <Route path="/Home" component={Home} />
        <Route path="/Contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}
