
import { View, Text, StyleSheet, SafeAreaView,ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, ThemeContext, Button, Input, Overlay, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { updateTenant } from '../../actions/TenantAction';

const ProfilLocataire = props => {
    const updateInfoHandler =()=>{
        props.navigation.navigate("EditProfileLocataire");
    }
    const balanceUpdateHandler = ()=>{
        props.updateTenant(props.tenant.id, props.tenant.first_name, props.tenant.last_name, props.tenant.mail_address, props.tenant.birth_date, props.tenant.gender, props.tenant.username, props.tenant.password, props.tenant.balance+10);
    }
    return (
        <>

            <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 20, marginRight: 20, borderRadius: 40, overflow: 'hidden', }}>
                            <Avatar
                                source={{
                                    uri: 'https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png/revision/latest/scale-to-width-down/250?cb=20201128234057',
                                }}
                                size={80}
                            />
                        </View>
                        <View style={{ marginLeft: 20, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>{props.tenant.username}</Text>
                            <Text style={styles.caption}>{props.tenant.mail_address}</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                        <Text style={[styles.title, {
                                marginBottom: 5,
                            }]}>{props.tenant.balance} $</Text>
                        <Text>Balance</Text>
                        <Button title="+"
                        buttonStyle={{
                            marginTop:10,

                            borderRadius: 6,
                            borderWidth: 1,
                            height:40,
                            width:30,
                            padding:1

                            }}
                            onPress={balanceUpdateHandler}
                            ></Button>
                    </View>
                </View>
                <View >

                <Text style={[styles.title, {
                                marginTop: 15,
                                marginLeft: 15,
                            }]} key="first_name">First Name : {props.tenant.first_name}</Text>
                <Text style={[styles.title, {
                                marginTop: 15,
                                marginLeft: 15,
                            }]} key="last_name">Last Name : {props.tenant.last_name}</Text>
                <Text style={[styles.title, {
                                marginTop: 15,
                                marginLeft: 15,
                            }]} key="birth_date">Birth Date : {props.tenant.birth_date}</Text>
                <Text style={[styles.title, {
                                marginTop: 15,
                                marginLeft: 15,
                            }]} key="gender">Gender : {props.tenant.gender==="M" ? "Male" : "Female"}</Text>

            </View>
            </ScrollView>
            <View>
                    <Button
                        title="Modifier Informations"
                        type="outline"
                        buttonStyle={{
                            borderColor: "#FB8500",
                            borderRadius: 6,
                            borderWidth: 1,
                            }}  
                           titleStyle= {{
                               color: "#FB8500"
                           }}
                        
                        onPress={updateInfoHandler}

                    />
                </View>
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 12,
        padding: 10,

        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        flex: 1
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 150,
        marginTop:15,
        marginBottom:15,
      },
      infoBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

const mapStateToProps = state => {
    return {
        tenant: state.tenant,
    };
};

const mapDispatchToProps = {
    updateTenant:updateTenant
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilLocataire);
