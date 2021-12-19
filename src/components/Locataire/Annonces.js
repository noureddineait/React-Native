import React from 'react';
import {View, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import styles from '../Locateur/styles.js';
import {connect} from 'react-redux';
import AnnonceT from './AnnonceT';

const Annonces = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {props.rooms.map(room => {
              return (
                <Card key={room.id}>
                  <AnnonceT
                    nav={props.navigation}
                    id={room.id}
                    town={room.town}
                    landlordName={room.landlord}
                    capacity={room.capacity}
                    price={room.price}
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
    rooms: state.rooms,
  };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Annonces);
