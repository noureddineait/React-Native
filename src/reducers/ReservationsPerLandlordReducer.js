export const ReservationsPerLandlordReducer = (
  reservations_per_landlord = [],
  action,
) => {
  switch (action.type) {
    case 'GET_RESERVATIONSPERLANDLORD':
      return action.payload;
    default:
      return reservations_per_landlord;
  }
};
