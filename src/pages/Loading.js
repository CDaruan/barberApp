import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Loadizinho} from '../components/gerais'
import logo from '../../assets/logo.png'
import { StyleSheet, KeyboardAvoidingView, AsyncStorage, Image } from 'react-native';

import { UserContext } from '../context/UserContext';

import { userController } from '../controllers/userController';

export default () => {

    const [login, setLogin] = useState('');
    const navigation = useNavigation();

    const { dispatch: userDispatch} = useContext(UserContext);

    // executa sempre q a tela abre
    useEffect(() => {
        const checkToken = async () => {
            const login = await AsyncStorage.getItem('login');
            const senha = await AsyncStorage.getItem('senha');

            if (login && senha) {
                //validar login

                var { ok, user} = await userController.logar(login, senha);
                if (ok) {
                    userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: user.avatar
                        }
                    });
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    })
                }

            } else {
                navigation.reset({
                    routes: [{ name: 'Login' }]
                })
            }

        }
        checkToken();
    }, [])

    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
            <Image style={styles.icon} source={logo} />
            <Loadizinho size="large" color="#000" />
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    icon: {
        width: 150,
        height: 120,
    }
});