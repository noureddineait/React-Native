import axios from 'axios';
import { getReservationsPerTenant } from './ReservationsPerTenant';
const user_id = '3b104c53-d0d2-4ec1-bbb2-8d106635c790';
const baseUrl = 'https://airbnb-clone-rest-api.herokuapp.com/api';

export const addReservation = (
  id_room,
tenant,
landlord,
nbr_persons,
in_date,
out_date,
total_price,

) => {
  return dispatch => {
    axios
      .post (`${baseUrl}/${user_id}/reservations`, {
        room: id_room,
        tenant: tenant,
        landlord: landlord,
        nbr_persons:nbr_persons,
        in_date: in_date,
        out_date: out_date,
        total_price:total_price,
        status: "A",
      })
      .then (response => {
        dispatch (getReservationsPerTenant (tenant));
      });
  };
};



