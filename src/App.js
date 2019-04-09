import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavBar";
import Dashbaord from "./components/layout/Dashboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashbaord} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
