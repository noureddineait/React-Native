import axios from 'axios';
import { getLandlords } from './LandlordsAction';

const user_id = "3b104c53-d0d2-4ec1-bbb2-8d106635c790"
const baseUrl =
  "https://airbnb-clone-rest-api.herokuapp.com/api";


export const getLandlord = (landlord_id) => {

  return dispatch => {
    axios.get(`${baseUrl}/${user_id}/landlord/${landlord_id}`).then(
      response => {
        dispatch({ type: 'GET_LANDLORD', payload: response.data });
      },
      error => {
        dispatch({ type: 'GET_LANDLORD', payload: [] });
      },
    );
  };
};

export const updateLandlord = (landlord_id, first_name, last_name, mail_address, birth_date, gender, username, password,benefits) => {
  return dispatch => {
    axios
      .put(`${baseUrl}/${user_id}/landlord/${landlord_id}`, {

        first_name: first_name,
        last_name: last_name,
        mail_address: mail_address,
        birth_date: birth_date,
        gender: gender,
        username: username,
        password: password,
        benefits:benefits,

      })
      .then(response => {
        dispatch(getLandlord(landlord_id));
      });
  };
}