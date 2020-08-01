import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ProjectList from "./pages/project/ProjectList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/project" component={ProjectList} />
        <Redirect to="/project" />
      </Switch>
    </Router>
  );
}
