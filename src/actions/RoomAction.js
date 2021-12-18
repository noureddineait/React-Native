import axios from 'axios';

const user_id = "3b104c53-d0d2-4ec1-bbb2-8d106635c790"
const baseUrl =
  "https://airbnb-clone-rest-api.herokuapp.com/api";


export const getRoom = (room_id) => {

  return dispatch => {
    axios.get(`${baseUrl}/${user_id}/room/${room_id}`).then(
      response => {
        dispatch({ type: 'GET_ROOM', payload: response.data });
      },
      error => {
        dispatch({ type: 'GET_ROOM', payload: [] });
      },
    );
  };
};