import axios from 'axios';

const user_id = "3b104c53-d0d2-4ec1-bbb2-8d106635c790"
const baseUrl =
  "https://airbnb-clone-rest-api.herokuapp.com/api";

export const addLandlord = (userName, mailAdress, password, firstName, lastName, birthDay, gender) => {
  return dispatch => {
    axios
      .post(`${baseUrl}/${user_id}/landlords`, {
        first_name: firstName,
        last_name: lastName,
        mail_address: mailAdress,
        birth_date: birthDay,
        gender: gender,
        username: userName,
        benefits: 0,
        password: password
      })
      .then(response => {
        dispatch(getLandlords());
      });
  };
};

export const getLandlords = () => {
  return dispatch => {
    axios.get(`${baseUrl}/${user_id}/landlords`).then(
      response => {
        dispatch({ type: 'GET_LANDLORDS', payload: response.data });
      },
      error => {
        dispatch({ type: 'GET_LANDLORDS', payload: [] });
      },
    );
  };
};

