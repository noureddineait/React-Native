export const TenantReducer = (tenant = [], action) => {
    switch (action.type) {
        case 'GET_TENANT':

            return action.payload;
        default:

            return tenant;
    }
};
