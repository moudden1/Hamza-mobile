import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'

class SaleItem extends React.Component {
    render() {
        const sale = this.props.sale;
        console.log(sale.path);
        return (
            <View style={styles.main_container}>
                <Image style={styles.Image} source={require("../assets/renault.jpeg")} />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.price_text}>{sale.price} DH</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.title_text} numberOfLines={3}>{sale.title}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{sale.publication_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
            height: 190,
            flexDirection: 'row'
    },
    Image: {
        width: 120,
        height: 180,
        margin: 5
    },
    content_container: {
        flex: 1,
        margin: 5
    },  
    header_container: {
        flex: 3
    },
    price_text: {
        color: "blue",
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        paddingRight: 5
    },
    description_container: {
        flex: 7
    },
    title_text:{
        fontWeight:'bold',
        flexWrap: "wrap",
        fontSize: 15,
        fontStyle: 'italic'
    },  
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default SaleItem