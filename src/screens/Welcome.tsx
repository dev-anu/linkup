import { View, Image, StyleSheet,Text, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helper/common'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constant/themes'
import Button from '../components/Button'


const Welcome = ({navigation}:any) => {
  return (
    <ScreenWrapper bg="white">
        <StatusBar style='dark'/>
        <View style={styles.container}>
          <Image style={styles.welcomeImage} resizeMethod="auto" source={require('../assets/welcome.png')}/>
          <View style={{gap:20}}>
            <Text style={styles.text}>LinkUp<Text style={styles.innerText}>!</Text></Text>
            <Text style={styles.punchLine}>Find frends that help you to connect professionally.</Text>
          </View>
          <View style={styles.footer}>
            <Button title='Gettting Started'
            buttonStyle={{marginHorizontal:wp(3)}}
            onPress={()=>navigation.push('SignUp')}/>
            <View style={styles.bottomTextContainer}>
                <Text>Already hava an account?
                </Text>
                <Pressable onPress={()=>navigation.push('Login')}>
                    <Text style={[styles.loginText,{color:theme.colors.primaryDark,fontWeight:600}]}>
                        Login
                    </Text>
                </Pressable>
            </View>
          </View>
        </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingHorizontal:wp(4),
        marginTop:50,
        marginBottom:20
    },
    welcomeImage:{
        height:hp(50),
        width:wp(100),
        alignSelf:'center'
    },
    text:{
        color:theme?.colors?.text,
        fontSize:50,
        textAlign:"center",
        fontWeight:"600"
    },
    innerText:{
        color:theme.colors.primary
    },
    punchLine:{
        textAlign:'center',
        paddingHorizontal:wp(10),
        fontSize:hp(2),
        color:theme.colors.text
    },
    footer:{
        gap:30,
        width:"100%"
    },
    bottomTextContainer:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        gap:5
    },
    loginText:{
        textAlign:"center",
        color:theme.colors.text
    }
})