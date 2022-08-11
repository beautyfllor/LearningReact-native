import React from "react";
import { StyleSheet } from "react-native";

import Login from "./src/views/Login";
import Register from "./src/views/Register";

// O nome da função deve ser igual ao nome do  arquivo 
const App = () =>{

  const nome = 'SENAI JANDIRA';

  return(
    // A view é como se fosse a 'div'do html
    // <View style={style.container}>
    //   <Text style={style.title}>{nome}</Text>
    // </View>
    <Register/>
  );

}

const style = StyleSheet.create({
  container:{
    height:"100%",
    backgroundColor:"#000"
  },
  title:{
    width:"100%",
    backgroundColor:"#F00",
    textAlign:"center",
    fontSize:16,
    lineHeight:26,
    color:"#FFF",
    fontWeight:"bold",
    padding:16,
  }
});

// Torna a funçào pública
export default App;