import axios from "axios";

const BASE_URL = "https://honoraback.herokuapp.com/user";

export const submitData = (data) => {
  try {
    return axios.post(BASE_URL, data).then((data) => {
      return data;
    });
  } catch (err) {
    return err.response;
  }
};

// get data from database
export const getData = () => {
  try {
    return axios.get(BASE_URL).then((data) => {
      return data;
    });
  } catch (err) {
    return err.response;
  }
};
// delete data from database
export const deleteData = (id) => {
  alert("Are you sure you want to delete this message?");
  try {
    return axios.delete(`${BASE_URL}/${id}`).then((data) => {
      window.location.reload();
      return data;
    });
  } catch (err) {
    return err.response;
  }
};
