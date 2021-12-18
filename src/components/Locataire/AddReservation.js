import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ThemeContext, Button, Input, Overlay, CheckBox } from 'react-native-elements';
import { addRoom } from '../../actions/RoomsAction';
import { getRoomsPerLandlord } from '../../actions/RoomsPerLandlordAction';
import { connect } from 'react-redux';
import { addTenant } from '../actions/TenantsAction';
import { LogBox } from 'react-native';


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const AddReservation = (props) => {



    const [town, setTown] = useState('');
    const [roomId, setRoom] = useState('');
    const [landlordId, setLandlordId] = useState('');
    const [tenantId, settenantId] = useState('');
    const [capacity, setCapacity] = useState('');
    const [price, setPrice] = useState('');

    const add = () => {

        props.AddReservation(town, props.room.id, props.landlord.id,props.tenant.id , capacity, price);
                    setTown('');
                    setRoom('');
                    setLandlordId('');
                    settenantId("");
                    setCapacity("");
                    setPrice("");
                    props.getReservationPerTenant(props.Tenant.id);
                    props.route.params.updateData();
                    props.navigation.goBack();
 
    }
    return (
        <SafeAreaView style={styles.view}>

            <ScrollView style={styles.container}>

                <Input leftIcon={{ type: 'font-awesome', name: 'map-marker', color: "#517fa4" }}
                    password placeholder="Ville"
                    leftIconContainerStyle= {{marginRight: 15, marginLeft: 6,}}
                    onChangeText={text => setTown(text)}></Input>


                <Input leftIcon={{ type: 'font-awesome', name: 'users', color: "#517fa4" }}
                    password placeholder="Capacité"
                    leftIconContainerStyle= {{marginRight: 9,}}
                    onChangeText={text => setCapacity(text)}></Input>
                
                <Input leftIcon={{ type: 'font-awesome', name: 'dollar', color: "#517fa4" }}
                    password placeholder="Prix par nuit"
                    leftIconContainerStyle= {{marginRight: 15, marginLeft: 8,}}
                    onChangeText={text => setPrice(text)}></Input>
                

                {/* <View style={{ marginRight: 50, marginLeft: 50 }}>
                    <Button onPress={() => {
                        add()
                    }
                    }

                        title="Publier l'annonce"
                    />
                </View> */}
            </ScrollView>
            <View >
              <Button 
                title="Ajouter une Reservation" 
                type="outline" 
                onPress={() => {
                  add()
                  }
                }
                // onPress={addannonceHandler} 

              /> 
            </View>
        </SafeAreaView>
    );

};