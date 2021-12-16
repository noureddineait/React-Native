import React, {Row} from 'react';
import {View, Text, Image, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';


const days = 7;

const Annonce = (props) => {

  // const post = props.post;

  const editannonceHandler = () => {
    props.nav.navigate("AddAnnonce");
  }
  const deleteannonceHandler = () => {
    props.completeAnnonce(props.i);
  }

  

  return (
    <Pressable  style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: "https://canaguide.ca/datas/google-photo/3c8af68f52a3f7712aa42b70aee737ee-Auberge-Centre-Ville-Rimouski-Rimouski-QC-Canada-CanaGuide.jpg"}}
      />

      {/* Bed & Bedroom  */}
      <View style={ {flexDirection: "row", justifyContent: "space-between"} }>
      <Text style={styles.bedrooms}>
        {props.capacity}
      </Text>
      <Text style={styles.bedrooms}>
        {props.town}
      </Text>
      </View>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        Chambre de: {props.landlordName}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        {/* <Text style={styles.oldPrice}>${34}</Text> */}
        <Text style={styles.price}>  ${props.price} </Text>
        / night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${35 * days} total</Text>
      <View  style={styles.editBtn}>
      <Button 
        title="Modifier cette annonce" 
        type="outline" 
        buttonStyle={{
         borderColor: "#FB8500",
         borderRadius: 6,
         borderWidth: 1,
         }}  
        titleStyle= {{
            color: "#FB8500"
        }}
        onPress={editannonceHandler}
        
       />
       </View>
       <View>
       <Button 
        title="Supprimer cette annonce" 
        type="outline" 
        buttonStyle={{
         borderColor: "#D00000",
         borderRadius: 6,
         borderWidth: 1,
         }}  
        titleStyle= {{
            color: "#D00000"
        }}
        // onPress={deleteannonceHandler}
       
       />
     </View>
    </Pressable>
  );
};

//   return (
//     <View style={styles.item}>
//       <View style={styles.itemLeft}>
//         <View style={styles.square}></View>
//         <Text style={styles.itemText}>{props.text}</Text>
//       </View>
//       <View style={styles.circular}></View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap'
//   },
//   square: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#55BCF6',
//     opacity: 0.4,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   itemText: {
//     maxWidth: '80%',
//   },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });

export default Annonce;