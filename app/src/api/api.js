import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/tune_coding_challenge/server/v1/user/users/",
  responseType: "json",
});