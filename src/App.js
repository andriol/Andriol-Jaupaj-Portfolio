import Home from "./components/home";
import LandingPage from "./components/landingPage";
import CV from "./components/cv";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Blog from "./components/blog";
import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={LandingPage} />
            <Route path="/cv" component={CV} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
