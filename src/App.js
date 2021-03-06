import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProjectList from "./pages/project/ProjectList";
import Project_ReactState from "./pages/project/Project_ReactState";
import Project_ReduxStoreState from "./pages/project/Project_ReduxStoreState";
import ProjectForm from "./pages/project/ProjectForm";
import Project_ReactHookForm from "./pages/project/Project_ReactHookForm";
import SignIn from "./pages/sign/SignIn";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/project" component={ProjectList} />
        <Route exact path="/project/reactState/:project_id" component={Project_ReactState} />
        <Route exact path="/project/reduxStoreState/:project_id" component={Project_ReduxStoreState} />
        <Route exact path="/project/reactHookForm/:project_id" component={Project_ReactHookForm} />
        <Route exact path="/project/create" component={ProjectForm} />
        <Route exact path="/project/update/:project_id" component={ProjectForm} />
        <Route exact path="/singIn" component={SignIn} />
        <Redirect to="/singIn" />
      </Switch>
    </Router>
  );
}
