import React, { useEffect } from 'react'
import Welcome from './src/screens/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/SignUp';
import AuthProvider from './src/context/AuthContext';
import AuthGate from './src/screens';
import Home from './src/screens/admin/home';

const App = () => {
  const Stack = createNativeStackNavigator();
  

  return (
  <AuthProvider>
  <NavigationContainer>
     <Stack.Navigator initialRouteName='Auth' screenOptions={{headerShown:false}}>
     <Stack.Screen name="Auth" component={AuthGate} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  </NavigationContainer>
  </AuthProvider>
  )
}

export default App