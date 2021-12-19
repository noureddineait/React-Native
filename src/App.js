import React, {useContext} from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext, Button} from 'react-native-elements';
import MesAnnonces from './components/Locateur/MesAnnonces';
import AddAnnonce from './components/Locateur/AddAnnonce';
import EditAnnonce from './components/Locateur/EditAnnonce';
import EditProfilLocateur from './components/Locateur/EditProfilLocateur';
import EditProfilLocataire from './components/Locataire/EditProfilLocataire';
import AddReservation from './components/Locataire/AddReservation';
import NavigationLocateur from './components/Locateur/NavigationLocateur';
import NavigationLocataire from './components/Locataire/NavigationLocataire';
const App = () => {
  const Stack = createNativeStackNavigator();
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerLeft: () => null}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MesAnnonces" component={MesAnnonces} />
        <Stack.Screen name="AddAnnonce" component={AddAnnonce} />
        <Stack.Screen name="EditAnnonce" component={EditAnnonce} />
        <Stack.Screen name="NavigationLocateur" component={NavigationLocateur} options={{headerShown:false}} />
        <Stack.Screen name="NavigationLocataire" component={NavigationLocataire} options={{headerShown:false}}/>
        <Stack.Screen
          name="EditProfileLocateur"
          component={EditProfilLocateur}
          options={{title: 'Modifier Informations'}}
        />
        <Stack.Screen
          name="EditProfileLocataire"
          component={EditProfilLocataire}
          options={{title: 'Modifier Informations'}}
        />
        <Stack.Screen
          name="AddReservation"
          component={AddReservation}
          options={{title: 'Ajout des reservation'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
