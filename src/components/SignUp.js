import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input, CheckBox, ButtonGroup} from 'react-native-elements';
import {addLandlord} from '../actions/LandlordsAction';
import {connect} from 'react-redux';
import {addTenant} from '../actions/TenantsAction';
const SignUp = props => {
  const [state, _changeIcon] = useState({
    icon: 'eye-slash',
    password: true,
  });
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    _changeIcon({
      icon: state.icon === 'eye' ? 'eye-slash' : 'eye',
      password: !state.password,
    });
  };
  const handleOnPress = () => {
    setIsChecked(!isChecked);
  };
  const [userName, setUserName] = useState('');
  const [mailAddress, setmailAdress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [birthDay, setbirthDay] = useState('');
  const [gender, setgender] = useState('');
  const [index, setindex] = useState(0);

  const add = () => {
    if (
      userName &&
      mailAddress &&
      password &&
      firstName &&
      lastName &&
      birthDay
    ) {
      if (isChecked) {
        const foundAdress = props.landlords.some(
          el => el.mail_address === mailAddress,
        );
        const foundUser = props.landlords.some(el => el.username === userName);

        if (!(foundUser || foundAdress)) {
          props.addLandlord(
            userName,
            mailAddress,
            password,
            firstName,
            lastName,
            birthDay,
            gender,
          );
          setUserName('');
          setmailAdress('');
          setPassword('');
          setfirstName('');
          setlastName('');
          setbirthDay('');
          setgender('');
          props.navigation.replace('Login');
        } else {
          Alert.alert('Error', 'Adresse mail ou utilisateur deja utilisé');
        }
      } else {
        const foundAdress = props.tenants.some(
          el => el.mail_address === mailAddress,
        );
        const foundUser = props.tenants.some(el => el.username === userName);

        if (!(foundUser || foundAdress)) {
          props.addTenant(
            userName,
            mailAddress,
            password,
            firstName,
            lastName,
            birthDay,
            gender,
          );
          setUserName('');
          setmailAdress('');
          setPassword('');
          setfirstName('');
          setlastName('');
          setbirthDay('');
          setgender('');
          props.navigation.goBack();
        } else {
          Alert.alert('Error', 'Adresse mail ou utilisateur deja utilisé');
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <Input
          leftIcon={{
            type: 'font-awesome',
            name: 'user-circle-o',
            color: '#517fa4',
          }}
          password
          placeholder="Nom d'utilisateur"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 6}}
          onChangeText={text => setUserName(text)}></Input>

        <Input
          leftIcon={{type: 'font-awesome', name: 'envelope', color: '#517fa4'}}
          password
          placeholder="Email"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 6}}
          onChangeText={text => setmailAdress(text)}></Input>

        <View style={styles.searchSection}>
          <Input
            secureTextEntry={state.password}
            leftIcon={{type: 'font-awesome', name: 'lock', color: '#517fa4'}}
            password
            placeholder="Mot de passe"
            leftIconContainerStyle={{marginRight: 15, marginLeft: 6}}
            onChangeText={text => setPassword(text)}></Input>
          <Icon
            name={state.icon}
            size={25}
            color="#517fa4"
            onPress={() => handleOnChange()}
          />
        </View>

        <Input
          leftIcon={{type: 'font-awesome', name: 'user', color: '#517fa4'}}
          password
          placeholder="First Name"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 6}}
          onChangeText={text => setfirstName(text)}></Input>

        <Input
          leftIcon={{type: 'font-awesome', name: 'user-plus', color: '#517fa4'}}
          password
          placeholder="Last Name"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 6}}
          onChangeText={text => setlastName(text)}></Input>

        <Input
          leftIcon={{
            type: 'font-awesome',
            name: 'calendar-o',
            color: '#517fa4',
          }}
          password
          placeholder="Birth Date (aaaa-mm-jj)"
          leftIconContainerStyle={{marginRight: 15, marginLeft: 6}}
          onChangeText={text => setbirthDay(text)}></Input>

        <ButtonGroup
          onPress={value => {
            setindex(value);
            if (index === 0) {
              setgender('M');
            } else {
              setgender('F');
            }
          }}
          selectedIndex={index}
          buttons={['Male', 'Female']}
        />
        <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            marginTop: 0,
            marginBottom: 25,
          }}
          title="Locataire ?"
          checked={isChecked}
          onPress={handleOnPress}
        />
      </ScrollView>
      <View>
        <View>
          <Button
            onPress={() => {
              add();
            }}
            title="Sign Up"
          />
        </View>
        <View style={[styles.searchSection]}>
          <Text>Already have an account ?</Text>
          <Button
            onPress={() => props.navigation.goBack()}
            title="Login"
            type="clear"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    margin: 12,
    padding: 10,
    flexDirection: 'column',

    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1,
  },
  bottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
const mapStateToProps = state => {
  return {
    landlords: state.landlords,
    tenants: state.tenants,
  };
};
const mapDispatchToProps = {
  addLandlord: addLandlord,
  addTenant: addTenant,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
