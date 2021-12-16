
import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, ThemeContext, Button, Input, Overlay, Item } from 'react-native-elements';

const Test = (props)=>{
    return (
        <View style={{ margin: 15 }} >

        <Button onPress={() =>
          props.navigation.replace('Login')}

          title="Log Out" ></Button>
      </View>
    );
}
export default Test