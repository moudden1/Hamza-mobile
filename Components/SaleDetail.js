import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'

const SaleDetail = ({route, navigation}) => {
  // i can do a request by only the id if we had a database 
  const {idSale, title , price  , description, publication_date , city} = route.params;
  return (
    <ScrollView style={styles.scrollview_container}>
      <Text style={styles.price_text}>{price}€</Text>
      <Image style={styles.image_sale} source={require("../assets/renault.jpeg")} />
      <Text style={styles.title_text}>{title}</Text>
      <Text style={styles.default_text}>{city}</Text>
      <Text style={styles.default_text}>Posted {publication_date}</Text>
      <Text style={styles.description_text}>{description}</Text>

    </ScrollView>
  )
 
}
const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
    marginTop: 37
  }, 
  image_sale: {
    height: 200,
    width : "100%"
    },
  price_text: {
    position: 'absolute',
	  backgroundColor: "#31b472",
    color: 'white',
    right: 0,
    top: 10,
    zIndex: 10,
    padding: 10,
    borderRadius: 20,
    borderTopRightRadius : 0,
    fontWeight: "500"
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 25,
    flexWrap : 'wrap',
    marginLeft: 5,
    marginTop:15,
    marginBottom: 5
  },
  description_text : {
    fontStyle :'italic',
    color: "#666666",
    margin: 5,
    marginBottom: 5,
    flex: 1
  },
  default_text: {
    marginLeft: 5,
  }

})
export default SaleDetail

