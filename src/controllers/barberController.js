const { AsyncStorage } = require("react-native");
import { useContext } from "react";
import { UserContext } from '../context/UserContext'
import api from '../services/api.js';


export const barberController = {
    find: async (regiao) => {
        try {
            const response = (await api.get(`/barbers/${regiao}`)).data;

            if (response.ok) {
                return { ok: true, barbers: response.barberF };
            } else
                return response;
        } catch (err) {
            alert("Falha ao tentar buscar" + err)
            return { ok: false };
        }
    },
    gerBarber: async (barber_id) => {
        try {
            user_id = await AsyncStorage.getItem('id');
            const response = (await api.post(`/barber/`, { barber_id, user_id })).data;
            if (response.ok) {
                return { ok: true, barber: response.barber }
            } else {
                alert(response.msg || "Falha ao tentar buscar Barbeiro");
                return response;
            }
        } catch (err) {
            alert("Falha ao tentar buscar barbeiro" + err)
            return { ok: false };
        }
    },
    setFavorito: async (barber_id, sim) => {
        try {
            user_id = await AsyncStorage.getItem('id');
            const response = (await api.post(`/barbers/favoritos`, { barber_id, user_id, sim })).data;
            if (response.ok) {
                return { ok: true, favoritos: response.favoritos }
            } else {
                alert(response.msg || "Falha ao tentar adicionar aos favoritos")
                return response;
            }
        } catch (err) {
            alert("Falha ao tentar adicionar aos favoritos" + err)
            return { ok: false };
        }
    },
    delFavorito: async (barber_id, user_id) => {
        try {
            const response = (await api.post(`/barbers/favoritos`, { barber_id, user_id })).data;
            if (response.ok) {
                return { ok: true, favoritos: response.favoritos }
            } else {
                alert(response.msg || "Falha ao tentar adicionar aos favoritos")
                return response;
            }
        } catch (err) {
            alert("Falha ao tentar adicionar aos favoritos" + err)
            return { ok: false };
        }
    },
    getFavoritos: async (user_id) => {
        try {
            const response = (await api.get(`/barbers/favoritos/${user_id}`)).data;
            if (response.ok) {
                return { ok: true, favoritos: response.favoritos }
            } else {
                alert(response.msg || "Falha ao tentar buscar favoritos");
                return response;
            }
        } catch (err) {
            alert("Falha ao tentar buscar favoritos" + err)
            return { ok: false };
        }
    },
    agendar: async (barber_id, service, selectedYear, selectedMonth, selectedDay, selectedHour) => {
        try {
            const response = (await api.post(`/barber/agendar/`, { barber_id, service, selectedYear, selectedMonth, selectedDay, selectedHour })).data;
            if (response.ok) {
                return { ok: true, agendas: response.agendas }
            } else {
                alert(response.msg || "Falha ao tentar buscar favoritos");
                return response;
            }
        } catch (err) {
            alert("Falha ao tentar buscar favoritos" + err)
            return { ok: false };
        }
    }

}