import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ProjectList from "./pages/project/ProjectList";
import Project_ReactState from "./pages/project/Project_ReactState";
import Project_ReduxStoreState from "./pages/project/Project_ReduxStoreState";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/project" component={ProjectList} />
        <Route exact path="/project/reactState/:project_id" component={Project_ReactState} />
        <Route exact path="/project/reduxStoreState/:project_id" component={Project_ReduxStoreState} />
        <Redirect to="/project" />
      </Switch>
    </Router>
  );
}
