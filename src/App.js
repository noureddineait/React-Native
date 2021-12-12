/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useContext} from 'react';
import Login from './components/Login';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignUp from './components/SignUp';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ThemeContext} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeLocataire from './components/HomeLocataire';
import HomeLocateur from './components/HomeLocateur';
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
    </Stack.Navigator>
    </NavigationContainer>
  );
};
//3b104c53-d0d2-4ec1-bbb2-8d106635c790

export default App;
