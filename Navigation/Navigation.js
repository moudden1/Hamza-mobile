import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Favorites from '../Components/Favorites'
import SaleDetail from '../Components/SaleDetail'
import Search from '../Components/Search'
import Post from '../Components/Post'
import Inbox from '../Components/Inbox'
import Account from '../Components/Account'
import Categories from '../Components/Categories'
import {  View, Text } from 'react-native'

const SearchStack = createStackNavigator();
// i can  add some options to improve the style of stack navigator
const SearchStackNavigator = ()  => {
    return(
    <SearchStack.Navigator headerMode="none">
        <SearchStack.Screen name="Search" component={Search} /> 
        <SearchStack.Screen name="SaleDetail" component={SaleDetail} /> 
        <SearchStack.Screen name="Categories" component={Categories} /> 
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
                     <MaterialCommunityIcons style={{color: focused ?  "#31b472" : "#748c94"}} name="home" size={30} />
                            <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Home</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                   <MaterialCommunityIcons style={{color: focused ?  "#31b472" : "#748c94"}} name="heart" size={30} />
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Favoris</Text>
                    </View>
                )
             }}/>
            <Tab.Screen name="Post" component={Post} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
         <MaterialCommunityIcons style={{color: focused ?  "#31b472" : "#748c94"}} name="camera-outline" size={30} />
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Post</Text>
                    </View>
                )
             }}/>
             <Tab.Screen name="Inbox" component={Inbox} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                   <MaterialCommunityIcons style={{color: focused ?  "#31b472" : "#748c94"}} name="chat" size={30} />
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Inbox</Text>
                    </View>
                )
             }}/>
             <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                            <MaterialCommunityIcons style={{color: focused ?  "#31b472" : "#748c94"}} name="account-circle" size={30} />
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Account</Text>
                    </View>
                )
             }}/>
            </Tab.Navigator>
    )
}
export default SalesTabNavigator