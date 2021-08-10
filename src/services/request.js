import axios from "axios";

const config = {
  baseURL: "",
  timeout: 1000,
  headers: {},
};

const instance = axios.create(config);

const request = instance.request;

export default request;
