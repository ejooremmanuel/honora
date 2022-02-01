import axios from "axios";

const BASE_URL = "http://localhost:4000/user";

export const submitData = (data) => {
  console.log(data);
  return axios
    .post(BASE_URL, data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.response;
    });
};
