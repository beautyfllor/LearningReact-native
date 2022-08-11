import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

import COLORS from "../const/Colors"

const Register = () =>{

    /*** Screenshot with state ***/
    //Creation of state struction that stores the typed data

    const [inputs, setInputs] = React.useState({
      title: '',
      description: '',
      cover: '',
    });

    //Function that handles an input of state data in the onChangeText method
    const handlerOnChange = (text, input) => {
      setInputs((prevState)=>(

        console.log(prevState),
        // console.log(input + ' ' + text)

        /*** State date injection ***/
        {...prevState, [input]:text}

      ));
    }

    /*** Validation of registration data ***/
    //Validation function
    const validate = ()=>{

      let validate = true;

      if(!inputs.title) {
        validate = false;
        console.log('Title no content')
      }

      if(!inputs.description) {
        validate = false;
        console.log('Description no content')
      }

      if(!inputs.cover) {
        validate = false;
        console.log('Cover no content')
      }

    }

    // const nome = 'Register Screen';
  
    return(

      <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.scroll}>

          <Text style={styles.textTitle}>Book registragion</Text>

          <View style={styles.viewForm}>
          
            <Input label="Title" onChangeText={(text)=>handlerOnChange(text, 'title')}/>
            <Input label="Description" onChangeText={(text)=>handlerOnChange(text, 'description')}/>
            <Input label="Cover" onChangeText={(text)=>handlerOnChange(text, 'cover')}/>

            
            <Button title='Register' onPress={validate}/>

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
