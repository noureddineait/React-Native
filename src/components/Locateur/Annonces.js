import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Annonce from './Annonce';
import AnnoncesStyles from "./AnnoncesStyles"

export default function Annonces({ navigation }) {

    const [annonce, setAnnonce] = useState();
    const [annonceItems, setAnnonceItems] = useState([]);

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

    const addannonceHandler = () => {
        navigation.navigate("AddAnnonce");
      }

    return (
      <View style={AnnoncesStyles.container}>
      
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      
      
      <View style={AnnoncesStyles.tasksWrapper}>
        
        <View style={AnnoncesStyles.items}>
        {
          
            
        annonceItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeAnnonce(index)}>
                  <Annonce text={item} /> 
                </TouchableOpacity>
              )
            })
                  
                   
        }  
              
          
        </View>
      </View>
        
      </ScrollView>

    <View style={AnnoncesStyles.writeTaskWrapper} >
      <Button title="Ajouter une annonce" type="outline" onPress={addannonceHandler, handleAddAnnonce} />
    </View>

    {/* <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={AnnoncesStyles.writeTaskWrapper}
      >
        <TouchableOpacity onPress={() => addannonceHandler()}>
          <View style={AnnoncesStyles.addWrapper}>
            <Text style={AnnoncesStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> */}
      
    </View>
        
    )
}

