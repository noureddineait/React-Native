export const TownsReducer = (towns = [], action) => {
  switch (action.type) {
    case 'GET_TOWNS':
      return action.payload;
    default:
      return towns;
  }
};
