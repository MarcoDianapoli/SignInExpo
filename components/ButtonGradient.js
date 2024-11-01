import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient(){
    return(
    <TouchableOpacity style={styles.container}>
        <LinearGradient
        colors={['#4c4c4c','#7d7d7d']}
        start={{x:1,y:0}}
        end={{x:1,y:1}}
        style={styles.button}
        >
        <Text style={styles.text}>Inicia Sesion</Text>    
        </LinearGradient>
    </TouchableOpacity>
    );
}
 const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        width:300,
        marginTop:40
       
    },
    button:{
      
        height: 50,
        width: '80%',
        marginTop:5,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center',
    },
    text: { 
     paddingLeft:20,
     paddingRight:20,
     paddingEnd:20,
     fontSize: 18,
     color: 'white',
     fontWeight: 'Bold'
    }
 });