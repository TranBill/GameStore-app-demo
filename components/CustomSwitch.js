import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export default function CustomSwitch({
    selectionMode,
    Option1,
    Option2,
    onSelectSwitch
}) {

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    return (
        <View style={{
            height:44,
            width: '100%',
            backgroundColor: 'gray',
            borderRadius: 10,
            borderColor: 'white',
            flexDirection: 'row',
            justifyContent:'center'
        }}
        >
            <TouchableOpacity
            activeOpacity={1}
            onPress={()=> updateSwitchData(1)}
            style={{
                flex: 1,
                backgroundColor: getSelectionMode == 1 ? 'green' : 'gray',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Text style={{
                    color: getSelectionMode == 1 ? 'cyan' : 'white',
                    fontSize: 14,
                }}>
                    {Option1}
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={1}
            onPress={()=> updateSwitchData(2)}
            style={{
                flex: 1,
                backgroundColor: getSelectionMode == 2 ? 'yellow' : 'gray',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Text style={{
                    color: getSelectionMode == 1 ? 'white' : 'red',
                    fontSize: 14,
                }}>
                    {Option2}
                </Text>

            </TouchableOpacity>

        </View>
    )
}
