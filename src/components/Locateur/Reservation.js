import React, {useEffect} from 'react';
import {View, Text, Image, Pressable } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteRoom } from '../../actions/RoomsAction';
import { getRoomsPerLandlord } from '../../actions/RoomsPerLandlordAction';
import { connect } from 'react-redux';
import { getRoom } from '../../actions/RoomAction.js';
import { StyleSheet } from 'react-native';




const days = 7;

const Reservation = (props) => {

//    useEffect(() => {
//     props.getRoom(props.roomID);

//     }, []);

//   const editannonceHandler = () => {
//     props.nav.navigate("EditAnnonce", {updateData: props.updateData, id: props.id, });
//   }
//   const deleteannonceHandler = () => {
//     props.deleteRoom(props.id);
//     props.updateData();
//     props.getRoomsPerLandlord(props.landlord.id);
//   }

  

  return (
    <Pressable  style={styles.container}>

      {/* Bed & Bedroom  */}
      <View style={styles.underPic }>
        <Text style={styles.bedrooms}>
          <Icon name="users" size={20}  />
          {"  "}
          {props.nbrPersons} Personnes
        </Text>
        <Text style={styles.bedrooms}>
          <Icon name="map-marker" size={20}  />
          {"  "}
          {props.town}
        </Text>
      </View>

      <Divider orientation="horizontal" />

    <View style={styles.CorpsTop}> 
      <Text style={styles.Corps}>
            <Text style={styles.Gras}>
                Réservée par: {" "}
            </Text>
            {props.tenantUsername} 
      </Text>
    <View style={styles.CorpsView}>
      <Text style={styles.Corps}>
            <Text style={styles.Gras}>
                De: {" "}
            </Text>
            {props.inDate} {"  "}
            <Text style={styles.Gras}>
                À: {" "}
            </Text>
            {props.outDate}
      </Text>
    </View>

      <Text style={styles.CorpsUnder}>
            <Text style={styles.Gras}>
                Prix total: {" "}
            </Text>
            {props.prixTotal} {"$"}
      </Text>
      </View>

      {/*  Total price */}
      {/* <Text style={styles.totalPrice}>${35 * days} total</Text> */}
      {/* <View  style={styles.editBtn}>
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
     </View> */}
    </Pressable>
  );
};


const mapStateToProps = state => {
  return {

      room: state.room,
     
  };
};
const mapDispatchToProps = {
  
  getRoom: getRoom,

};
export default connect(mapStateToProps, mapDispatchToProps)(Reservation);



const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  CorpsTop:{
    marginTop: 8,
  },
  CorpsView: {
    marginVertical: 3,
  },
  
  CorpsUnder: {
    fontSize: 18,
    lineHeight: 26,
    textDecorationLine: 'underline',
  },

  Corps: {
    fontSize: 18,
    lineHeight: 26,
  },

  Gras: {
    fontWeight: 'bold',
  },

  bedrooms: {
    fontSize: 15,
    // marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  underPic: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginBottom: 8,
    
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  editBtn: {
    marginBottom: 5,
  },
});


