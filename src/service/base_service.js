import axios from "axios";

const baseService = axios.create({
  baseURL: "https://api.avi-on.com"
});

// Add a request interceptor
baseService.interceptors.request.use(
  function (config) {
    console.log("interceptors.request", config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
baseService.interceptors.response.use(
  function (response) {
    console.log("interceptors.response", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default baseService;
