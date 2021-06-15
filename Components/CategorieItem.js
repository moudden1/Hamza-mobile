import React from 'react'
import { StyleSheet, Dimensions, Text, Image, TouchableOpacity} from 'react-native'

let {width: screenWidth, height: screenHeight} = Dimensions.get("window")
const CategorieItem = ({categorie, navigation}) => {
        return (
            <TouchableOpacity style={styles.main_container} onPress={()=>navigation.navigate("Search",{categorie: categorie})}>
                <Image style={styles.image_categorie} source={categorie.path} />
                <Text style={styles.title_categorie} numberOfLines={1}>{categorie.title}</Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
   main_container: {
       height:screenHeight/4,
       width:screenWidth/2,
       alignItems: 'center'
   },
   image_categorie: {
        width:screenWidth/2 -10,
        height: screenHeight/4 -40,
        margin: 5,
        backgroundColor :'gray'
   },
   title_categorie : {
        color :'#000',
        fontWeight :'bold',
        fontSize:16,
        width: screenWidth/2 -10,
        backgroundColor:'lightgrey',
        flex: 1
   }
})

export default CategorieItem