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

    //Fill error state
    const [errors, setErrors] = React.useState({});

    //Handler function that configure the error messages on the state
    const handlerErrors = (errorMessage, input)=>{

      setErrors((prevState) => ({...prevState, [input]:errorMessage}));
    }

    //Validation function
    const validate = ()=>{

      let validate = true;

      if(!inputs.title) {
        validate = false;
        handlerErrors('Give the title of the book', 'title');
        // console.log('Title no content')
      }

      if(!inputs.description) {
        validate = false;
        handlerErrors('Give the description of the book', 'description');
        // console.log('Description no content')
      }

      if(!inputs.cover) {
        validate = false;
        handlerErrors('Give the cover of the book', 'cover');
        // console.log('Cover no content')
      }

      console.log(errors);

    }

    // const nome = 'Register Screen';
  
    return(

      <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.scroll}>

          <Text style={styles.textTitle}>Book registragion</Text>

          <View style={styles.viewForm}>
          
            <Input 
                  label="Title"
                  iconName="book-outline"
                  error={errors.title} 
                  onFocus={() => {handlerErrors(null, 'title')}} 
                  onChangeText={(text)=>handlerOnChange(text, 'title')}/>
            <Input 
                  label="Description"
                  iconName="card-text-outline"
                  error={errors.description}
                  onFocus={() => {handlerErrors(null, 'description')}}  
                  onChangeText={(text)=>handlerOnChange(text, 'description')}/>
            <Input 
                  label="Cover"
                  iconName="image-outline"
                  error={errors.cover}
                  onFocus={() => {handlerErrors(null, 'cover')}} 
                  onChangeText={(text)=>handlerOnChange(text, 'cover')}/>

            
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
