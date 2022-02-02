import axios from "axios";

const BASE_URL = "https://honoraback.herokuapp.com/user";

export const submitData = (data) => {
  return axios
    .post(BASE_URL, data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.response;
    });
};

// get data from database
export const getData = () => {
  return axios
    .get(BASE_URL)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.response;
    });
};
