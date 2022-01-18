import React from 'react'
import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native'
import {DrawerContent,DrawerItemList,DrawerContentScrollView} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'


const CustomDrawer=(props) => {
    return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#8A2086'}}>
           <ImageBackground source={require('../assets/images/GameBackground.jpg')} style={{padding:20}}>
               <Image 
               source={require('../assets/images/avatar.jpg')}
               style={{height:50,width:50,borderRadius:40,marginBottom:10}}
                />
                <Text style={{color:'white',fontSize:15,fontFamily:'Baskerville-Bold',marginBottom:15}}>
                    DumbassBill
                </Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'yellow',fontSize:10}}> 69420 Coins</Text>
                <Icon name='coins' size={14} color='yellow' style={{marginLeft: 5,marginTop: 5}}/>
                </View>
           </ImageBackground>

           <View style={{flex:1,backgroundColor:'white',paddingTop:15}}>
           <DrawerItemList {...props}/>
           </View>

       </DrawerContentScrollView>

       <View style={{padding:20,borderTopWidth:1,borderTopColor:'black'}}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="share-alt" size={20} />
                <Text style={{marginLeft:5,fontSize:15}}>
                    Share
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:10}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="sign-out-alt" size={20} />
                <Text style={{marginLeft:5,fontSize:15}}>
                    Sign out
                </Text>
            </View>
        </TouchableOpacity>
       </View>
    </View>
    )
}

export default CustomDrawer
