import React from "react";
import { Link } from 'react-router-dom'
export default function ProjectRow({ row }) {
  console.log(row);

  return <div>{row.id}</div>;
}

/*
userId: 1
id: 2
title: "quis ut nam facilis et officia qui"
completed: false
*/
