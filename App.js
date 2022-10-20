import React from "react";
import { View, Text, Button} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

import Register from "./src/views/Register";
import Listing from "./src/views/Listing";
import Details from "./src/views/Details";
import Edit from "./src/views/Edit"

const Stack = createNativeStackNavigator();

// O nome da função deve ser igual ao nome do  arquivo 
const App = () =>{

  const nome = 'SENAI JANDIRA';

  return(

    // <NavigationContainer>

    //   <Stack.Navigator>

    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />

    //   </Stack.Navigator>

    // </NavigationContainer>
    
    <NavigationContainer>

      <Stack.Navigator>

        {/* <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register Book'}}
        /> */}

        <Stack.Screen
          name="Listing"
          component={Listing}
          options={{title: 'Book Listing'}}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Book Details'}}
        />

        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{title: 'Edit Book'}}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );

}

export default App;