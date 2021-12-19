import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-elements';
import {connect} from 'react-redux';

const ProfilLocateur = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar
            source={{
              uri: 'https://www.w3schools.com/howto/img_avatar.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              {props.tenant.username}
            </Text>
            <Text style={styles.caption}>{props.tenant.mail_address}</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                marginTop: 15,
                marginBottom: 5,
              },
            ]}>
            {props.tenant.balance}
          </Text>
          <Text>Balance</Text>
        </View>
      </View>
      <View>
        <Text
          style={[
            styles.title,
            {
              marginTop: 15,
              marginBottom: 5,
              marginLeft: 10,
            },
          ]}
          key="first_name">
          First Name : {props.tenant.first_name}
        </Text>
        <Text
          style={[
            styles.title,
            {
              marginTop: 15,
              marginBottom: 5,
              marginLeft: 10,
            },
          ]}
          key="last_name">
          Last Name : {props.tenant.last_name}
        </Text>
        <Text
          style={[
            styles.title,
            {
              marginTop: 15,
              marginBottom: 5,
              marginLeft: 10,
            },
          ]}
          key="birth_date">
          Birth Date : {props.tenant.birth_date}
        </Text>
        <Text
          style={[
            styles.title,
            {
              marginTop: 15,
              marginBottom: 5,
              marginLeft: 10,
            },
          ]}
          key="gender">
          Gender : {props.tenant.gender === 'M' ? 'Male' : 'Female'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 12,
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
    marginTop: 15,
    marginBottom: 15,
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    tenant: state.tenant,
  };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilLocateur);
