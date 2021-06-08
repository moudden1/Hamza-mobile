import React from 'react'
import { StyleSheet, Text, ScrollView, Image, Button } from 'react-native'
import { connect } from 'react-redux';

const SaleDetail = (props) => {
  const {sale} = props.route.params;
  console.log(sale)
  const _toggleFavorite = () =>{
    const action = { type: "TOGGLE_FAVORITE", value: sale}
  }
  return (
    <ScrollView style={styles.scrollview_container}>
      <Text style={styles.price_text}>{sale.price}€</Text>
      <Image style={styles.image_sale} source={require("../assets/renault.jpeg")} />
      <Text style={styles.title_text}>{sale.title}</Text>
      <Text style={styles.default_text}>{sale.city}</Text>
      <Text style={styles.default_text}>Posted {sale.publication_date}</Text>
      <Text style={styles.description_text}>{sale.description}</Text>
    <Button title="Enregistrer" onPress={_toggleFavorite} />
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

const mapStateToProps = (state) => {
  return {
    favoriteSales: state.favoritesSales
  }
}

export default connect(mapStateToProps)(SaleDetail)

