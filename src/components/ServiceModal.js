import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api.js';

import {
    ModalArea, ModalBody, BarberInfo, CloseButton, AvatarBarber, UserInfoName, ModalItem, ServiceName, LabelBotao, Botao,
    DateInfo, DateNext, DatePrev, DateTitleArea, DateTitle, ServiceInfoArea,
    LabelDay, DateArea, DateItem,
    TimeList, TimeItem, TimeItemText
} from './gerais'

import ExpandIcon from '../../assets/expand.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import { months, days } from '../services/calendar'

const Modal = styled.Modal``;

const ServiceInfo = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:space-between !important;
`;

export default ({ show, setShow, barber, service }) => {
    const navigation = useNavigation();

    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedHour, setSelectedHour] = useState(null);
    const [listDays, setListDays] = useState([]);
    const [listHours, setListHours] = useState([]);

    useEffect(() => {
        // alert(barber.agendas)
        if (barber.agendas) {
            // pega ultimo dia do mes = vai ao proximo mes e pega o dia 0 ou seja, ultimo dia do mes anterior
            let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
            let newListDays = [];
            alert(daysInMonth);
            for (let i = 1; i <= daysInMonth; i++) {
                let d = new Date(selectedYear, selectedMonth, i)
                let year = d.getFullYear();
                let month = d.getMonth() + 1;
                let day = d.getDate();
                month = month < 10 ? '0' + month : month;
                day = day < 10 ? '0' + day : day;

                let selDate = day + '/' + month + '/' + year;

                let availability = barber.agendas.filter((agenda) => agenda.data === selDate)

                newListDays.push({
                    status: availability.length > 0 ? true : false,
                    weekday: days[d.getDay()],
                    number: i
                })
            }
            setListDays(newListDays);
            // alert(JSON.stringify(listDays))
            setSelectedDay(0);
            setSelectedHour(0);
            setListHours([]);
            // sempre que trocar o valor dessa fariavel executa essa funcao de useEffect
        }
    }, [barber, selectedMonth, selectedYear])

    useEffect(() => {
        if (barber.agendas) {
            let d = new Date(selectedYear, selectedMonth, selectedDay);
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            month = month < 10 ? '0' + month : month;
            day = day < 10 ? '0' + day : day;
            let selDate = day + '/' + month + '/' + year;
            let availability = barber.agendas.filter((agenda) => agenda.data === selDate)
            // alert(JSON.stringify(availability))
            if (availability.length > 0) {
                setListHours(availability[0].hora);
            }
            setSelectedHour(null)
        }
    }, [barber, selectedDay])

    useEffect(() => {
        let today = new Date();
        setSelectedYear(today.getFullYear());
        setSelectedMonth(today.getMonth());
        setSelectedDay(today.getDate());


    }, []);

    const alterMonth = (tipo) => {
        var soma = (tipo == 'Prev') ? -1 : 1;
        // funcao para montar uma data  
        let mountDate = new Date(selectedYear, selectedMonth, 1);
        // subtrai um do mes
        mountDate.setMonth(mountDate.getMonth() + soma);
        // repassa informações
        setSelectedYear(mountDate.getFullYear());
        setSelectedMonth(mountDate.getMonth());
        // alert(selectedMonth)
        setSelectedDay(0);
    }

    const handlePrevDate = () => {
        alterMonth('Prev')
    }
    const handleNextDate = () => {
        alterMonth('Next')
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleAgendar = () => {
        if (
            barber.id &&
            service != null &&
            selectedYear > 0 &&
            selectedMonth > 0 &&
            selectedDay > 0 &&
            selectedHour != null
        ) {
            let res = await api.agendar(user.id, service, selectedYear, selectedMonth, selectedDay, selectedHour);
            if (res.err == ''){
                navigation.navigate('Agenda');
                setShow(false);
            }else alert(res.err);

        } else {
            alert("Preencha todos os dados!")
        }

    }

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType="slide" // slide = subir de baicho para cima // fade = aparece
        >
            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleClose}>
                        <ExpandIcon width="40" height="40" fill="#000000" />
                    </CloseButton>
                    <ModalItem>
                        <BarberInfo>
                            <AvatarBarber source={{ uri: barber.avatar }} />
                            <UserInfoName>{barber.nome}</UserInfoName>
                        </BarberInfo>
                    </ModalItem>
                    {service != null &&
                        <ModalItem>
                            <ServiceInfoArea>
                                <ServiceName>{barber.services[service].service}</ServiceName>
                                <ServiceName>R$ {barber.services[service].price}</ServiceName>
                            </ServiceInfoArea>
                        </ModalItem>
                    }

                    <ModalItem>
                        <DateInfo>
                            <DatePrev onPress={handlePrevDate}>
                                <NavPrevIcon width="35" height="35" fill="#000000" />
                            </DatePrev>
                            <DateTitleArea>
                                <DateTitle>{months[selectedMonth]} {selectedYear}</DateTitle>
                            </DateTitleArea>
                            <DateNext onPress={handleNextDate}>
                                <NavNextIcon width="35" height="35" fill="#000000" />
                            </DateNext>
                        </DateInfo>

                        <DateArea horizontal={true} showsHorizontalScrollIndicator={false} >
                            {listDays.map((day, k) => (
                                <DateItem key={k}
                                    onPress={() => day.status ? setSelectedDay(day.number) : null}
                                    style={{
                                        opacity: day.status ? 1 : 0.5,
                                        backgroundColor: day.number == selectedDay ? '#4EADBE' : '#FFF'
                                    }}
                                >
                                    <LabelDay
                                        style={{
                                            color: day.number == selectedDay ? '#FFF' : '#000'
                                        }}
                                    >{day.weekday}</LabelDay>
                                    <LabelDay
                                        style={{
                                            color: day.number == selectedDay ? '#FFF' : '#000'
                                        }}
                                    >{day.number}</LabelDay>
                                </DateItem>
                            ))}
                        </DateArea>
                    </ModalItem>
                    {selectedDay > 0 && listHours && listHours.length > 0 &&
                        <ModalItem>
                            <TimeList horizontal={true} showsHorizontalScrollIndicator={false}>
                                {listHours.map((item, k) => (
                                    <TimeItem
                                        key={k}
                                        onPress={() => setSelectedHour(item)}
                                        style={{
                                            backgroundColor: item == selectedHour ? '#4EADBE' : '#FFF',
                                            fontWeight: item == selectedHour ? 'bold' : 'normal'
                                        }}
                                    >
                                        <TimeItemText
                                            style={{
                                                color: item == selectedHour ? '#FFF' : '#000'
                                            }}
                                        >{item}</TimeItemText>
                                    </TimeItem>
                                ))}
                            </TimeList>
                        </ModalItem>
                    }
                    <Botao onPress={handleAgendar}>
                        <LabelBotao>Finalizar Agendamento</LabelBotao>
                    </Botao>

                </ModalBody>
            </ModalArea>
        </Modal>
    )
}