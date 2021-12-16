import React,{useContext} from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ThemeContext, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';
import HomeLocataire from './components/HomeLocataire';
import HomeLocateur from './components/HomeLocateur';
import MesAnnonces from "./components/Locataire/MesAnnonces";
import AddAnnonce from "./components/Locataire/AddAnnonce";
import { TouchableOpacity } from 'react-native';
const App= () => {


  const Stack = createNativeStackNavigator();

  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerLeft: () => null}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerLeft: () => null}} />
      <Stack.Screen name="HomeLocataire" component={HomeLocataire} options={{ title: 'Welcome Locataire',headerLeft: null, }} />
      <Stack.Screen name="HomeLocateur" component={HomeLocateur} options={{ title: 'Welcome Locateur',headerLeft: null, }} />
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
