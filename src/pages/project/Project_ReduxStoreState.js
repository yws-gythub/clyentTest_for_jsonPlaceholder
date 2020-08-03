import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncDispatch, projectSelector } from "../../slices/project/project";
import { fetchProject } from "../../clients/project/fetchProject";

export default function Project_ReduxStoreState({ match }) {
  const id = match.params.project_id;
  const dispatch = useDispatch();
  const project = useSelector(projectSelector);

  useEffect(() => {
    dispatch(asyncDispatch.findOne(id));
  }, [id, dispatch]);

  const colorRed = { color: "red" };

  return (
    <div>
      <h1>
        Get project data using <span style={colorRed}>useSelector() Redux Hook.</span>
      </h1>
      <div>ID: {project.id}</div>
      <div>TITLE: {project.title}</div>
      <div>USER_ID: {project.userId}</div>
      <div>COMPLETED: {project.completed ? "true" : "false"}</div>
      <br />
      <div>
        <Link to="/project">Link to project list</Link>
        <br />
        <br />
        <Link to={`/project/update/${project.id}`}>Link to project update.</Link>
        <br />
        <br />
        <button
          onClick={() => {
            if (window.confirm("delete?")) {
              fetchProject.deleteOne(project.id).then(() => {
                window.alert("delete complete.");
              });
            }
          }}
        >
          Delete this project.
        </button>
      </div>
    </div>
  );
}
