import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ThemeContext, Button, Input, Overlay, CheckBox } from 'react-native-elements';
import { addRoom, updateRoom } from '../../actions/RoomsAction';
import { getRoomsPerLandlord } from '../../actions/RoomsPerLandlordAction';
import { connect } from 'react-redux';
import { LogBox } from 'react-native';


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const EditAnnonce = (props) => {



    const [town, setTown] = useState('');
    const [landlordId, setLandlordId] = useState('');
    const [capacity, setCapacity] = useState('');
    const [price, setPrice] = useState('');

    const update = () => {

                    props.updateRoom(props.route.params.id, town, capacity, price );
                    setTown('');
                    setLandlordId("");
                    setCapacity("");
                    setPrice("");
                    props.getRoomsPerLandlord(props.landlord.id);
                    props.route.params.updateData();
                    props.navigation.goBack();
 
    }
    return (
        <SafeAreaView style={styles.view}>

            <ScrollView style={styles.container}>

            <Input leftIcon={{ type: 'font-awesome', name: 'map-marker', color: "#517fa4" }}
                    password placeholder="Nouvelle Ville"
                    leftIconContainerStyle= {{marginRight: 15, marginLeft: 6,}}
                    onChangeText={text => setTown(text)}></Input>


                <Input leftIcon={{ type: 'font-awesome', name: 'users', color: "#517fa4" }}
                    password placeholder="Nouvelle Capacité"
                    leftIconContainerStyle= {{marginRight: 9,}}
                    onChangeText={text => setCapacity(text)}></Input>
                
                <Input leftIcon={{ type: 'font-awesome', name: 'dollar', color: "#517fa4" }}
                    password placeholder="Nouveau Prix par nuit"
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
                title="Enregistrer la modification" 
                type="outline" 
                onPress={() => {
                    update()
                  }
                }
                // onPress={addannonceHandler} 

              /> 
            </View>
        </SafeAreaView>
    );

};
const styles = StyleSheet.create({
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
        fontWeight: "bold"
    },

});
const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        landlord: state.landlord,
       
    };
};
const mapDispatchToProps = {
    updateRoom: updateRoom,
    getRoomsPerLandlord: getRoomsPerLandlord,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditAnnonce);

