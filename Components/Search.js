import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text, Image, ImageBackground} from 'react-native'
import sales from '../Data/saleData.js'
import SaleItem from './Sales.js'
const Search = () =>  {
        return (
            <View style={styles.main_container}>
                <View style={styles.header_container}>
                <TextInput placeholder="Search ..." style={styles.textinput} />
                <Image style={styles.image} source={require("../assets/square.png")} />
                </View>
                <FlatList data={sales} keyExtractor={(item) => {item.id.toString()}} renderItem={ ({item}) => <SaleItem sale={item} /> } />
            </View>
        )
    }   


const styles = StyleSheet.create({
    main_container:  {
        flex: 1,
        marginTop: 50
    },
    header_container: {
        flexDirection: 'row',
    },
    image : {
        height :40,
        flex: 1,
        marginRight :10,
        backgroundColor :'red'
    },  
    textinput: {
        flex :6,
        marginLeft: 5,
        marginRight: 10,
        borderColor: 'rgb(128,128,128)',
        borderWidth: 1,
        height: 40,
        paddingLeft: 5,
        fontWeight: 'bold'
      }
})
export default Search