import {View,Text,StyleSheet,TextInput,ScrollView,SafeAreaView,Alert,} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card,ThemeContext,Button,Input,Overlay,CheckBox} from 'react-native-elements';
import {addRoom} from '../../actions/RoomsAction';
import {getRoomsPerLandlord} from '../../actions/RoomsPerLandlordAction';
import {connect} from 'react-redux';
import {addTenant} from '../actions/TenantsAction';
import {LogBox} from 'react-native';
import { addReservation } from '../../actions/ReservationAction';
import {getRoom}from '../../actions/RoomsAction';
import styles from '../Locateur/styles.js';
import DatePicker from 'react-native-date-picker';



const AddReservation = (props) => {
  const [in_date, setIn_date] = useState (new Date());
  const [out_date, setOut_date] = useState (new Date ());
  const add = () => {
    props.addReservation(in_date,out_date,props.room.price,props.room.capacity);
    setIn_date ('');
    setOut_date ('');
    props.getRoom(props.room.price);
    props.getRoom (props.room.capacity);
    props.route.params.updateData ();
    props.navigation.goBack ();
  }
  return (
      <View>
    <SafeAreaView style={styles.view} contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <ScrollView style={styles.container}>
      

        <Text for="start">Date de début :</Text>
        <Input leftIcon={{type: 'font-awesome', name: 'calendar', color: '#517fa4'}}
        type="date" id="start" name="trip-start"  min="2020-01-01" max="2025-12-31" placeholder = 'AA-MM-JJ'
        onChangeText={date => setIn_date (date)}/>
        <Text for="start">Date de Fin :</Text>
        <Input leftIcon={{type: 'font-awesome', name: 'calendar', color: '#517fa4'}}
        type="date" id="start" name="trip-start" placeholder = 'AA-MM-JJ' min="2020-01-01" max="2025-12-31"
        onChangeText={date => setOut_date (date)}/>

        <Input
          leftIcon={{type: 'font-awesome', name: 'users', color: '#517fa4'}}
          password
          placeholder="Nombre de Personnes"
          leftIconContainerStyle={{marginRight: 9}}
          onChangeText={text => setCapacity (text)}
        />
        <View
          leftIcon={{type: 'font-awesome', name: 'dollar', color: '#517fa4'}}
          password
          placeholder="Détails sur prix"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 8}}
          onChangeText={text => setPrice (text)}
        />

      </ScrollView>
      <View>
        <Button
          title="Confirmer"
          type="outline"
          
        />
      </View>
    </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    reservation: state.reservation,
    rooms: state.rooms,
  };
};
const mapDispatchToProps = {
};
export default connect (mapStateToProps, mapDispatchToProps) (AddReservation);
