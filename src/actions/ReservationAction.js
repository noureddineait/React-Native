import axios from 'axios';

const user_id = '3b104c53-d0d2-4ec1-bbb2-8d106635c790';
const baseUrl = 'https://airbnb-clone-rest-api.herokuapp.com/api';

export const addReservation = (
  id_room,
tenant_username,
landlord_username,
in_date,
out_date,
status,

) => {
  return dispatch => {
    axios
      .post (`${baseUrl}/${user_id}/Reservations`, {
        room: id_room,
        tenant: tenant_username,
        landlord: landlord_username,
        in_date: in_date,
        out_date: out_date,
        status: status,
      })
      .then (response => {
        dispatch (getReservationsPerTenant ());
      });
  };
};



