import axios from 'axios';

const user_id = "3b104c53-d0d2-4ec1-bbb2-8d106635c790"
const baseUrl =
    "https://airbnb-clone-rest-api.herokuapp.com/api";


export const getTenant = (tenant_id) => {

    return dispatch => {
        axios.get(`${baseUrl}/${user_id}/tenant/${tenant_id}`).then(
            response => {
                dispatch({ type: 'GET_TENANT', payload: response.data });
            },
            error => {
                dispatch({ type: 'GET_TENANT', payload: [] });
            },
        );
    };
};

export const updateTenant = (tenant_id, first_name, last_name, mail_address, birth_date, gender, username, password,balance) => {
    return dispatch => {
      axios
        .put(`${baseUrl}/${user_id}/tenant/${tenant_id}`, {
  
          first_name: first_name,
          last_name: last_name,
          mail_address: mail_address,
          birth_date: birth_date,
          gender: gender,
          username: username,
          password: password,
          balance:balance,
  
        })
        .then(response => {
          dispatch(getTenant(tenant_id));
        });
    };
  }