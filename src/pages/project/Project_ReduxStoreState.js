import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncDispatch_Project, projectSelector } from "../../slices/project/project";

export default function Project_ReduxStoreState({ match }) {
  const id = match.params.project_id;
  const dispatch = useDispatch();
  const project = useSelector(projectSelector);

  useEffect(() => {
    dispatch(asyncDispatch_Project(id));
  }, [id]);

  return (
    <div>
      <h1>Get project data using useSelector() Redux Hook.</h1>
      <div>ID: {project.id}</div>
      <div>TITLE: {project.title}</div>
      <div>USER_ID: {project.userId}</div>
      <div>COMPLETED: {project.completed ? "true" : "false"}</div>
      <br />
      <div>
        <Link to="/project">Link to project list</Link>
      </div>
    </div>
  );
}
