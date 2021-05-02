import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'
import Stars from './Stars'

const Area = styled.TouchableOpacity`
    background-color:#444;
    margin-bottom:20px;
    border-radius:20px;
    padding:15px;
    flex-direction: row;
`;
const Avatar = styled.Image`
    width:88px;
    height:88px;
    border-radius:20px;
`;

const InfoArea = styled.View`
    margin-left:20px;
    justify-content:space-between;
`;

const UserName = styled.Text`
    font-size:17px;
    font-weight:bold;
`;
const SeeProfileButton = styled.View`
    width: 85px
    height:26px;
    border: 1px solid #000;
    border-radius:10px;
    justify-content:center;
    align-items:center;
`;
const SeeProfileButtonText = styled.Text`
    font-size:13px;
    color: #000;
`;



export default ({ data }) => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Barber', { 
            id:data.id,
            avatar:data.avatar,
            nome:data.nome,
            avaliacao: data.avaliacao
        });
    }

    return (
        <Area onPress={handleClick}>
            <Avatar source={{ uri: data.avatar }} />
            <InfoArea>
                <UserName>{data.nome}</UserName>
                <Stars stars={data.avaliacao} showNumber={true} />
                <SeeProfileButton>
                    <SeeProfileButtonText> Ver Perfil </SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    )
}