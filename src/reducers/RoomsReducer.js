export const RoomsReducer = (rooms = [], action) => {
  switch (action.type) {
    case 'GET_ROOMS':
      return action.payload;
    default:
      return rooms;
  }
};
