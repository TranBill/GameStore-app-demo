import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Cartscreen from '../screens/Cartscreen';
import Favoritescreen from '../screens/Favoritescreen';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameDetailsScreen from '../screens/GameDetailsScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator >
            <Stack.Screen
            name = 'Home'
            component={HomeScreen}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name = 'GameDetails'
            component={GameDetailsScreen}
            options={({route})=>({
                title: route.params?.title,
            })}
            />

        </Stack.Navigator>
    )
}

const TabNavigator =() =>{
    return (
        <Tab.Navigator
        screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor:'#8A2086',
        tabBarActiveTintColor:'white',
        }}
        >
            <Tab.Screen name="Home2" component={HomeStack} 
            options={({route})=> ({
                tabBarStyle: {display: getTabBar(route)},
                tabBarIcon:({color,size})=>(
                    <Icon1 name="home-outline" size={size} color={color} />
                    )
            })}
            />

            <Tab.Screen name="Cart" component={Cartscreen} options={{
                tabBarBadge: 69,
                tabBarBardgeStyle: {backgroundcolor:'red'},
                tabBarIcon:({color,size})=>(
                <Icon2 name="shopping-bag" size={size} color={color} />
                )
            }} 
            />

            <Tab.Screen name="Favorite" component={Favoritescreen} options={{
                tabBarIcon:({color,size})=>(
                <Icon1 name="heart-outline" size={size} color={color} />
                )
            }} 
            />
    </Tab.Navigator>
    );

}

const getTabBar = route =>{
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    if (routeName == 'GameDetails'){
        return 'none';
    }
    return 'flex';
}

export default TabNavigator