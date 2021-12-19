import {View, Text, ScrollView, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {addReservation} from '../../actions/ReservationAction';
import styles from '../Locateur/styles.js';

const AddReservation = props => {
  const [in_date, setIn_date] = useState();
  const [out_date, setOut_date] = useState();
  const [capacity, setCapacity] = useState();
  const add = price => {
    props.addReservation(
      props.route.params.id,
      props.tenant.id,
      props.route.params.landlord,
      capacity,
      in_date,
      out_date,
      price,
    );
    setIn_date('');
    setOut_date('');
    props.navigation.goBack();
  };

  const daysCount = () => {
    if (in_date && out_date && capacity) {
      var date1 = new Date(in_date);
      var date2 = new Date(out_date);

      // To calculate the time difference of two dates
      var Difference_In_Time = date2.getTime() - date1.getTime();

      // To calculate the no. of days between two dates
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      if (Difference_In_Days < 0) {
        Alert.alert(
          'Error',
          'La date de fin doit etre superieur à la date de départ',
        );
      } else if (Difference_In_Days > 0) {
        Alert.alert(
          'Confirmation',
          'Total price : ' +
            (props.route.params.price * Difference_In_Days).toString() +
            ' $',
          [
            {
              text: 'Yes',
              onPress: () => {
                add(props.route.params.price * Difference_In_Days);
              },
            },
            {text: 'Return'},
          ],
        );
      }
    } else {
      Alert.alert('Error', 'Veuillez remplir tous les champs');
    }
  };
  return (
    <View>
      <SafeAreaView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <ScrollView style={styles.container}>
          <Text for="start">Date de début :</Text>
          <Input
            leftIcon={{
              type: 'font-awesome',
              name: 'calendar',
              color: '#517fa4',
            }}
            type="date"
            id="start"
            name="trip-start"
            min="2020-01-01"
            max="2025-12-31"
            placeholder="AAAA-MM-JJ"
            onChangeText={date => {
              setIn_date(date);
            }}
          />
          <Text for="start">Date de Fin :</Text>
          <Input
            leftIcon={{
              type: 'font-awesome',
              name: 'calendar',
              color: '#517fa4',
            }}
            type="date"
            id="start"
            name="trip-start"
            placeholder="AAAA-MM-JJ"
            min="2020-01-01"
            max="2025-12-31"
            onChangeText={date => {
              setOut_date(date);
            }}
          />

          <Input
            leftIcon={{type: 'font-awesome', name: 'users', color: '#517fa4'}}
            password
            placeholder="Nombre de Personnes"
            leftIconContainerStyle={{marginRight: 9}}
            onChangeText={text => {
              setCapacity(text);
            }}
          />
        </ScrollView>
        <View style={{marginTop: 10}}>
          <Button
            title="Confirmer"
            type="outline"
            buttonStyle={{
              borderWidth: 1,
            }}
            onPress={daysCount}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    tenant: state.tenant,
  };
};
const mapDispatchToProps = {
  addReservation: addReservation,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddReservation);
