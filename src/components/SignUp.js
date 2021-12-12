import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, ThemeContext, Button, Input, Overlay, CheckBox } from 'react-native-elements';
import { addLandlord } from '../actions/LandlordsAction';
import { connect } from 'react-redux';
import { addTenant } from '../actions/TenantsAction';

const SignUp = (props) => {

    const [state, _changeIcon] = useState({
        icon: "eye-slash",
        password: true
    });
    const [isChecked, setIsChecked] = useState(false);


    const handleOnChange = () => {
        _changeIcon({
            icon: state.icon === "eye" ? "eye-slash" : "eye",
            password: !state.password
        });
    };
    const handleOnPress = () => {
        setIsChecked(!isChecked);
    };
    const [userName, setUserName] = useState('');
    const [mailAddress, setmailAdress] = useState('');
    const [password, setPassword] = useState('');

    const add = () => {
        if (userName && mailAddress && password) {
            if (isChecked) {
                const foundAdress = props.landlords.some(el => el.mail_address === mailAddress);
                const foundUser = props.landlords.some(el => el.username === userName);

                if (!(foundUser || foundAdress)) {
                    props.addLandlord(userName, mailAddress, password)
                    setUserName('');
                    setmailAdress("");
                    setPassword("");
                    props.navigation.replace("Login");
                }
                else {
                    Alert.alert(
                        'Error',
                        'Adresse mail ou utilisateur deja utilisé',

                    )
                }
            } else {
                const foundAdress = props.tenants.some(el => el.mail_address === mailAddress);
                const foundUser = props.tenants.some(el => el.username === userName);

                if (!(foundUser || foundAdress)) {
                    props.addTenant(userName, mailAddress, password)
                    setUserName('');
                    setmailAdress("");
                    setPassword("");
                    props.navigation.replace("Login");
                }
                else {
                    Alert.alert(
                        'Error',
                        'Adresse mail ou utilisateur deja utilisé',

                    )
                }
            }




        }
    }
    return (
        <SafeAreaView style={styles.view}>

            <ScrollView >

                <Input leftIcon={{ type: 'font-awesome', name: 'user', color: "#517fa4" }}
                    password placeholder="Nom d'utilisateur"
                    onChangeText={text => setUserName(text)}></Input>


                <Input leftIcon={{ type: 'font-awesome', name: 'envelope', color: "#517fa4" }}
                    password placeholder="Email"
                    onChangeText={text => setmailAdress(text)}></Input>


                <View style={styles.searchSection}>
                    <Input secureTextEntry={state.password} leftIcon={{ type: 'font-awesome', name: 'lock', color: "#517fa4" }}
                        password placeholder="Mot de passe"
                        onChangeText={text => setPassword(text)}></Input>
                    <Icon name={state.icon} size={25} color='#517fa4' onPress={() => handleOnChange()} />
                </View>

                <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, marginTop: 0, marginBottom: 25, }}
                    title='Locataire ?'
                    checked={isChecked}
                    onPress={handleOnPress}
                />
                <View style={{ marginRight: 50, marginLeft: 50 }}>
                    <Button onPress={() => {
                        add()
                    }
                    }

                        title="Sign Up"
                    />
                </View>
                <View style={{ margin: 15 }} >
                    <Text >Already have an account ?</Text>
                    <Button onPress={() =>
                        props.navigation.replace('Login')}

                        title="Login" type="clear"></Button>
                </View>
            </ScrollView>
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
        flex: 1
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
        fontWeight: "bold"
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

