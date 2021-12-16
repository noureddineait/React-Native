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
      <Stack.Screen name="SignUp" component={SignUp} options={{headerLeft: () => null}} />
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

    </Stack.Navigator>
    {/* test */}
    </NavigationContainer>
  );
};

//3b104c53-d0d2-4ec1-bbb2-8d106635c790

export default App;
