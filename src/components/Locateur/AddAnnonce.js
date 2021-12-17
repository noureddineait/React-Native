// import * as React from 'react';
// import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
// import { Button } from 'react-native-elements';
// import { useForm, Controller } from 'react-hook-form';


// export default function AddAnnonce({ navigation })  {
    
//   const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
//     defaultValues: {
//       firstName: '',
//       lastName: ''
//     }
//   });
//   const onSubmit = data => {
//     console.log(data);
//   };

//   const onChange = arg => {
//     return {
//       value: arg.nativeEvent.text,
//     };
//   };

//   console.log('errors', errors);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>First name</Text>
//       <Controller
//         control={control}
//         render={({field: { onChange, onBlur, value }}) => (
//           <TextInput
//             style={styles.input}
//             onBlur={onBlur}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         name="firstName"
//         rules={{ required: true }}
//       />
//       <Text style={styles.label}>Last name</Text>
//       <Controller
//         control={control}
//         render={({field: { onChange, onBlur, value }}) => (
//           <TextInput
//             style={styles.input}
//             onBlur={onBlur}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         name="lastName"
//         rules={{ required: true }}
//       />

//       <View style={styles.button}>
//         <Button
//           style={styles.buttonInner}
//           color
//           title="Reset"
//           onPress={() => {
//             reset({
//               firstName: 'Soukayna',
//               lastName: 'Hassani'
//             })
//           }}
//         />
//       </View>

//       <View style={styles.button}>
//         <Button
//           style={styles.buttonInner}
//           color
//           title="Button"
//           onPress={handleSubmit(onSubmit)}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   label: {
//     color: 'white',
//     margin: 20,
//     marginLeft: 0,
//   },
//   button: {
//     marginTop: 40,
//     color: 'white',
//     height: 40,
//     backgroundColor: '#ec5990',
//     borderRadius: 4,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: 5,
//     padding: 8,
//     backgroundColor: '#0e101c',
//   },
//   input: {
//     backgroundColor: 'white',
//     borderColor: 'none',
//     height: 40,
//     padding: 10,
//     borderRadius: 4,
//   },
// });

import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card, ThemeContext, Button, Input, Overlay, CheckBox } from 'react-native-elements';
import { addRoom } from '../../actions/RoomsAction';
import { getRoomsPerLandlord } from '../../actions/RoomsPerLandlordAction';
import { connect } from 'react-redux';
import { addTenant } from '../actions/TenantsAction';
import { LogBox } from 'react-native';


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const AddAnnonce = (props) => {



    const [town, setTown] = useState('');
    const [landlordId, setLandlordId] = useState('');
    const [capacity, setCapacity] = useState('');
    const [price, setPrice] = useState('');

    const add = () => {

                    props.addRoom(town, props.landlord.id , capacity, price);
                    setTown('');
                    setLandlordId("");
                    setCapacity("");
                    setPrice("");
                    props.getRoomsPerLandlord(props.landlord.id);
                    props.route.params.updateData();
                    props.navigation.goBack();
 
    }
    return (
        <SafeAreaView style={styles.view}>

            <ScrollView style={styles.container}>

                <Input leftIcon={{ type: 'font-awesome', name: 'user', color: "#517fa4" }}
                    password placeholder="Ville"
                    onChangeText={text => setTown(text)}></Input>


                <Input leftIcon={{ type: 'font-awesome', name: 'envelope', color: "#517fa4" }}
                    password placeholder="Capacité"
                    onChangeText={text => setCapacity(text)}></Input>
                
                <Input leftIcon={{ type: 'font-awesome', name: 'envelope', color: "#517fa4" }}
                    password placeholder="Prix par nuit"
                    onChangeText={text => setPrice(text)}></Input>
                

                {/* <View style={{ marginRight: 50, marginLeft: 50 }}>
                    <Button onPress={() => {
                        add()
                    }
                    }

                        title="Publier l'annonce"
                    />
                </View> */}
            </ScrollView>
            <View >
              <Button 
                title="Ajouter une annonce" 
                type="outline" 
                onPress={() => {
                  add()
                  }
                }
                // onPress={addannonceHandler} 

              /> 
            </View>
        </SafeAreaView>
    );

};
const styles = StyleSheet.create({
    view: {

      flex: 1,
      backgroundColor: '#E8EAED',
        // margin: 12,
        // padding: 10,
        // flexDirection: 'column',

        // justifyContent: 'center', //Centered horizontally
        // alignItems: 'center', //Centered vertically
        // flex: 1
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
        rooms: state.rooms,
        landlord: state.landlord,
       
    };
};
const mapDispatchToProps = {
    addRoom: addRoom,
    getRoomsPerLandlord: getRoomsPerLandlord,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAnnonce);

