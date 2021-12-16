
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, ThemeContext, Button, Input, Overlay, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';


const ProfilLocateur = props => {
    return (
        <>
            
            <SafeAreaView style={styles.container}>

                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar
                            source={{
                                uri: 'https://www.w3schools.com/howto/img_avatar.png',
                            }}
                            size={80}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>{props.landlord.username}</Text>
                            <Text style={styles.caption}>{props.landlord.mail_address}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                        <Text style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>{props.landlord.benefits}</Text>
                        <Text>Benefits</Text>
                    </View>
                </View>
                <View >
                            <Card><Text style={[styles.title, {
                                
                                
                                marginLeft: 10,
                            }]} key="first_name">First Name : {props.landlord.first_name}</Text></Card>
                
                <Card><Text style={[styles.title, {
                                marginLeft: 10,
                            }]} key="last_name">Last Name : {props.landlord.last_name}</Text></Card>
                <Card><Text style={[styles.title, {
                                marginLeft: 10,
                            }]} key="birth_date">Birth Date : {props.landlord.birth_date}</Text></Card>
                <Card><Text style={[styles.title, {
                                marginLeft: 10,
                            }]} key="gender">Gender : {props.landlord.gender==="M" ? "Male" : "Female"}</Text></Card>

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
        height: 100,
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
        landlord: state.landlord,
    };
};

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilLocateur);
