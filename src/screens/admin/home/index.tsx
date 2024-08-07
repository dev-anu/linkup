import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { useAuth } from '../../../context/AuthContext'
import { supabase } from '../../../../lib/supabase'

const Home = () => {
  const {setAuth}:any=useAuth();

  const onLogout=async()=>{
    setAuth(null);
    const {error}=await supabase.auth.signOut();
    if(error){
      Alert.alert('SignOut', "Error in siging out")
    }
  }

  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Pressable onPress={onLogout}>
        <Text>Logout</Text>
      </Pressable>
    </ScreenWrapper>
  )
}

export default Home