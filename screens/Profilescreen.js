import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Profilescreen=() => {
    return (
        <View style={styles.container}>
            <Text>Profile screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Profilescreen
