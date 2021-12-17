/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { TownsReducer } from './src/reducers/TownsReducer';
import { LandlordsReducer } from './src/reducers/LandlordsReducer';
import { LandlordReducer } from './src/reducers/LandlordReducer';
import { TenantsReducer } from './src/reducers/TenantsReducer';
import { TenantReducer } from './src/reducers/TenantReducer';
import { RoomsPerLandlordReducer } from './src/reducers/RoomsPerLandlordReducer';
import { RoomsReducer } from './src/reducers/RoomsReducer';
import { ReservationsPerLandlordReducer } from './src/reducers/ReservationsPerLandlordReducer';

const reducers = combineReducers({
  towns: TownsReducer,
  landlords: LandlordsReducer,
  landlord: LandlordReducer,
  tenants: TenantsReducer,
  tenant: TenantReducer,
  rooms_per_landlord: RoomsPerLandlordReducer,
  rooms: RoomsReducer,
  reservations_per_landlord: ReservationsPerLandlordReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
