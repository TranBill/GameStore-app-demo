import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profilescreen from '../screens/Profilescreen';
import Historyscreen from '../screens/Historyscreen';
import Settingscreen from '../screens/Settingscreen';
import Messagescreen from '../screens/Messagescreen';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();


const AppStack = () => {

    return (
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{headerShown:false,
        drawerLabelStyle:{marginLeft:-20},
        drawerActiveBackgroundColor:'#8A2086',
        drawerActiveTintColor:'white',
        drawerInactiveTintColor:'gray'
        }}>
            <Drawer.Screen 
            name = 'Home'
            component={TabNavigator}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Icon name="home" size={20} color={color} />
                )
            }}
            />
            <Drawer.Screen
            name = 'Profile'
            component={Profilescreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Icon name="user" size={20} color={color} />
                )
            }}
            />
            <Drawer.Screen
            name = 'History'
            component={Historyscreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Icon name="clock" size={20} color={color} />
                )
            }}
            />
            <Drawer.Screen
            name = 'Message'
            component={Messagescreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Icon name="comment-dots" size={20} color={color} />
                )
            }}
            />
            <Drawer.Screen
            name = 'Setting'
            component={Settingscreen}
            options= {{
                drawerIcon: ({color}) => ( 
                    <Icon name="cogs" size={20} color={color} />
                )
            }}
            />
        </Drawer.Navigator>
    );
}

export default AppStack

