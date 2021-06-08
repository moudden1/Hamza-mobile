import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../Components/Favorites'
import SaleDetail from '../Components/SaleDetail'
import Search from '../Components/Search'
import Post from '../Components/Post'
import Inbox from '../Components/Inbox'
import Account from '../Components/Account'
import {  Image, View, Text } from 'react-native'

const SearchStack = createStackNavigator();
// i can  add some options to improve the style of stack navigator
const SearchStackNavigator = ()  => {
    return(
    <SearchStack.Navigator headerMode="none">
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
            <Tab.Screen name="Post" component={Post} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                        <Image  source={require('../assets/post.png')} style={{
                            width:30, 
                            height:30,
                            tintColor: focused ? "#31b472" : "#748c94"
                            }}/>
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Post</Text>
                    </View>
                )
             }}/>
             <Tab.Screen name="Inbox" component={Inbox} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                        <Image  source={require('../assets/inbox.png')} style={{
                            width:30, 
                            height:30,
                            tintColor: focused ? "#31b472" : "#748c94"
                            }}/>
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Inbox</Text>
                    </View>
                )
             }}/>
             <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'} }>
                        <Image  source={require('../assets/account.png')} style={{
                            width:30, 
                            height:30,
                            tintColor: focused ? "#31b472" : "#748c94"
                            }}/>
                             <Text style={{color: focused ?  "#31b472" : "#748c94", fontSize: 12}}>Account</Text>
                    </View>
                )
             }}/>
            </Tab.Navigator>
    )
}
export default SalesTabNavigator