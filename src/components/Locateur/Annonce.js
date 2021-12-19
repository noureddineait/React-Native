import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {deleteRoom} from '../../actions/RoomsAction';
import {getRoomsPerLandlord} from '../../actions/RoomsPerLandlordAction';
import {connect} from 'react-redux';

const Annonce = props => {
  const editannonceHandler = () => {
    props.nav.navigate('EditAnnonce', {
      updateData: props.updateData,
      id: props.id,
    });
  };
  const deleteannonceHandler = () => {
    props.deleteRoom(props.id);
    props.updateData();
    props.getRoomsPerLandlord(props.landlord.id);
  };

  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://canaguide.ca/datas/google-photo/3c8af68f52a3f7712aa42b70aee737ee-Auberge-Centre-Ville-Rimouski-Rimouski-QC-Canada-CanaGuide.jpg',
        }}
      />
      <View style={styles.underPic}>
        <Text style={styles.bedrooms}>
          <Icon name="users" size={20} />
          {'  '}
          {props.capacity} Personnes
        </Text>
        <Text style={styles.bedrooms}>
          <Icon name="map-marker" size={20} />
          {'  '}
          {props.town}
        </Text>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        Chambre pour {props.capacity} personnes à louer à {props.town}.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.price}>${props.price} </Text>/ nuit
      </Text>
      <View style={styles.editBtn}>
        <Button
          title="Modifier cette annonce"
          type="outline"
          buttonStyle={{
            borderColor: '#FB8500',
            borderRadius: 6,
            borderWidth: 1,
          }}
          titleStyle={{
            color: '#FB8500',
          }}
          onPress={editannonceHandler}
        />
      </View>
      <View>
        <Button
          title="Supprimer cette annonce"
          type="outline"
          buttonStyle={{
            borderColor: '#D00000',
            borderRadius: 6,
            borderWidth: 1,
          }}
          titleStyle={{
            color: '#D00000',
          }}
          onPress={deleteannonceHandler}
        />
      </View>
    </Pressable>
  );
};

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
