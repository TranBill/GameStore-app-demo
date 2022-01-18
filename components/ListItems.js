import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { WindowWidth } from '../utils/dimensions'

export default function ListItems({poster,title,subtitle,isFree,price,onPress}) {
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems: 'center',
            marginBottom: 20,
        }}>
            <View style={{
                flexDirection:'row',alignItems:'center',flex:1
            }}
            >
                <Image source={poster} 
                style={{width: 60,height: 60,borderRadius: 10,marginRight: 10,marginBottom: 10}} />
                <View style={{width:WindowWidth - 220}}>
                    <Text 
                    style={{color:'#404040',fontSize: 12,fontFamily:'Arial Rounded MT Bold'}}>
                        {subtitle}
                    </Text>

                    <Text 
                    numberOfLines={1}
                    style={{color:'black',fontSize: 10,fontFamily:'Apple Color Emoji',textTransform:'uppercase'}}>
                        {title}
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={onPress}
            style={{
                backgroundColor:'#0AC782',
                padding: 10,
                width: 100,
                borderRadius: 10,
            }}
            >
                <Text style={{
                    color:'white',
                    textAlign: 'center',
                    fontFamily:'American Typewriter',
                    fontSize: 10,
                }}
                >
                    {isFree=='Yes' && 'Play'}
                    {isFree== 'No' && price}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
