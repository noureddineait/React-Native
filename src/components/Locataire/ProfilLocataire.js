
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
            
                    <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 20, }}>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 20, marginRight: 20, borderRadius: 40, overflow: 'hidden', }}>
                            <Avatar
                                source={{
                                    uri: 'https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png/revision/latest/scale-to-width-down/250?cb=20201128234057',
                                }}
                                size={100}
                            />
                        </View>
                        <View style={{ marginLeft: 20, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                                fontSize: 30,
                                
                            }]}>{props.tenant.username}</Text>
                            <Text style={styles.caption}>{props.tenant.mail_address}</Text>
                        </View>

                    </View>
                
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1,
                        marginTop: 7,
                    }]}>
                        <Text style={{fontSize: 18,}}>Balance</Text>
                        <View style={styles.row}>
                        <Text style={[styles.title, {
                                marginRight: 20,
                            }]}>{props.tenant.balance} $</Text>
                        
                        <Button title="+"
                        buttonStyle={{
                            marginTop:3,

                            borderRadius: 6,
                            borderWidth: 1,
                            height:30,
                            width:30,
                            padding:1

                            }}
                            onPress={balanceUpdateHandler}
                            ></Button>
                            </View>
                    </View>
                </View>
                <View style={styles.corps}>

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
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '500',
    },
    row: {
        flex: 1,
        flexDirection: "row",
        marginTop: 7,
        
    },
    infoBoxWrapper: {
        
        alignItems: 'center',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 90,
        marginTop:15,
        marginBottom:15,
      },
      infoBox: {

        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      corps: {
        marginHorizontal: 40,
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
