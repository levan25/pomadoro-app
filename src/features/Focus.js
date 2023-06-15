import React from "react"
import { useState } from "react";
import { View, Text, StyleSheet, TextInput as RNTextInput } from "react-native"
import { colors } from "../utils/colors"
import { TextInput  } from 'react-native-paper';
import { RoundedButton } from "../components/RoundedButton";
import { spacing   } from "../utils/sizes";

export const Focus = ({addSubject }) => {
  const [subject, setSubject] = useState(null);
console.log(subject)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} onChangeText={setSubject}label='What would you like to focus on' />
    <View style={styles.button}  >
     <RoundedButton title='+' size={50} onPress={() => addSubject (subject)}/>
     </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex :1 , 
  },
  inputContainer : {
  padding : spacing.lg ,
  justifyContent :'top',  
  flexDirection:'row',
},
  text:{
    color: colors.white
  },
  TextInput:{
    flex:0.8,
    marginRight:spacing.sm ,
  },
  button: {
   justifyContent:'center',
  }

})
