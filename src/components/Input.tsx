import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../constant/themes'
import { hp } from '../helper/common'

const Input = (props:any) => {
  return (
    <View style={[styles.container,props.containerStyles && props.containerStyles]}>
        {
            props.icon && props.icon
        }
        <TextInput
            style={{flex:1}}
            placeholderTextColor={theme.colors.textLight}
            ref={props.inputRef && props.inputRef}
            {...props}
        />
    </View>
  )
}

export default Input

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        height:hp(7.2),
        alignItems:'center',
        justifyContent:"center",
        borderWidth:0.4,
        borderColor:theme.colors.dark,
        borderCurve:'continuous',
        paddingHorizontal:18,
        gap:12,
        borderRadius:6
    }
})