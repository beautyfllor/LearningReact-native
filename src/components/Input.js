import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "react-native/Libraries/NewAppScreen";

import COLORS from '../const/Colors'

const Input = ({label, iconName, error, onFocus=()=>{}, value, ...props})=>{
    return(
        
        <View style={styles.formContainer}>

            <Text style={styles.inputLabel}>{label}</Text>

            <View style={[styles.inputContainer, {borderColor: error ? COLORS.red : COLORS.darkBlue}]}>

                <Icon name={iconName} style={styles.icon}/>

                <TextInput 
                    style={styles.textInput}
                    autoCorrect={false}
                    onFocus={()=>{onFocus()}}
                    value={value}
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
    },
    icon:{
        fontSize:22,
        color:COLORS.darkBlue,
        marginRight:10
    }
});

export default Input;
