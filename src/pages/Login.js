import React, { useState, useContext } from 'react';
import api from '../services/api.js';
import { StyleSheet, AsyncStorage, KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form, Input, Label, Botao, LabelBotao, LabelBotaoSecreto, BotaoSecreto } from '../components/gerais'
import { userController } from '../controllers/userController';

import { UserContext } from '../context/UserContext'

import logo from '../../assets/logo.png'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 150,
        height: 120,
        marginBottom: 30,
        alignSelf: 'center'
    },
});

export default function Login() {

    const { dispatch: userDispatch } = useContext(UserContext);

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    async function handleCadastrar() {
        navigation.navigate('Cadastro');
    }
    async function handleLogar() {
        var data = await userController.logar(login, senha);
        // navigation.reset({
        //     routes: [{ name: 'MainTab' }]
        // })
        // alert(data.ok);
        // alert(JSON.stringify(data.user));
        var ok = data.ok;
        var user = data.user;
        alert(ok)
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
    }

    return (<KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
        <Form >
            <Image source={logo} style={styles.icon} />
            <Label >LOGIN *</Label>
            <Input
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={login}
                onChangeText={setLogin}
            />
            <Label >SENHA *</Label>
            <Input
                placeholderTextColor="#999"
                secureTextEntry={true}
                autoCapitalize="words"
                autoCorrect={false}
                value={senha}
                onChangeText={setSenha}
            />
            <Botao onPress={handleLogar}>
                <LabelBotao >Encontrar Barbeiros</LabelBotao>
            </Botao>

            <BotaoSecreto onPress={handleCadastrar}>
                <LabelBotaoSecreto >Não é inscrito ainda? Cadastre-se</LabelBotaoSecreto>
            </BotaoSecreto>
        </Form>
    </KeyboardAvoidingView>
    );
}
