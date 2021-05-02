import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Loading from '../pages/Loading'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import MainTab from '../pages/MainTab'
import Barber from '../pages/Barber'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
        initialRouteName="Loading"
        screenOptions={{
            headerShown:false 
        }}
    >
        <Stack.Screen name ="Loading" component = {Loading}/>
        <Stack.Screen name ="Login" component = {Login}/>
        <Stack.Screen name ="Cadastro" component = {Cadastro}/>
        <Stack.Screen name ="MainTab" component = {MainTab}/>
        <Stack.Screen name="Barber" component={Barber} />
    </Stack.Navigator>
    )