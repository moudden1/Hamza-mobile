import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../Components/Favorites'
import SaleDetail from '../Components/SaleDetail'
import Search from '../Components/Search'
import {  Image, View, Text } from 'react-native'

const SearchStack = createStackNavigator();
const SearchStackNavigator = ()  => {
    return(
    <SearchStack.Navigator>
        <SearchStack.Screen name="Search" component={Search} /> 
        <SearchStack.Screen name="SaleDetail" component={SaleDetail} /> 
    </SearchStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const SalesTabNavigator = () => {
    return (
        <Tab.Navigator 
        tabBarOptions={{
            showLabel: false,
                style: {
                    backgroundColor:"#ffffff",
                    height:65,
                }
        }}>
           <Tab.Screen name="Search"  component={SearchStackNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                        <Image  source={require('../assets/search.png')} style={{
                            width:30, 
                            height:30,
                            tintColor: focused ? "#31b472" : "#748c94"
                            }}/>
                            <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Search</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                        <Image  source={require('../assets/favorite.png')} style={{
                            width:30, 
                            height:30,
                            tintColor: focused ? "#31b472" : "#748c94"
                            }}/>
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Favoris</Text>
                    </View>
                )
             }}/>
            </Tab.Navigator>
    )
}
export default SalesTabNavigator