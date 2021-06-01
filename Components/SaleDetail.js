import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const SaleDetail = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.main_container}>
      <Text>Details of sale {navigation.state.params.idSale}</Text>
    </View>
  )
 
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})
export default SaleDetail

