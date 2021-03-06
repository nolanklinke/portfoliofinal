import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
