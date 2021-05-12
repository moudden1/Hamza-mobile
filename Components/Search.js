import React from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'

class Search extends React.Component {
    render(){
        return (
            <View style={styles.main_container}>
                <TextInput placeholder="search ..." style={styles.textinput}/>
                <Button title="Search" onPress={() => {}}/>
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
        marginRight: 5,
        height: 50,
        paddingLeft: 5
      }
})
export default Search