import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, ThemeContext, Button, Input, Overlay, Item } from 'react-native-elements';
import { getTowns } from '../actions/TownsAction';
import { connect } from 'react-redux';

const HomeLocataire = props => {
  useEffect(() => {
    props.getTowns();

  }, []);

  return (
    <View style={styles.view}>

      <Text>Welcome to the HomeLocataire Page !</Text>

      { 
        Object.entries(props.landlord).map(([key, value]) => {
            return (
                <Text key={value}>{key} : {value}</Text>
            );
        })

      }

      <View style={{ margin: 15 }} >
        <Button onPress={() =>
          props.navigation.replace('Login')}
          title="Log Out" >
        </Button>
        <Button onPress={() => props.navigation.replace ('Reservation')} title="Reservation" />;
      </View>

    </View>
  );

};
const styles = StyleSheet.create({
  view: {
    margin: 12,
    padding: 10,

    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1
  },


});
const mapStateToProps = state => {
  return {
    towns: state.towns,
    landlord: state.landlord
  };
};

const mapDispatchToProps = {
  getTowns: getTowns,

};
export default connect(mapStateToProps, mapDispatchToProps)(HomeLocataire);
