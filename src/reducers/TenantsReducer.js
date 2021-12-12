

export const TenantsReducer = (tenants = [], action) => {
  switch (action.type) {
    case 'GET_TENANTS':

      return action.payload;
    default:
      return tenants;
  }
};
