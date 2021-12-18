
export const ReservationReducer = (towns = [], action) => {
  switch (action.type) {
    case 'GET_Reservation':
      return action.payload;
    default:
      return Reservation;
  }
};
