import React, { useEffect, useState } from "react";
import { fetchProject } from "../../clients/project/fetchProject";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Selects } from "../../components/HTML/Selects";

export default function Project_ReactHookForm({ match }) {
  const id = match.params.project_id;
  const { register, handleSubmit, watch, errors, setValue } = useForm({
    defaultValues: {
      //selectProject: "7", // use setValue to async Component.
    },
  });

  const initData = {
    id: null,
    title: null,
    userId: null,
    completed: null,
  };

  const [project, setProject] = useState(initData);
  const [select, setSelect] = useState(id);

  useEffect(() => {
    fetchProject.findOne(id).then((res) => {
      setProject(res.data);
    });
  }, [id]);

  useEffect(() => {
    setValue("selectProject", select);
    setValue("title", project.title);
  });

  const onSubmit = (data) => {
    console.log("onSubmit", data);
    fetchProject.update(data).then((res) => {
      console.log("res", res.data);
      setProject(data);
      alert("update complete.");
    });
  };

  const selectChange = (e) => {
    const idx = e.target.selectedIndex;
    console.log(e.target[idx].text);
    setSelect(e.target.value);
    setProject({ ...project, title: e.target[idx].text });
  };

  const titleChange = (e) => {
    setProject({ ...project, title: e.target.value });
  };

  return (
    <div>
      <h1>
        Get project data using <span style={{ color: "green" }}>useState() and React Hook Form.</span>
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        ID
        <input name="id" type="text" defaultValue={project.id} ref={register} />
        <br />
        USER ID
        <input name="userId" type="number" defaultValue={project.userId} ref={register({ required: true })} />
        <br />
        TITLE - require test.
        <input name="title" type="text" defaultValue={project.title} ref={register({ required: true })} onChange={titleChange} />
        {errors.title && "TITLE is required"}
        === <Selects.ProjectList register={register} name="selectProject" onChange={selectChange} />
        <br />
        COMPLETED
        <input name="completed" type="checkbox" defaultChecked={project.completed} ref={register} />
        <br />
        <input type="submit" />
      </form>
      <br />
      <div>{JSON.stringify(project)}</div>
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
      <br />
      <br />
      <div>
        <Link to="/project">Link to project list</Link>
      </div>
    </div>
  );
}
