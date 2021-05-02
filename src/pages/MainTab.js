import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar'

import Home from './Home';
import Busca from './Busca';
import Agenda from './Agenda';
import Favoritos from './Favorito';
import Perfil from './Perfil';


const Tab = createBottomTabNavigator();
export default () => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Busca" component={Busca} />
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
)