import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

const GameDetailsScreen=({navigation,route}) => {
    return (
        <View style={styles.container}> 
            <Text>Game Details</Text>
            <Image source={route.params?.poster}
            style={{
                height:300,
                width:250,
                alignItems:'center',
                justifyContent:'center',
            }}
            />
            <Text>{route.params?.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        }
    }
)

export default GameDetailsScreen