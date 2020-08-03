import React, { useEffect, useState } from "react";
import { fetchProject } from "../../clients/project/fetchProject";

export const Selects = {
  ProjectList: ({ name, register, onChange }) => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
      fetchProject.findList().then((res) => {
        setProjectList(res.data);
      });
    }, []);

    return (
      <select name={name} ref={register} onChange={onChange}>
        {projectList.map((row, i) => (
          <option key={row.id} value={row.id}>
            {row.title}
          </option>
        ))}
      </select>
    );
  },
};
