import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from '../const/Colors'

const Input = ({label, ...props})=>{
    return(
        
        <View style={styles.formContainer}>

            <Text style={styles.inputLabel}>{label}</Text>

            <View style={styles.inputContainer}>


                <TextInput 
                    style={styles.textInput}
                    autoCorrect={false}
                    {...props}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    formContainer:{
        marginBottom:20,
    },
    inputLabel:{
        marginVertical:5,
        fontSize:15,
        color:COLORS.black,
    },
    inputContainer:{
        height:55,
        backgroundColor:COLORS.light,
        flexDirection:"row",
        paddingHorizontal:15,
        borderWidth:1.5,
        alignItems:"center",
    },
    textInput:{
        color:COLORS.black,
        flex:1,
    }
});

export default Input;
