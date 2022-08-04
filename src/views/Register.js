import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

import COLORS from "../const/Colors"

const Register = () =>{

    const nome = 'Register Screen';
  
    return(

      <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.scroll}>

          <Text style={styles.textTitle}>Book registragion</Text>

          <View style={styles.viewForm}>
          
            <Input label="Title"/>
            <Input label="Description"/>
            <Input label="Cover"/>

            
            <Button/>

        </View>
        </ScrollView>
      </SafeAreaView>
    );
  
  }

  const styles = StyleSheet.create({
    safe:{
      flex:1,
      backgroundColor:COLORS.gray,
    },
    scroll:{
      paddingTop:50,
      paddingHorizontal:20,
    },
    textTitle:{
      color:COLORS.black,
      fontSize:25,
      fontWeight:"bold",
    },
    viewForm:{
      marginVertical:20,
    }
  })

export default Register;
