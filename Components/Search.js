import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text} from 'react-native'
import sales from '../Data/saleData.js'
import SaleItem from './Sales.js'
class Search extends React.Component {
    constructor(props){
        super(props);
        this.inputText= '';
    }
    _loadSales(){
        var i;
        console.log("searching ...");
        var motif = new RegExp(this.inputText,"i");
        for(i=0;i<sales.length;i++)
        {
            if(motif.test(sales[i].title))
            {
                console.log(sales[i].title);
            }
        }
    }

    _textInput(text){
        this.inputText = text;
    }
    render(){
        return (
            <View style={styles.main_container}>
                <TextInput placeholder="Search ..." style={styles.textinput} onChangeText={(text)=>this._textInput(text)} onSubmitEditing={()=>this._loadSales()}/>
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