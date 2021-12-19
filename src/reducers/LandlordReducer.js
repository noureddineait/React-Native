export const LandlordReducer = (landlord = [], action) => {
  switch (action.type) {
    case 'GET_LANDLORD':
      return action.payload;
    default:
      return landlord;
  }
};
