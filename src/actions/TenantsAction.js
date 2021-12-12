import axios from 'axios';

const user_id = "3b104c53-d0d2-4ec1-bbb2-8d106635c790"
const baseUrl =
  "https://airbnb-clone-rest-api.herokuapp.com/api";

export const addTenant = (userName, mailAdress, password) => {
  return dispatch => {
    axios
      .post(`${baseUrl}/${user_id}/tenants`, {
        first_name: "Noureddine",
        last_name: "AITELHAJ",
        mail_address: mailAdress,
        birth_date: "2021-12-10",
        gender: "M",
        username: userName,
        balance: 0,
        password: password
      })
      .then(response => {
        dispatch(getTenants());
      });
  };
};

export const getTenants = () => {
  return dispatch => {
    axios.get(`${baseUrl}/${user_id}/tenants`).then(
      response => {
        dispatch({ type: 'GET_TENANTS', payload: response.data });
      },
      error => {
        dispatch({ type: 'GET_TENANTS', payload: [] });
      },
    );
  };
};
