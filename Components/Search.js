import React, { useState } from 'react'
import { StyleSheet, View, TextInput, FlatList, Text, Image} from 'react-native'
import sales from '../Data/saleData.js'
import SaleItem from './Sales.js'
const Search = ({navigation}) =>  {
  
    const [_sales, setSales] = useState([]);
  
    // i can do it as a simple var (what is better ? )
  
    const [_textInput, setTextInput] = useState("");
  
    const _loadSales = () => {
        console.log("loading sales for "+_textInput+" ....");
        var temp = [];
        var motif = new RegExp(_textInput,"igm");
        temp = sales.reduce((acc, sale) => (motif.test(sale.title) || motif.test(sale.description)) ? acc.concat(sale) : acc, []); 
        setSales(temp);
    }
  
    const renderItem = ({item}) =>  <SaleItem sale={item} displayDetailForSale={_displayDetailForSale}/>;
  
    const _displayDetailForSale = (sale) => {
        console.log("Display sale with id " + sale.id);
        navigation.navigate("SaleDetail",{ sale: sale });
    }



        return (
            <View style={styles.main_container}>
                <View style={styles.header_container}>
                <TextInput placeholder="Search ..." style={styles.textinput} onChangeText={(text) => setTextInput(text)} onSubmitEditing={()=>_loadSales()}/>
                <Image style={styles.image} source={require("../assets/square.png")} />
                </View>
                                {_sales.length > 0 ? <FlatList data={_sales} keyExtractor={item => item.id.toString()} renderItem={renderItem}  /> 

                                                                     : <Text>No result</Text>}

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
        marginBottom: 10,
        borderColor: 'rgb(128,128,128)',
        borderWidth: 1,
        height: 40,
        paddingLeft: 5,
        fontWeight: 'bold'
      }
})
export default Search