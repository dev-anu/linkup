import {useEffect} from 'react'
import { useAuth } from '../context/AuthContext';
import { supabase } from '../../lib/supabase';
import { View } from 'react-native';
import Loading from '../components/Loading';

const AuthGate = ({navigation}:any) => {
    const {setAuth}:any=useAuth();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((_event:any,session:any)=>{
      console.log(session)
        if(session){
          setAuth(session);
          navigation.replace('Home')
        }else{
          setAuth(null);
          navigation.replace('Welcome')
        }
    })
  },[])

  return <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
    <Loading/>
  </View>;
}

export default AuthGate