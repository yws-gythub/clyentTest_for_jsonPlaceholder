import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectListSelector, asyncDispatch_ProjectList } from "../../slices/project/projectList";
import { Rows } from "../../components/Table/Rows";
import { Link } from "react-router-dom";

export default function ProjectList() {
  const dispatch = useDispatch();

  const { projectList, count } = useSelector(projectListSelector);

  useEffect(() => {
    //dispatch(projectListAction.getProjectList());
    dispatch(asyncDispatch_ProjectList());
  }, [dispatch]);

  return (
    <div>
      <h1>YES</h1>
      {count} Count
      <h3>
        <Link to="/project/create">go create</Link>
      </h3>
      <div>
        {projectList.map((row, i) => (
          <Rows.ProjectList key={i} row={row} />
        ))}
      </div>
    </div>
  );
}
