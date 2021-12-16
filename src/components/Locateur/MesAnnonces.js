import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Annonce from './Annonce';
import Icon from 'react-native-vector-icons/AntDesign';
import { Header, Input, Button, Overlay } from 'react-native-elements';


const MesAnnonces = ({ navigation }) => {
// export default function MesAnnonces() {
  const [annonce, setAnnonce] = useState();
  const [annonceItems, setAnnonceItems] = useState([]);
  const [visible, setVisible] = useState(false);

  navigation.setOptions({
    headerRight: () => (
      <Icon name="logout" size={20} color="#fff" onPress={() => navigation.replace('Login')} />
    ),
  });

  const addannonceHandler = () => {
    navigation.navigate("AddAnnonce");
  }

  const clickHandler = () => {
    navigation.navigate("Screen1");
  }
  const handleAddAnnonce = () => {
    Keyboard.dismiss();
    setAnnonceItems([...annonceItems, annonce])
    setAnnonce(null);
    // setVisible(false);
  }

  const completeAnnonce = (index) => {
    let itemsCopy = [...annonceItems];
    itemsCopy.splice(index, 1);
    setAnnonceItems(itemsCopy)
    
  }
  
  
    const toggleOverlay = () => {
      setVisible(!visible);
    };

  return (


    <View style={styles.container}>
      {/* <Header 
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Mes annonces:', style: { color: '#fff', fontSize: 20,
        fontWeight: 'bold' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        {/* <Text style={styles.sectionTitle}>Mes annonces:</Text> */}
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            annonceItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={completeAnnonce}>
                  <Annonce text={item} nav={navigation} completeAnnonce={completeAnnonce} i={index}/> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}

      {/* <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={annonce} onChangeText={text => setAnnonce(text)} />
        <TouchableOpacity onPress={() => handleAddAnnonce()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> */}
      <View >
      <Button 
        title="Ajouter une annonce" 
        type="outline" 
        
        onPress={addannonceHandler, handleAddAnnonce} 

 /> 
     </View>
      
    </View>
  );
}

export default MesAnnonces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  addBtn: {
    borderColor: "#C0C0C0",
  },
});