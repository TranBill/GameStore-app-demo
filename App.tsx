import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TouchableOpacity 
} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';


import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';



function App()  {
    return (
      <NavigationContainer>
        <AppStack/> 
        {/* <AuthStack/> */}
      </NavigationContainer>
    )
}



export default  App
