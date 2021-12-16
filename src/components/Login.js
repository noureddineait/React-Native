import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getLandlords } from '../actions/LandlordsAction';
import { getLandlord } from '../actions/LandlordAction';
import { Card, ThemeContext, Button, Input, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { getTenants } from '../actions/TenantsAction';
import { getTenant } from '../actions/TenantAction';
const Login = (props) => {
    useEffect(() => {
        props.getLandlords();
        props.getTenants();
    }, []);
    const [state, _changeIcon] = useState({
        icon: "eye-slash",
        password: true
    });
    const [isChecked, setIsChecked] = useState(false);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleOnPress = () => {
        setIsChecked(!isChecked);
    };

    const handleOnChange = () => {
        _changeIcon({
            icon: state.icon === "eye" ? "eye-slash" : "eye",
            password: !state.password
        });
    };

    const connection = () => {
        if (isChecked) {
            if (userName && password) {
                const found = props.landlords.some(el => el.username === userName && el.password === password);
                if (found) {
                    props.landlords.map(el => {
                        if (el.username === userName && el.password === password) {
                            props.getLandlord(el.id);

                        }
                    });


                    props.navigation.replace("HomeLocateur")
                } else {
                    Alert.alert(
                        'Error',
                        `Nom d'utilisateur ou mot de passe incorrect`,

                    )
                }
            }
        } else {
            if (userName && password) {
                const found = props.tenants.some(el => el.username === userName && el.password === password);
                if (found) {
                    props.tenants.map(el => {
                        if (el.username === userName && el.password === password) {
                            props.getTenant(el.id);

                        }
                    });
                    props.navigation.replace("HomeLocataire")
                } else {
                    Alert.alert(
                        'Error',
                        `Nom d'utilisateur ou mot de passe incorrect`,

                    )
                }
            }
        }
    }


    return (
        <View style={styles.view}>
            <Text style={styles.titleText}>Nom d'utilisateur</Text>
            <Input leftIcon={{ type: 'font-awesome', name: 'user' }}
                password placeholder="Nom d'utilisateur"
                onChangeText={text => setUserName(text)}></Input>

            <Text style={styles.titleText}>Mot de passe</Text>

            <View style={styles.searchSection}>
                <Input secureTextEntry={state.password} leftIcon={{ type: 'font-awesome', name: 'unlock' }}
                    password placeholder="Mot de passe"
                    onChangeText={text => setPassword(text)}></Input>
                <Icon name={state.icon} size={25} onPress={() => handleOnChange()} />
            </View>
            <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, marginTop: 0, marginBottom: 25, }}
                title='Locateur ?'
                checked={isChecked}
                onPress={handleOnPress}
            />
            <View style={styles.btn}><Button
                onPress={() =>
                    connection()}
                title="Login"
            /></View>
            <View >
                <Text  >New to the APP</Text>
                <Button
                    onPress={() =>
                        props.navigation.replace('SignUp')
                    }
                    title="Create an account here !"
                    type="clear"
                />
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
    searchSection: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        height: 85,
        width: 150,
        margin: 10,
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
        tenants: state.tenants
    };
};
const mapDispatchToProps = {
    getLandlords: getLandlords,
    getLandlord: getLandlord,
    getTenants: getTenants,
    getTenant: getTenant
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);