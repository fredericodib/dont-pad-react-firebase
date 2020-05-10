import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import NotePad from "./pages/NotePad/NotePad";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <NotePad />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
