import React, {Row} from 'react';
import {View, Text, Image, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteRoom } from '../../actions/RoomsAction';
import { getRoomsPerLandlord } from '../../actions/RoomsPerLandlordAction';
import { connect } from 'react-redux';




const days = 7;

const Annonce = (props) => {

  // const post = props.post;

  const editannonceHandler = () => {
    props.nav.navigate("EditAnnonce", {updateData: props.updateData, id: props.id, });
  }
  const deleteannonceHandler = () => {
    props.deleteRoom(props.id);
    props.updateData();
    props.getRoomsPerLandlord(props.landlord.id);
  }

  

  return (
    <Pressable  style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: "https://canaguide.ca/datas/google-photo/3c8af68f52a3f7712aa42b70aee737ee-Auberge-Centre-Ville-Rimouski-Rimouski-QC-Canada-CanaGuide.jpg"}}
      />

      {/* Bed & Bedroom  */}
      <View style={styles.underPic }>
        <Text style={styles.bedrooms}>
          <Icon name="users" size={20}  />{"  "}{props.capacity} Personnes
        </Text>
        <Text style={styles.bedrooms}>
          <Icon name="map-marker" size={20}  />
          {"  "}
          {props.town}
        </Text>
      </View>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        Chambre pour {props.capacity} personnes à louer à {props.town}.
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        {/* <Text style={styles.oldPrice}>${34}</Text> */}
        <Text style={styles.price}>${props.price} </Text>
        / nuit
      </Text>

      {/*  Total price */}
      {/* <Text style={styles.totalPrice}>${35 * days} total</Text> */}
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
        onPress={deleteannonceHandler}
       
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

const mapStateToProps = state => {
  return {
      rooms: state.rooms,
      landlord: state.landlord,
     
  };
};
const mapDispatchToProps = {
  deleteRoom: deleteRoom,
  getRoomsPerLandlord: getRoomsPerLandlord,
};
export default connect(mapStateToProps, mapDispatchToProps)(Annonce);
// export default Annonce;