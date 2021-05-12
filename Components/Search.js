import React from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'

class Search extends React.Component {
    render(){
        return (
            <View style={{marginTop: 50 }}>
                <TextInput placeholder="Search ..." style={styles.textinput}/>
                <Button title="Search" onPress={() => {}}/>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        paddingLeft: 5
      }
})
export default Search