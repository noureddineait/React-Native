import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Reservation from './Reservation';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {getReservationsPerLandlord} from '../../actions/ReservationsPerLandlordAction';
import {getTenants} from '../../actions/TenantsAction';
import {getRooms} from '../../actions/RoomsAction';

const MesReservations = props => {
  useEffect(() => {
    props.getReservationsPerLandlord(props.landlord.id);
    props.getTenants();
    props.getRooms();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {props.reservations_per_landlord.map(reservation => {
              return (
                <Card key={reservation.id}>

                  <Reservation
                    town={
                      props.rooms.filter(
                        room => room.id === reservation.room,
                      )[0].town
                    }
                    tenantUsername={
                      props.tenants.filter(
                        tenant => tenant.id === reservation.tenant,
                      )[0].username
                    }
                    nbrPersons={reservation.nbr_persons}
                    inDate={reservation.in_date}
                    outDate={reservation.out_date}
                    prixTotal={reservation.total_price}
                  />
                </Card>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    reservations_per_landlord: state.reservations_per_landlord,
    landlord: state.landlord,
    tenants: state.tenants,
    rooms: state.rooms,
  };
};

const mapDispatchToProps = {
  getReservationsPerLandlord: getReservationsPerLandlord,
  getTenants: getTenants,
  getRooms: getRooms,
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
    fontWeight: 'bold',
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
    alignItems: 'center',
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
    borderColor: '#C0C0C0',
  },
});
