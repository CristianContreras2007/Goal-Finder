import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index.tsx'
import LoginScreen from './login.tsx'
import SignUpFirst from './signupfirst.tsx'
import SignUpSecond from './signupsecond.tsx'
import SignUpThird from './signupthird.tsx'
import Survey from './survey.tsx'
import Home from './home.tsx'



const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Index'>
              <Stack.Screen name= 'Index' component = {Index} />
              <Stack.Screen name= 'Login' component = {LoginScreen} />
              <Stack.Screen name= 'SignUpFirst' component = {SignUpFirst} />
              <Stack.Screen name= 'SignUpSecond' component = {SignUpSecond}/>
              <Stack.Screen name= 'SignUpThird' component = {SignUpThird}/>
              <Stack.Screen name= 'Survey' component={Survey}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}