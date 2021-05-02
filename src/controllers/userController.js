const { AsyncStorage } = require("react-native");
import { useContext } from "react";
import { UserContext } from '../context/UserContext'
import api from '../services/api.js';

const salvaLogin = async (user) => {
    // dispatch:userDispatch -> renomeia variavel dispatch para userDispatch
    // const { dispatch: userDispatch } = useContext(UserContext);
    // alert('salvaLogin')
    // alert('AsyncStorage')

    await AsyncStorage.setItem('login', user.login);
    await AsyncStorage.setItem('senha', user.senha);
    await AsyncStorage.setItem('id', "" + user.id);
    // await AsyncStorage.setItem('avatar', user.avatar);

    // userDispatch({
    //     type: 'setUser',
    //     payload: {
    //         user: user
    //     }
    // });
}

export const userController = {
    logar: async (login, senha) => {
        try {
            if (login != '' && senha != '') {
                const response = (await api.get(`/user/${login}`)).data;
                // alert(JSON.stringify(response))
                if (response.ok && response.user.senha == senha) {
                    salvaLogin(response.user);
                    // alert('2-'+response.user.avatar)
                    return { ok: true, user: response.user }
                } else
                    alert("Login e/ou Senha inválidos")
            } else alert("Preencha os campos Login e Senha")
        } catch (err) {
            alert(err)
            return { ok: false }
        }
    },
    cadastrar: async (nome, login, senha, senha2) => {
        if (login != '' && senha != '' && nome != '' && senha2 != '') {
            if (senha == senha2) {
                // teste(nome);
                const response = (await api.post('/adduser', { nome, login, senha })).data;

                if (response.ok) {
                    salvaLogin(response.user)
                    alert('1-' + response.user.avatar)
                    return { ok: true, user: response.user };

                } else alert(response.msg || "Falha ao tentar cadastrar")
            } else alert("Senhas não coinciden");
        } else alert("Preencha Todos os campos")

        return { ok: false }
    }

}