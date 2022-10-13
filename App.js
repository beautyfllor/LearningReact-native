import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Register from "./src/views/Register";
import Listing from "./src/views/Listing";
import Details from "./src/views/Details";

// O nome da função deve ser igual ao nome do  arquivo 
const App = () =>{

  const nome = 'SENAI JANDIRA';

  return(

    <Details/>
    
  //   <NavigationContainer>

  //     <Stack.Navigator screenOptions={false}>

  //       <Stack.Screen
  //         name="Register"
  //         component={Register}
  //         options={{title: 'Book Registration'}}
  //       />

  //       <Stack.Screen
  //         name="Listing"
  //         component={Listing}
  //         options={{title: 'Book Listing'}}
  //       />


  //     </Stack.Navigator>

  //   </NavigationContainer>
  );

}

export default App;