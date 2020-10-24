import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/TuneCodingChallenge/solution/server/v1/user",
  responseType: "json",
});