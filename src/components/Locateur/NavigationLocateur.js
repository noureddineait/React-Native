import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from 'react-native-elements';
import ProfilLocateur from './ProfilLocateur';
import MesAnnonces from './MesAnnonces';
import {connect} from 'react-redux';
import MesReservations from './MesReservations';
const Tab = createBottomTabNavigator();
const NavigationLocateur = props => {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => (
          <Icon
            name="sign-out"
            size={25}
            style={{marginHorizontal: 10}}
            color="#FFFFFF"
            onPress={() => props.navigation.replace('Login')}
          />
        ),
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Mes Annonces') {
            iconName = 'home';
          } else if (route.name === 'Profil') {
            iconName = 'user-circle';
          } else if (route.name === 'Mes Reservations') {
            iconName = 'calendar-check-o';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: 'white',
      })}>
      <Tab.Screen name="Mes Annonces" component={MesAnnonces} />
      <Tab.Screen name="Mes Reservations" component={MesReservations} />
      <Tab.Screen name="Profil" component={ProfilLocateur} />
    </Tab.Navigator>
  );
};

export default NavigationLocateur;
