import { Pressable,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../constant/themes';

const BackButton = ({navigation}:any) => {
  return (
   <Pressable onPress={()=> navigation.goBack()} style={styles.button}>
    <Ionicons name="chevron-back-outline" size={24} color={theme.colors.text} />
   </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        alignSelf:'flex-start',
        borderRadius:theme.radius.sm,
        backgroundColor:'rgba(0,0,0,0.07)',
        padding:5
    }
})