import React, { useContext } from 'react';
import { Container, Label, Botao, LabelBotao } from '../components/gerais';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/UserContext'

const { AsyncStorage } = require("react-native");

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);

    const navigation = useNavigation();

    async function handleTestarContext() {
        userDispatch({
            payload: {
                avatar: "https://scontent.fcgh16-1.fna.fbcdn.net/v/t1.0-9/22487_601713589932401_1009144212462785861_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=X69xlZO8RHcAX80-PRy&_nc_ht=scontent.fcgh16-1.fna&oh=55484fd9c05c34039efaddb16b02e802&oe=5F8521D4"
            },
            type: 'setAvatar',
        });
    }
    async function handleDeslogar() {

        await AsyncStorage.setItem('login', '');
        await AsyncStorage.setItem('senha', '');
        navigation.reset({
            routes: [{ name: 'Login' }]
        });

    }
    return (
        <Container>
            <Label>Perfil</Label>

            <Botao onPress={handleDeslogar}>
                <LabelBotao >Deslogar</LabelBotao>
            </Botao>

            <Botao onPress={handleTestarContext}>
                <LabelBotao >Testar</LabelBotao>
            </Botao>

        </Container>
    );
}