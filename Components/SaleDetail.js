import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const SaleDetail = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.main_container}>
      <Text>Details of sale {navigation.state.params.idSale}</Text>
      <Text>title :{navigation.state.params.title}</Text>
      <Text>price : {navigation.state.params.price}</Text>
      <Text>description :  {navigation.state.params.description}</Text>
      <Text>date : {navigation.state.params.publication_date}</Text>
      <Text>city : {navigation.state.params.city}</Text>
    </View>
  )
 
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})
export default SaleDetail

