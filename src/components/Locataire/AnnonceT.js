import React, {Row} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../Locateur/styles.js';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getRooms} from '../../actions/RoomsPerLandlordAction';
import {connect} from 'react-redux';

const AnnonceT = props => {
    const AddreservationHandler = () =>{
        props.nav.navigate ("AddReservation", {id: props.id, capacity:props.capacity, price:props.price})
    }

  return (
      <View>
    <Image
  style={styles.image}
  source={{
    uri: 'https://canaguide.ca/datas/google-photo/3c8af68f52a3f7712aa42b70aee737ee-Auberge-Centre-Ville-Rimouski-Rimouski-QC-Canada-CanaGuide.jpg',
  }}
/>
<View style={styles.underPic}>
  <Text style={styles.bedrooms}>
    <Icon name="users" size={20} />{'  '}{props.capacity} Personnes
  </Text>
  <Text style={styles.bedrooms}>
    <Icon name="map-marker" size={20} />
    {'  '}
    {props.town}
  </Text>
</View>
<Text style={styles.description} numberOfLines={2}>
  Logement pour {props.capacity} personnes à louer à {props.town}.
</Text>
<Text style={styles.prices}>
  {/* <Text style={styles.oldPrice}>${34}</Text> */}
  <Text style={styles.price}>${props.price} </Text>
  / nuit
</Text>

<View style={styles.editBtn}>
  <Button
    title="Reserver"
    type="outline"
    buttonStyle={{
      borderColor: '#cc3300',
      borderRadius: 6,
      borderWidth: 1,
      backgroundColor:'#e63900',
    }}
    titleStyle={{
      color: '#fff',
    }}
    onPress = {AddreservationHandler}
    

  />
</View>


</View>


  );
};
const mapStateToProps = state => {
  return {
    rooms: state.rooms,
  };
};
const mapDispatchToProps = {};
export default connect (mapStateToProps, mapDispatchToProps) (AnnonceT);
