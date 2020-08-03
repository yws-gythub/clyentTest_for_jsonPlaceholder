import React, { useEffect, useState } from "react";
import { fetchProject } from "../../clients/project/fetchProject";
import { Link } from "react-router-dom";

export default function Project_ReactState({ match }) {
  const id = match.params.project_id;
  const initData = {
    id: null,
    title: null,
    userId: null,
    completed: null,
  };

  const [project, setProject] = useState(initData);

  useEffect(() => {
    fetchProject.findOne(id).then((res) => {
      setProject(res.data);
    });
  }, [id]);

  return (
    <div>
      <h1>
        Get project data using <span style={{ color: "blue" }}>useState() React Hook.</span>
      </h1>
      <div>ID: {project.id}</div>
      <div>TITLE: {project.title}</div>
      <div>USER_ID: {project.userId}</div>
      <div>COMPLETED: {project.completed ? "true" : "false"}</div>
      <br />
      <div>
        <Link to="/project">Link to project list.</Link>
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
