import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OnBoardingScreen from '../screens/OnBoardScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = ({navigation}) => {

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
            name = 'Onboarding'
            component={OnBoardingScreen}
            />
            <Stack.Screen
            name = 'Login'
            component={LoginScreen}
            />

        </Stack.Navigator>
    )
}

export default AuthStack
