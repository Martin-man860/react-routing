import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Service">Service</Link>

        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/About" component={About} />
        <Route exact={true} path="/Contact" component={Contact} />
        <Route exact={true} path="/Service" component={Service} />
      </BrowserRouter>
    </div>
  );
}

export default Router;
