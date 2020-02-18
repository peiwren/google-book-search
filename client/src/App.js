//Cited: week 20 class activities
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Switch>
            {/* renders the Search page when loading "/" route */}
            <Route exact path="/" component={Search} />
            {/* renders the Search page when loading "/search" route */}
            <Route exact path="/search" component={Search} />
            {/* renders the Saved page when loading "/saved" route */}
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
