import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";

import COLORS from "../const/Colors"
import bookAPI from "../service/bookAPI";
import bookCover150 from "../assets/books/lor150.png";

const Listing = () => {

    const [books, setBooks] = useState([]);

    useEffect(
        () => {
            bookAPI.get('/listBooks')
            .then(
                (data) => {
                    console.log(data.data[5]);
                    setBooks(data.data);
                }
            )
        },
        []
    );

    return(
        <ScrollView>

            <View style={styles.container}>

                {
                    books.map(
                        book=>(
                            <TouchableOpacity
                                key={book.book_cod}
                                style={styles.post}
                                onPress={()=>{}}>

                                <View>
                                    <Image style={styles.image} source={bookCover150}/>
                                    <Text style={styles.title}>{book.title}</Text>
                                </View>

                            </TouchableOpacity>
                            
                        )
                    )    
                }

            </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container:{
         alignItems:'center'
    },
    post:{
        width:'95%',
        alignItems:'center',
        backgroundColor:'#CCC',
        padding:15,
        marginVertical:5,
        borderRadius:5,
        elevation:5,
    },
    image:{
        borderRadius:5,
        marginVertical:16,
        marginLeft:16,

    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    }
});

export default Listing;
