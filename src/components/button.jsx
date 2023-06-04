import React from 'react'
import {View, Text, Pressable} from 'react-native';
import globalStyles from '../styles/global.js';

const Button = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress}>
            <View style ={globalStyles.button}>
                <Text>Press Me</Text>
            </View>
        </Pressable>

    )
}
export default Button;