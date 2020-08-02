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
      <h1>Get project data using useState() React Hook.</h1>
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
