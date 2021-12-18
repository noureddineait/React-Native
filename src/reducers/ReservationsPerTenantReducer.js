import axios from 'axios';
export const ReservationsPerTenantReducer = (
  reservations_per_tenant = [],
  action
) => {
  switch (action.type) {
    case 'GET_RESERVATIONSPETENANT':
      return action.payload;
    default:
      return reservations_per_tenant;
  }
};
