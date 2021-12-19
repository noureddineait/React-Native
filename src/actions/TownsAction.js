import axios from 'axios';

const baseUrl = 'https://airbnb-clone-rest-api.herokuapp.com/api';

export const getTowns = () => {
  return dispatch => {
    axios.get(`${baseUrl}/towns`).then(
      response => {
        dispatch({type: 'GET_TOWNS', payload: response.data});
      },
      error => {
        dispatch({type: 'GET_TOWNS', payload: []});
      },
    );
  };
};
