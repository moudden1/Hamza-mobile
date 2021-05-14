import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text} from 'react-native'
import sales from '../Data/saleData.js'
class Search extends React.Component {
    render(){
        return (
            <View style={styles.main_container}>
                <TextInput placeholder="Search ..." style={styles.textinput}/>
                <FlatList
                    data={sales}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Text>{item.title}</Text>}
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