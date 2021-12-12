

export const LandlordsReducer = (landlords = [], action) => {
  switch (action.type) {
    case 'GET_LANDLORDS':

      return action.payload;
    default:
      return landlords;
  }
};
