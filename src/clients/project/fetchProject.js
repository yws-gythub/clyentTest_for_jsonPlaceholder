import axios from "axios";

const listUrl = "https://jsonplaceholder.typicode.com/todos/";

const findList = () => {
  return axios({ method: "get", url: listUrl });
};

const findOne = (project_id) => {
  return axios({
    method: "get",
    url: listUrl + project_id,
  });
};

const create = (project) => {
  return axios({
    method: "post",
    url: listUrl,
    data: project,
  });
};

const update = (project) => {
  return axios({
    method: "patch",
    url: listUrl + project.project_id,
    data: project,
  });
};

const deleteOne = (project_id) => {
  return axios({ method: "delete", url: listUrl + project_id });
};

export const fetchProject = {
  findList,
  findOne,
  create,
  update,
  deleteOne,
};
