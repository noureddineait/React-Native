import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Reservation from './Reservation';
import Icon from 'react-native-vector-icons/AntDesign';
import { Header, Input, Button, Overlay, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { getRoomsPerLandlord } from '../../actions/RoomsPerLandlordAction';
import { getReservationsPerLandlord } from '../../actions/ReservationsPerLandlordAction';
import { getTenant } from '../../actions/TenantAction';
import { getRoom } from '../../actions/RoomAction';




const MesReservations = (props) => {

    useEffect(() => {
    props.getReservationsPerLandlord(props.landlord.id);
    

    }, []);
//     const updateData = () => {
//       props.getRoomsPerLandlord(props.landlord.id);
//   }

//   const addannonceHandler = () => {
//     props.navigation.navigate("AddAnnonce", {updateData: updateData,});
//   }

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
            props.reservations_per_landlord.map((reservation) => {
                props.getTenant(reservation.tenant);
                props.getRoom(reservation.room);
              return (
                <Card key={reservation.room}  >
                        {/* <Text> {props.tenant.username} a résérvé la chambre {reservation.room} , {reservation.landlord} </Text> */}
                  <Reservation 
                  
                    town={props.room.town} 
                    tenantUsername={props.tenant.username}
                    nbrPersons={reservation.nbr_persons}
                    inDate={reservation.in_date}
                    outDate={reservation.out_date}
                    prixTotal={reservation.total_price}
                  
                  
                  /> 
                
                </Card>
               
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>
      
    </View>
  );
}

const mapStateToProps = state => {
  return {
    reservations_per_landlord: state.reservations_per_landlord,
    landlord: state.landlord,
    tenant: state.tenant,
    room: state.room,
  };
};

const mapDispatchToProps = {
  getReservationsPerLandlord: getReservationsPerLandlord,
  getTenant: getTenant,
  getRoom: getRoom,

};
export default connect(mapStateToProps, mapDispatchToProps)(MesReservations);









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  addBtn: {
    borderColor: "#C0C0C0",
  },
});