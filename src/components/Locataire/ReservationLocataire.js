import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const ReservationLocataire = props => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.underPic}>
        <Text style={styles.bedrooms}>
          <Icon name="users" size={20} />
          {'  '}
          {props.nbrPersons} Personnes
        </Text>
        <Text style={styles.bedrooms}>
          <Icon name="map-marker" size={20} />
          {'  '}
          {props.town}
        </Text>
      </View>

      <Divider orientation="horizontal" />

      <View style={styles.CorpsTop}>
        <Text style={styles.Corps}>
          <Text style={styles.Gras}>Chambre de : </Text>
          {props.landlordUsername}
        </Text>
        <View style={styles.CorpsView}>
          <Text style={styles.Corps}>
            <Text style={styles.Gras}>De: </Text>
            {props.inDate} {'  '}
            <Text style={styles.Gras}>À: </Text>
            {props.outDate}
          </Text>
        </View>

        <Text style={styles.CorpsUnder}>
          <Text style={styles.Gras}>Prix total: </Text>
          {props.prixTotal} {'$'}
        </Text>
      </View>
    </Pressable>
  );
};

export default ReservationLocataire;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  CorpsTop: {
    marginTop: 8,
  },
  CorpsView: {
    marginVertical: 3,
  },

  CorpsUnder: {
    fontSize: 18,
    lineHeight: 26,
    textDecorationLine: 'underline',
  },

  Corps: {
    fontSize: 18,
    lineHeight: 26,
  },

  Gras: {
    fontWeight: 'bold',
  },

  bedrooms: {
    fontSize: 15,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  price: {
    fontWeight: 'bold',
  },
  underPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  editBtn: {
    marginBottom: 5,
  },
});
