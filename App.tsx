import React from 'react'
import Welcome from './src/screens/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/SignUp';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (<NavigationContainer>
     <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App