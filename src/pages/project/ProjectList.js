import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  projectListSelector,
  //projectListAction,
  projectListActionGetProjectList
} from "../../slices/project/projectList";
import ProjectRow from "../../components/LIST/ProjectRow";
//import { Rows } from "../../components/LIST/Rows";

export default function ProjectList() {
  const dispatch = useDispatch();

  const { projectList, count } = useSelector(projectListSelector);

  useEffect(() => {
    //dispatch(projectListAction.getProjectList());
    dispatch(projectListActionGetProjectList());
  }, [dispatch]);

  // const rows = () => {
  //   if (!projectList || projectList.length === 0)
  //     return <div> - - - - - - </div>;

  //   return projectList.map((row, i) => {
  //     return <ProjectRow key={i} row={row} />;
  //   });
  // };

  return (
    <div>
      <h1>YES</h1>
      {count}
      <div>
        {projectList.map((row, i) => (
          <ProjectRow key={i} row={row} />
          //<Rows.ProjectList key={i} row={row} />
        ))}
      </div>
    </div>
  );
}
