import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text} from 'react-native'
import sales from '../Data/saleData.js'
import SaleItem from './Sales.js'
class Search extends React.Component {
    render(){
        return (
            <View style={styles.main_container}>
                <TextInput placeholder="Search ..." style={styles.textinput} onSubmitEditing={()=>console.log("searching ...")}/>
                <FlatList
                    data={sales}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <SaleItem sale={item}/>}
                />
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    main_container:  {
        flex: 1,
        marginTop: 50
    },
    textinput: {
        marginLeft: 5,
        marginRight: 15,
        borderColor: 'rgb(128,128,128)',
        borderWidth: 1,
        height: 40,
        paddingLeft: 5,
        fontWeight: 'bold'
      }
})
export default Search