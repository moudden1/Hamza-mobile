import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

const SaleItem = ({sale, displayDetailForSale}) => {
        return (
            <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForSale(sale)}>
                <Image style={styles.image_sale} source={sale.path} />
                <View style={styles.content_container}>
                <View style={styles.header_container}>
                <Text style={styles.title_sale} numberOfLines={1}>{sale.title}</Text>
                </View>
                <View style={styles.price_container}>
                <Text style={styles.price_sale} numberOfLines={1}>{sale.price}€</Text>
                </View>
                <View style={styles.footer_container}>
                    <Text style={styles.city_sale}>{sale.city}</Text>
                    <Text style={styles.date_sale}>{sale.publication_date}</Text>
                </View>
                </View>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
   main_container: {
       height:190,
       flexDirection:'row'
   },
   image_sale: {
        width:120,
        height: 180,
        margin: 5,
        backgroundColor :'gray'
   },
   content_container : {
        flex: 1,
        margin: 5
   },
   header_container : {
       flex :3
   },
   title_sale : {
        color :'#000',
        fontWeight :'bold',
        fontSize:20,
        flex: 1
   },
    price_container : {
    flex: 7
    },
    price_sale : {
    fontSize: 15,
    color :'#31b472'
    },
    footer_container : {
        flex :1,
        flexDirection:'row'
    },
    city_sale : {
        flex : 1
    },
    date_sale : {
        fontSize:14
    }
})

export default SaleItem