import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from 'react-native-elements';
import ProfilLocataire from './ProfilLocataire';
import Annonces from './Annonces';
import MesReservationsLocataire from './MesReservationsLocataire';
const Tab = createBottomTabNavigator();

const NavigationLocataire = props => {
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
          if (route.name === 'Home') {
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
      <Tab.Screen name="Home" component={Annonces} />
      <Tab.Screen name="Mes Reservations" component={MesReservationsLocataire} />
      <Tab.Screen name="Profil" component={ProfilLocataire} />
    </Tab.Navigator>
  );
};

export default NavigationLocataire;
