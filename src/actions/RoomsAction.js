import axios from 'axios';

const user_id = "3b104c53-d0d2-4ec1-bbb2-8d106635c790"
const baseUrl =
  "https://airbnb-clone-rest-api.herokuapp.com/api";


  export const addRoom = (town, landlordId, capacity, price) => {
    return dispatch => {
      axios
        .post(`${baseUrl}/${user_id}/rooms`, {

            town: town,
            landlord: landlordId,
            capacity: capacity,
            price: price,

        })
        .then(response => {
          dispatch(getRooms());
        });
    };
  };

  export const deleteRoom = (room_id) => {
    return dispatch => {
      axios
        .delete(`${baseUrl}/${user_id}/room/${room_id}`)
        .then(response => {
          dispatch(getRooms());
        });
    };
  };


  export const getRooms = () => {
    return dispatch => {
      axios.get(`${baseUrl}/${user_id}/rooms`).then(
        response => {
          dispatch({ type: 'GET_ROOMS', payload: response.data });
        },
        error => {
          dispatch({ type: 'GET_ROOMS', payload: [] });
        },
      );
    };
  };