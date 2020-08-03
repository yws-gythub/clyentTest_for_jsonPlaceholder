import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProject } from "../../clients/project/fetchProject";

export default function ProjectForm({ match, history }) {
  const id = match.params.project_id;
  const buttonText = id ? "Update" : "Create";

  const initData = { id: null, userId: null, title: null, completed: null };
  const [project, setProject] = useState(initData);

  useEffect(() => {
    if (id)
      fetchProject.findOne(id).then((res) => {
        setProject(res.data);
      });
  }, [id]);

  const inputChange = (e) => {
    const { name, value, checked } = e.target;
    const Value = name === "completed" ? checked : value;
    setProject({ ...project, [name]: Value });
  };

  const button_onClick = (e) => {
    if ((!project.id && window.confirm("create?")) || (project.id && window.confirm("update?"))) {
      if (!project.id)
        fetchProject.create(project).then((res) => {
          //Create
          console.log("res", res.data);
          window.alert(res.data.id);
          history.push("/project");
        });
      else
        fetchProject.update(project).then((res) => {
          //Update
          console.log("res", res.data);
          window.alert(JSON.stringify(res.data));
          //history.push("/project");
        });
    }
  };

  return (
    <div>
      {id && <label>Project ID : {id}</label>}
      <br />
      Title
      <input type="text" name="title" defaultValue={project.title} onChange={inputChange} />
      <br />
      User ID
      <input type="text" name="userId" defaultValue={project.userId} onChange={inputChange} />
      <br />
      Completed
      <input type="checkbox" name="completed" defaultChecked={project.completed} onChange={inputChange} />
      <br />
      <br />
      <button onClick={button_onClick}> {buttonText} Project </button>
      <br />
      <br />
      <div>
        <Link to="/project">Link to project list</Link>
      </div>
    </div>
  );
}
