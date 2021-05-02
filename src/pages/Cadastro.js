import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form, Input, Label, Botao, LabelBotao, LabelBotaoSecreto, BotaoSecreto } from '../components/gerais'
import { userController } from '../controllers/userController';
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

    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const navigation = useNavigation();

    async function handleCadastrar() {
        var { ok, user } = (await userController.cadastrar(nome, login, senha, senha2));
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
            <Label >NOME *</Label>
            <Input
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                autoCapitalize="none"
                value={nome}
                onChangeText={setNome}
            /><Label >LOGIN *</Label>
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
            <Label >REPITA A SENHA *</Label>
            <Input
                placeholderTextColor="#999"
                secureTextEntry={true}
                autoCapitalize="words"
                autoCorrect={false}
                value={senha2}
                onChangeText={setSenha2}
            />
            <Botao onPress={handleCadastrar}>
                <LabelBotao >Cadastrar</LabelBotao>
            </Botao>
        </Form>
    </KeyboardAvoidingView>
    );
}
