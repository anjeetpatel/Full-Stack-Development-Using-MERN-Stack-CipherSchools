import axios from "axios";

export const TaskApplicationBackend = axios.create({
  baseURL: "http://localhost:4000",
});

TaskApplicationBackend.interceptors.request.use(
  (config) => {
    console.log("Run this config");
    console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
