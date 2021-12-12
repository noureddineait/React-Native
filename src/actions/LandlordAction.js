import axios from 'axios';

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