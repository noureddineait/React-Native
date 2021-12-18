import React,{useContext} from 'react';
import Login from './components/Login';


import SignUp from './components/SignUp';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ThemeContext, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';

import MesAnnonces from "./components/Locateur/MesAnnonces";
import AddAnnonce from "./components/Locateur/AddAnnonce";
import { TouchableOpacity } from 'react-native';
import NavigationLocataire from './components/Locataire/NavigationLocataire';
import NavigationLocateur from './components/Locateur/NavigationLocateur';
import Test from './components/test';
import EditAnnonce from './components/Locateur/EditAnnonce';
import EditProfilLocateur from './components/Locateur/EditProfilLocateur';
import EditProfilLocataire from './components/Locataire/EditProfilLocataire';
const App= () => {


  const Stack = createNativeStackNavigator();

  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={
          {tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: 'white',}}>
      <Stack.Screen name="Login" component={Login} options={{headerLeft: () => null}}/>
      <Stack.Screen name="SignUp" component={SignUp}  />
      <Stack.Screen name="HomeLocataire" component={NavigationLocataire} options={{ title: 'Welcome Locataire',headerShown: false, }} />
      <Stack.Screen name="HomeLocateur" component={NavigationLocateur} options={{ title: 'Welcome Locateur',headerShown: false, }} />
      <Stack.Screen
          name="MesAnnonces"
          component={MesAnnonces}
        />
        <Stack.Screen
          name="AddAnnonce"
          component={AddAnnonce}
        />
        <Stack.Screen
          name="EditAnnonce"
          component={EditAnnonce}
        />
      <Stack.Screen name="EditProfileLocateur" component={EditProfilLocateur} options={{ title: 'Modifier Informations' }} /> 
      <Stack.Screen name="EditProfileLocataire" component={EditProfilLocataire} options={{ title: 'Modifier Informations' }} /> 


    </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
