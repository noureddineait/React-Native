export const RoomsPerLandlordReducer = (rooms_per_landlord = [], action) => {
  switch (action.type) {
    case 'GET_ROOMSPERLANDLORD':
      return action.payload;
    default:
      return rooms_per_landlord;
  }
};
