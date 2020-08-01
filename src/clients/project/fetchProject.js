import axios from "axios";

const listUrl = "https://jsonplaceholder.typicode.com/todos/";

const findList = () => {
  return axios({ method: "get", url: listUrl });
};

export const fetchProject = {
  findList
};
