import React, { useState } from 'react'
import { StyleSheet, View, TextInput, FlatList, Text, Image} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import sales from '../Data/saleData.js'
import SaleItem from './Sales.js'
const Search = (props) =>  {
    
    const [_sales, setSales] = useState([]);
  
    // i can do it as a simple var (what is better ? )
  
    const [_textInput, setTextInput] = useState("");
  
    const loadSales = (categorieSearch) => {
        var temp = [];
        if(categorieSearch!=undefined){
            console.log(categorieSearch.categorie.title);
            temp = sales.reduce((acc, sale) => categorieSearch.categorie.title == sale.categorie ? acc.concat(sale) : acc, []); 
        }
        else
        {
                console.log("loading sales for "+_textInput+" ....");
                var motif = new RegExp(_textInput,"igm");
                temp = sales.reduce((acc, sale) => (motif.test(sale.title) || motif.test(sale.description)) ? acc.concat(sale) : acc, []); 
        }
        setSales(temp);
    }
  
    const renderItem = ({item}) =>  <SaleItem sale={item} displayDetailForSale={_displayDetailForSale}/>;
  
    const _displayDetailForSale = (sale) => {
        console.log("Display sale with id " + sale.id);
        props.navigation.navigate("SaleDetail",{ sale: sale });
    }
    // search by categorie
    if(props.route.params){
        loadSales(props.route.params);
        props.route.params = undefined;
    }
        return (
            <View style={styles.main_container}>
                <View style={styles.header_container}>
                <TextInput placeholder="Search ..." style={styles.textinput} onChangeText={(text) => setTextInput(text)} onSubmitEditing={()=>loadSales()}/>
            <MaterialCommunityIcons name="animation" size={35} color="#31b472" style={styles.icons} onPress={()=>props.navigation.navigate("Categories",)}/>     
                <MaterialCommunityIcons name="map-marker" size={30} color="#31b472" style={styles.icons}/>
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
    textinput: {
        flex :6,
        marginLeft: 5,
        marginRight: 10,
        marginBottom: 10,
        borderColor: '#31b472',
        borderWidth: 1,
        height: 40,
        paddingLeft: 5,
        fontWeight: 'bold',
        borderRadius:10
      },
      icons : {
          marginLeft : 8
      }
})
export default Search