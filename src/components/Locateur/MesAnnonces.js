import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Annonce from './Annonce';
import {Button, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {getRoomsPerLandlord} from '../../actions/RoomsPerLandlordAction';

const MesAnnonces = props => {
  const updateData = () => {
    props.getRoomsPerLandlord(props.landlord.id);
  };
  const addannonceHandler = () => {
    props.navigation.navigate('AddAnnonce', {updateData: updateData});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {props.rooms_per_landlord.map(room => {
              return (
                <Card key={room.id}>
                  <Annonce
                    id={room.id}
                    town={room.town}
                    landlordName={props.landlord.username}
                    capacity={room.capacity}
                    price={room.price}
                    nav={props.navigation}
                    updateData={updateData}
                  />
                </Card>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View>
        <Button
          title="Ajouter une annonce"
          type="outline"
          onPress={addannonceHandler}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    rooms_per_landlord: state.rooms_per_landlord,
    landlord: state.landlord,
  };
};

const mapDispatchToProps = {
  getRoomsPerLandlord: getRoomsPerLandlord,
};
export default connect(mapStateToProps, mapDispatchToProps)(MesAnnonces);

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
