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

export const fetchProject = {
  findList,
  findOne,
};
