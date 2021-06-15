import React from 'react'
import CategoriesData from "../Data/Categories.js"
import CategorieItem from './CategorieItem'
import {  FlatList } from 'react-native'

const Categories = ({navigation}) => {
  const renderItem = ({item}) =>  <CategorieItem categorie={item} navigation={navigation}/>;

    return (
      <FlatList horizontal={false} numColumns={2} style={{marginTop: 50}}data={CategoriesData} keyExtractor={item => item.id.toString()} renderItem={renderItem}  />     )
  }

export default Categories