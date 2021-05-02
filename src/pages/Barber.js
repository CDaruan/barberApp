const { AsyncStorage } = require("react-native");

import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { barberController } from '../controllers/barberController';
import Swipers from 'react-native-swiper';

import Stars from '../components/Stars';
import ServiceModal from '../components/ServiceModal';

import FavoritoFullIcon from '../../assets/favorite_full.svg';
import FavorieIcon from '../../assets/favorito.svg';
import BackIcon from '../../assets/back.svg'

import NavPrevIcon from '../../assets/nav_prev.svg'
import NavNextIcon from '../../assets/nav_next.svg'

import {
    Container, Loadizinho, Scroller, FakeSwiper, PageBody, UserInfoArea, ServiceArea, TestimonialArea,
    SwipeDot, SwipeDotAcvive, SwipeItem, SwipeImage,
    UserAvatar, UserInfo, UserInfoName, UserFavButton, BackButton,
    ServiceItem, ServiceInfo, ServiceName, ServicePrice, Botao, LabelBotao, ServicesTitle,
    DepoimentoItem, DepoimentoInfo, DepoimentoName, DepoimentoBody
} from '../components/gerais';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [barberInfo, setBarberInfo] = useState({
        id: route.params.id,
        nome: route.params.nome,
        avatar: route.params.avatar,
        avaliacao: route.params.avaliacao,
    });

    const [loading, setLoading] = useState(false);
    const [favorito, setFavotito] = useState(false);
    const [openService, setOpenService] = useState(false);
    const [service, setService] = useState(null);

    useEffect(() => {
        const getBarberInfo = async () => {
            setLoading(true);
            var { ok, barber } = await barberController.gerBarber(barberInfo.id);
            if (ok) {
                setBarberInfo(barber)
                setFavotito(barber.favorito)
            }
            setLoading(false);

        }
        getBarberInfo();
    }, [])

    const handleBack = () => {
        navigation.goBack();
    }

    const handleFavorite = async () => {
        setFavotito(!favorito);
        await barberController.setFavorito(barberInfo.id, !favorito);
    }

    const handleOpenService = async (key) => {
        setService(key);
        setOpenService(true);
    }

    return (
        <Container>
            <Scroller>
                {barberInfo.photos && barberInfo.photos.length > 0 ?

                    <Swipers
                        style={{ height: 240 }}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDotAcvive />}
                        paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
                        autoplay={true}
                    >
                        {barberInfo.photos.map((item, k) => (
                            <SwipeItem key={k}>
                                <SwipeImage source={{ uri: item }} resizeMode="cover" />
                            </SwipeItem>
                        ))}
                    </Swipers>
                    :
                    <FakeSwiper></FakeSwiper>
                }

                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{ uri: barberInfo.avatar }} />
                        <UserInfo>
                            <UserInfoName>{barberInfo.nome}</UserInfoName>
                            <Stars stars={barberInfo.avaliacao} showNumber />
                        </UserInfo>
                        <UserFavButton onPress={handleFavorite}>
                            {favorito ?
                                <FavoritoFullIcon width="24" height="24" fill="#FF0000" />
                                :
                                <FavorieIcon width="24" height="24" fill="#FF0000" />
                            }
                        </UserFavButton>
                    </UserInfoArea>
                    {loading &&
                        <Loadizinho style="large" color="#000" />
                    }
                    {/* so mostra qnd carregar serviços */}
                    {barberInfo.services &&
                        <ServiceArea>
                            <ServicesTitle>Lista de Serviços</ServicesTitle>
                            {barberInfo.services.map((item, k) => (
                                <ServiceItem key={k}>
                                    <ServiceInfo>
                                        <ServiceName>{item.service}</ServiceName>
                                        <ServicePrice>R$ {item.price}</ServicePrice>
                                    </ServiceInfo>
                                    <Botao onPress={() => handleOpenService(k)}>
                                        <LabelBotao>Agendar</LabelBotao>
                                    </Botao>
                                </ServiceItem>
                            ))}
                        </ServiceArea>
                    }
                    {barberInfo.depoimentos && barberInfo.depoimentos.length > 0 &&
                        <TestimonialArea>
                            <Swipers
                                style={{ height: 110 }}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<NavPrevIcon width="35" height="35" fill="#000" />}
                                nextButton={<NavNextIcon width="35" height="35" fill="#000" />}
                            >
                                {barberInfo.depoimentos.map((item, k) => (
                                    <DepoimentoItem key={k}>
                                        <DepoimentoInfo>
                                            <DepoimentoName>Depoimento {k + 1}</DepoimentoName>
                                            <Stars stars={item.avaliacao} showNumber={false} />
                                        </DepoimentoInfo>
                                        <DepoimentoBody>{item.depoimento}</DepoimentoBody>
                                    </DepoimentoItem>
                                ))}
                            </Swipers>
                        </TestimonialArea>
                    }
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBack}>
                <BackIcon width="44" height="44" fill="#FFF" />
            </BackButton>

             <ServiceModal
                show={openService}
                setShow={setOpenService}
                barber={barberInfo}
                service={service}
            />

        </Container>
    );
}

