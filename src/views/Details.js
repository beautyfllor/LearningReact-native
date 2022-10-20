import React, {useEffect, useState} from "react";

import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import bookAPI from "../service/bookAPI";
import bookCover150 from "../assets/books/lor150.png";
import COLORS from "../const/Colors";

const Details = ({route, navigation})=>{

    const {book_cod} = route.params;

    const[book, setBook] = useState({
        book_cod:'',
        title:'',
        description:'',
        image:'',
    });

    useEffect(
        ()=>{
            bookAPI.get(`/listBooks/${book_cod}`)
            .then(
                (book)=>{
                    setBook(book.data);
                }
            )
        }
    );


        const del = (cod) => {
            try {
                bookAPI.delete(`/deleteBooks/${cod}`)
                navigation.goBack();
            }catch(error){}
        }

        return(

            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.post}>

                        <Image style={styles.image} source={bookCover150}/>
                        <Text style={styles.title}>{book.title}</Text>
                        <Text style={styles.description}>{book.description}</Text>

                    </View>

                    <View style={styles.buttons}>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{navigation.navigate('Edit', {book_cod:book.book_cod})}}
                        >
                            <Text style={[styles.buttonText, {backgroundColor: COLORS.blue}]}>Edit</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>del(book.book_cod)}
                        >
                            <Text style={[styles.buttonText, {backgroundColor: COLORS.red}]}>Delete</Text>
                            
                        </TouchableOpacity>

                    </View>

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
    },
    description:{
        width:'100%',
        fontSize:16,
        textAlign:'justify'
    },
    buttons:{
        flex:1,
        flexDirection:'row',
        padding:10,
        justifyContent:'center'
    },
    button:{
        width:'25%',
        marginHorizontal:10
    },
    buttonText:{
        padding:10,
        textAlign:'center',
        color:COLORS.black,
        fontWeight:'bold',
        fontSize:16
    }
});

export default Details;