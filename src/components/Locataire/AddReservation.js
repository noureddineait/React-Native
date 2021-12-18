import {View,Text,StyleSheet,TextInput,ScrollView,SafeAreaView,Alert} from 'react-native';
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

LogBox.ignoreLogs ([
  'Non-serializable values were found in the navigation state',
]);

const AddReservation = props => {
  const [in_date, setIn_date] = useState ('');
  const [out_date, setOut_date] = useState ('');
  const add = () => {
    props.addReservation (in_date,out_date,props.room.price,props.room.capacity, props.landlord.id);
    setIn_date ('');
    setOut_date ('');
    props.getRoom(props.room.price);
    props.getRoom (props.room.capacity);
    props.getRoomsPerLandlord (props.landlord.id);
    props.route.params.updateData ();
    props.navigation.goBack ();
  };
  return (
      <View>
    <SafeAreaView style={styles.view}>

      <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://canaguide.ca/datas/google-photo/3c8af68f52a3f7712aa42b70aee737ee-Auberge-Centre-Ville-Rimouski-Rimouski-QC-Canada-CanaGuide.jpg',}}
       />

        <Text for="start">Date de début :</Text>
        <Input 
        type="date" id="start" name="trip-start" value="2018-07-22" min="2020-01-01" max="2025-12-31" 
        onChangeText={date => setIn_date (date)}/>
        <Text for="start">Date de Fin :</Text>
        <Input type="date" id="start" name="trip-start" value="2018-07-22" min="2020-01-01" max="2025-12-31"
        onChangeText={date => setOut_date (date)}/>
        <Input
          leftIcon={{type: 'font-awesome', name: 'users', color: '#517fa4'}}
          password
          placeholder="Nombre Personne"
          leftIconContainerStyle={{marginRight: 9}}
          onChangeText={text => setCapacity (text)}
        />
        <Text
          leftIcon={{type: 'font-awesome', name: 'dollar', color: '#517fa4'}}
          password
          placeholder="Prix par nuit"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 8}}
          onChangeText={text => setPrice (text)}
        />

      </ScrollView>
      <View>
        <Button
          title="Reserver cette chambre"
          type="outline"
          onPress={() => {
            add ();
          }}
        />
      </View>
    </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create ({
  view: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // margin: 12,
    // padding: 10,
    // flexDirection: 'column',

    // justifyContent: 'center', //Centered horizontally
    // alignItems: 'center', //Centered vertically
    // flex: 1
  },

  container: {
    paddingTop: 20,
    paddingHorizontal: 45,
  },
  searchSection: {
    marginLeft: 13,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 85,
    width: 150,
    margin: 5,
    padding: 10,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
const mapStateToProps = state => {
  return {
    reservation: state.reservation,
  };
};
const mapDispatchToProps = {
  addReservation: addReservation,
};
export default connect (mapStateToProps, mapDispatchToProps) (AddReservation);
