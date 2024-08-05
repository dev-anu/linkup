import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import React,{useRef,useState} from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../../constant/themes'
import { hp, wp } from '../../helper/common'
import Input from '../../components/Input'
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import Button from '../../components/Button'



const Login = ({navigation}:any) => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading,setLoading]=useState(false);

    const onSubmit=()=>{
        if(!emailRef.current || !passwordRef.current){
            Alert.alert('Login',"please fill all the fields");
            return;
        }
        //call the api
    }

  return (
    <ScreenWrapper>
        <StatusBar style='dark'/>     
        <View style={styles.container}>
            <BackButton navigation={navigation}/>
            {/* Welcome Text */}
            <View>
                <Text style={styles.welcomeText}>Hey,</Text>
                <Text style={styles.welcomeText}>Welcome Back</Text>
            </View>
            <View style={styles.form}>
                <Text style={{fontSize:hp(2),color:theme.colors.text}}>Please login to continue</Text>
                <Input icon={<Fontisto name="email" size={24} color="gray" />}
                placeholder="Enter your email"
                onChangeText={(value:any)=>emailRef.current = value}/>
                <Input icon={<Entypo name="lock" size={24} color="gray" />}
                placeholder="Enter your password"
                onChangeText={(value:any)=>passwordRef.current = value}
                secureTextEntry
                />
                <Text style={styles.forgetPassword}>
                    Forget Password?
                </Text>
                {/* button */}
                <Button title='Login' loading={loading} onPress={onSubmit}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't hava an account?</Text>
                <Pressable onPress={()=>navigation.push('SignUp')}>
                    <Text style={[styles.footerText, {color:theme.colors.primaryDark,fontWeight:"600"}]}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:45,
        paddingHorizontal:wp(5)
    },
    welcomeText:{
        fontSize:hp(4),
        fontWeight:"700",
        color:theme.colors.text
    },
    form:{
        gap:25,
    },
    forgetPassword:{
        textAlign:'right',
        fontWeight:"600",
        color:theme.colors.text
    },
    footer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5
    },
    footerText:{
        textAlign:'center',
        color:theme.colors.text,
    }
})