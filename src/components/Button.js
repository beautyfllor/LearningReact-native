import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import COLORS from '../const/Colors'

const Button = ({title, onPress=()=>{}})=>{

    return(

        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>

            <Text style={styles.title}>{title}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        height:55,
        width:"100%",
        backgroundColor:COLORS.blue,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
    },
    title:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:18
    }
});

export default Button;