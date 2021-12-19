export const ReservationsPerTenantReducer = (
  reservations_per_tenant = [],
  action,
) => {
  switch (action.type) {
    case 'GET_RESERVATIONSPERTENANT':
      return action.payload;
    default:
      return reservations_per_tenant;
  }
};
