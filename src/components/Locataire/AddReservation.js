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
    props.addReservation (in_date,out_date,room.price,room.capacity, props.landlord.id);
    setIn_date ('');
    setOut_date ('');
    props.getRoom(props.room.price);
    props.getRoom (props.room.capacity);
    props.getRoomsPerLandlord (props.landlord.id);
    props.route.params.updateData ();
    props.navigation.goBack ();
  };
  return (
    <SafeAreaView style={styles.view}>

      <ScrollView style={styles.container}>
        <label for="start">Date de début :</label>
        <input 
        type="date" id="start" name="trip-start" value="2018-07-22" min="2020-01-01" max="2025-12-31" 
        onChangeText={text => setIn_date (text)}/>
        <label for="start">Date de Fin :</label>
        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2020-01-01" max="2025-12-31"
        onChangeText={text => setOut_date (text)}/>

        <Input
          leftIcon={{
            type: 'font-awesome',
            name: 'map-marker',
            color: '#517fa4',
          }}
          password
          placeholder="Ville"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 6}}
          onChangeText={text => setTown (text)}
        />

        <Input
          leftIcon={{type: 'font-awesome', name: 'users', color: '#517fa4'}}
          password
          placeholder="Capacité"
          leftIconContainerStyle={{marginRight: 9}}
          onChangeText={text => setCapacity (text)}
        />

        <Input
          leftIcon={{type: 'font-awesome', name: 'dollar', color: '#517fa4'}}
          password
          placeholder="Prix par nuit"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 8}}
          onChangeText={text => setPrice (text)}
        />

        {/* <View style={{ marginRight: 50, marginLeft: 50 }}>
                    <Button onPress={() => {
                        add()
                    }
                    }

                        title="Publier l'annonce"
                    />
                </View> */}
      </ScrollView>
      <View>
        <Button
          title="Ajouter une annonce"
          type="outline"
          onPress={() => {
            add ();
          }}
          // onPress={addannonceHandler}
        />
      </View>
    </SafeAreaView>
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
