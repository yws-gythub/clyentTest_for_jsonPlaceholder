import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncDispatch, projectSelector, changeInput, asyncDispatch_Project } from "../../slices/project/project";

export default function ProjectForm({ match, history }) {
  const id = match.params.project_id;
  const dispatch = useDispatch();
  const project = useSelector(projectSelector);

  useEffect(() => {
    if (id) dispatch(asyncDispatch.findOne(id));
  }, [id, dispatch]);

  const title_onChange1 = (e) => {
    console.log(e.target.value);
  };

  const title_onChange2 = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log("project", project);
  };

  const button_onClick = useCallback(() => {
    if (!project.id && window.confirm("create?")) {
      dispatch(asyncDispatch.create(project));
      //history.push("/project/reduxStoreState/");
    }
    if (project.id && window.confirm("update?")) {
      dispatch(asyncDispatch.update(project));
    }
  }, [project]);

  const inputChange = useCallback(
    (e) => {
      const { name, value, checked } = e.target;
      const Value = name === "completed" ? checked : value;

      dispatch(changeInput({ id: id, name: name, value: Value }));
    },
    [dispatch]
  );

  return (
    <div>
      {id && <label>Project ID : {id}</label>}
      Title
      <input type="text" name="title" defaultValue={project.title} onChange={inputChange} />
      <br />
      User ID
      <input type="text" name="userId" defaultChecked={project.userId} onChange={inputChange} />
      <br />
      Completed
      <input type="checkbox" name="completed" defaultChecked={project.completed} onChange={inputChange} />
      <br />
      <br />
      <button onClick={button_onClick}> create Project </button>
      <br />
      <br />
      <div>
        <Link to="/project">Link to project list</Link>
      </div>
    </div>
  );
}
