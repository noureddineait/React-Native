import React, {Row} from 'react';
import {View, Text, Image, Pressable,ScrollView} from 'react-native';
import {Button,Card} from 'react-native-elements';
import styles from '../Locateur/styles.js';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getRooms} from '../../actions/RoomsPerLandlordAction';
import {connect} from 'react-redux';
import AnnonceT from './AnnonceT';


const Annonces = (props) => {

    return (
      <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {
            props.rooms.map((room) => {
              return (
                <Card key={room.id}  >
                  <AnnonceT id={room.id} town={room.town} landlordName={room.landlord} capacity={room.capacity} price={room.price}  /> 
                
                </Card>
              )
            })
          }
          
        </View>
      </View>
      </ScrollView>
      </View>
  );
};
const mapStateToProps = state => {
  return {
    rooms: state.rooms,
  };
};

const mapDispatchToProps = {

};
export default connect (mapStateToProps, mapDispatchToProps) (Annonces);
