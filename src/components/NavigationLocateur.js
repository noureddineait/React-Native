import React, {useContext} from 'react';



import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import {ThemeContext} from 'react-native-elements';
import HomeLocateur from './HomeLocataire';
import HomeLocataire from "./HomeLocateur"
import Test from "./test"
import ProfilLocateur from './ProfilLocateur';
const Tab = createBottomTabNavigator();

const NavigationLocateur = () => {
  const {theme} = useContext(ThemeContext);

  return (
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
// CHANGER LES ICONES ET NOMS ATTENTION
            if (route.name === 'Home') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Profil') {
              iconName = 'user-circle';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: 'white',
        })}>

{/* Changer le nom et Components ATTENTION*/} 
        <Tab.Screen name="Home" component={Test} />
        <Tab.Screen name="Profil" component={ProfilLocateur} />
      </Tab.Navigator>
    
  );
};

export default NavigationLocateur;
