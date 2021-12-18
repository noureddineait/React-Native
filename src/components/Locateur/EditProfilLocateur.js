import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, ThemeContext, Button, Input, Overlay, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { updateLandlord } from '../../actions/LandlordAction';
const EditProfilLocateur = props => {
    const [first_name, setfirst_name] = useState(props.landlord.first_name);
    const [last_name, setlast_name] = useState(props.landlord.last_name);
    const [mail_address, setmail_address] = useState(props.landlord.mail_address);
    const [birth_date, setbirth_date] = useState(props.landlord.birth_date);
    const [gender, setgender] = useState(props.landlord.gender);
    const [username, setusername] = useState(props.landlord.username);
    const [password, setpassword] = useState(props.landlord.password);
    let _index;
    if(props.landlord.gender==="M"){
        _index=0;
    }else(_index=1)
    const [index, setindex] = useState(_index);

    const editProfilHandler = () => {
        
        if (username && mail_address && password && first_name && last_name && birth_date && gender) {
            const foundAdress = props.landlords.some(el => el.mail_address === mail_address && el.id != props.landlord.id);
            const foundUser = props.landlords.some(el => el.username === username && el.id != props.landlord.id);

            if (!(foundUser || foundAdress)) {
                
                props.updateLandlord(props.landlord.id, first_name, last_name, mail_address, birth_date, gender, username, password, props.landlord.benefits);
                props.navigation.goBack();
            } else {
                Alert.alert(
                    'Error',
                    'Adresse mail ou utilisateur deja utilisé',
                )
            }
        }else{props.navigation.goBack(); }


    }

    return (
        <SafeAreaView style={styles.view}>

            <ScrollView style={styles.container}>

                <Input leftIcon={{ type: 'font-awesome', name: 'user', color: "#517fa4" }}
                    placeholder={props.landlord.first_name}
                    leftIconContainerStyle={{ marginRight: 15, marginLeft: 6, }}
                    onChangeText={text => setfirst_name(text)}></Input>
                <Input leftIcon={{ type: 'font-awesome', name: 'user-plus', color: "#517fa4" }}
                    placeholder={props.landlord.last_name}
                    leftIconContainerStyle={{ marginRight: 15, marginLeft: 6, }}
                    onChangeText={text => setlast_name(text)}></Input>
                <Input leftIcon={{ type: 'font-awesome', name: 'envelope', color: "#517fa4" }}
                    placeholder={props.landlord.mail_address}
                    leftIconContainerStyle={{ marginRight: 15, marginLeft: 6, }}
                    onChangeText={text => setmail_address(text)}></Input>
                <Input leftIcon={{ type: 'font-awesome', name: 'calendar-o', color: "#517fa4" }}
                    placeholder={props.landlord.birth_date}
                    leftIconContainerStyle={{ marginRight: 15, marginLeft: 6, }}
                    onChangeText={text => setbirth_date(text)}></Input>
                <ButtonGroup
                    onPress={(value)=>{setindex(value);
                    if(value===1){
                        setgender("F")
                    }else{setgender("M")}}}
                    selectedIndex={index}
                    buttons={["Male","Female"]}
                    containerStyle={{ marginBottom: 20 }}
                     />
                <Input leftIcon={{ type: 'font-awesome', name: 'user-circle-o', color: "#517fa4" }}
                    placeholder={props.landlord.username}
                    leftIconContainerStyle={{ marginRight: 15, marginLeft: 6, }}
                    onChangeText={text => setusername(text)}></Input>
                <Input leftIcon={{ type: 'font-awesome', name: 'lock', color: "#517fa4" }}
                    placeholder={props.landlord.password}
                    leftIconContainerStyle={{ marginRight: 15, marginLeft: 6, }}
                    onChangeText={text => setpassword(text)}></Input>
            </ScrollView>
            <View >
                <Button
                    title="Enregistrer la modification"
                    type="outline"
                    
                    onPress={editProfilHandler}
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
        fontWeight: "bold"
    },
});

const mapStateToProps = state => {
    return {
        landlord: state.landlord,
        landlords: state.landlords,
    };
};
const mapDispatchToProps = {
    updateLandlord: updateLandlord,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfilLocateur);
