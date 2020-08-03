import React from "react";
import { Link } from "react-router-dom";

export const Rows = {
  ProjectList: ({ row }) => {
    let react_redux = row.id % 10 > 4 ? "reactState" : "reduxStoreState";
    return (
      <div>
        {row.id}. [{react_redux}] <Link to={`/project/${react_redux}/${row.id}`}>{row.title}</Link>
      </div>
    );
  },
};
