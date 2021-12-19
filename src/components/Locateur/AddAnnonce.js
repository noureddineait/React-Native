import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input} from 'react-native-elements';
import {addRoom} from '../../actions/RoomsAction';
import {getRoomsPerLandlord} from '../../actions/RoomsPerLandlordAction';
import {connect} from 'react-redux';
import {LogBox} from 'react-native';
import {getTowns} from '../../actions/TownsAction';
import SelectDropdown from 'react-native-select-dropdown';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const AddAnnonce = props => {
  useEffect(() => {
    props.getTowns();
  }, []);

  const [town, setTown] = useState('');
  const [landlordId, setLandlordId] = useState('');
  const [capacity, setCapacity] = useState('');
  const [price, setPrice] = useState('');

  const villes = [];
  props.towns.map(town => {
    return villes.push(town.name);
  });

  const add = () => {
    props.addRoom(town, props.landlord.id, capacity, price);
    setTown('');
    setLandlordId('');
    setCapacity('');
    setPrice('');
    props.getRoomsPerLandlord(props.landlord.id);
    props.route.params.updateData();
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.container}>
        <View style={styles.dropDown}>
          <SelectDropdown
            data={villes}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setTown(villes[index]);
            }}
            defaultButtonText={'Choisir une ville'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <Icon
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#517fa4'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>

        <Input
          leftIcon={{type: 'font-awesome', name: 'users', color: '#517fa4'}}
          password
          placeholder="Capacité"
          leftIconContainerStyle={{marginRight: 9}}
          onChangeText={text => setCapacity(text)}></Input>

        <Input
          leftIcon={{type: 'font-awesome', name: 'dollar', color: '#517fa4'}}
          password
          placeholder="Prix par nuit"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 8}}
          onChangeText={text => setPrice(text)}></Input>
      </ScrollView>
      <View>
        <Button
          title="Ajouter une annonce"
          type="outline"
          onPress={() => {
            add();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#E8EAED',
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
    fontWeight: 'bold',
  },
  dropDown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  dropdown1BtnStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#E8EAED',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#a5aeb8',
  },
  dropdown1BtnTxtStyle: {color: '#8a97a1', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});
const mapStateToProps = state => {
  return {
    landlord: state.landlord,
    towns: state.towns,
  };
};
const mapDispatchToProps = {
  addRoom: addRoom,
  getRoomsPerLandlord: getRoomsPerLandlord,
  getTowns: getTowns,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAnnonce);
