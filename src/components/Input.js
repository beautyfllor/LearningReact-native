import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from '../const/Colors'

const Input = ({label, error, onFocus=()=>{}, ...props})=>{
    return(
        
        <View style={styles.formContainer}>

            <Text style={styles.inputLabel}>{label}</Text>

            <View style={[styles.inputContainer, {borderColor: error ? COLORS.red : COLORS.darkBlue}]}>

                <TextInput 
                    style={styles.textInput}
                    autoCorrect={false}
                    onFocus={()=>{onFocus()}}
                    {...props}
                />

            </View>

            <Text style={styles.errorText}>{error}</Text>

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
    },
    errorText:{
        color:COLORS.red
    }
});

export default Input;
