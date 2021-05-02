import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../context/UserContext'

import HomeIcon from '../../assets/home.svg';
import BuscaIcon from '../../assets/busca.svg';
import AgendaIcon from '../../assets/agenda.svg'
import FavoritoIcon from '../../assets/favorito.svg'
import PerfilIcon from '../../assets/perfil.svg'

const TabArea = styled.View`
    height: 60px;
    backgroundColor: #4EADBE;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`

export default ({ state, navigation }) => {
    const {state:user} = useContext(UserContext);
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Busca')}>
                <BuscaIcon style={{ opacity: state.index === 1 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Agenda')}>
                <AgendaIcon style={{ opacity: state.index === 2 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Favoritos')}>
                <FavoritoIcon style={{ opacity: state.index === 3 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Perfil')}>
                {user.avatar != '' ?
                    <AvatarIcon source={{ uri: user.avatar }} />
                    :
                    <PerfilIcon style={{ opacity: state.index === 4 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
                }
            </TabItem>
        </TabArea>
    )
}