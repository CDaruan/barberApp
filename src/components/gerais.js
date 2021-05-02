import React from 'react';
import styled from 'styled-components/native';

// Container, Scroller, 
// FakeSwiper, PageBody, UserInfoArea, ServiceArea, TestimonialArea

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    backgroundColor: #EEE;
    padding-top:18px;
`

export const Form = styled.SafeAreaView`
    paddingHorizontal: 30px;
    backgroundColor: #FFF;
    padding:15px;
    borderRadius: 15px;
    width: 80%
    `;

export const Input = styled.TextInput`
    borderWidth: 1px;
    borderColor: #ddd;
    paddingHorizontal: 20px;
    fontSize: 16px;
    color: #444;
    height: 44px;
    marginBottom: 20px;
    borderRadius: 2px;
`;

export const Loadizinho = styled.ActivityIndicator`
        margin-top: 50px;
        `;

export const Label = styled.Text`
    fontWeight: bold;
    color: #444;
    marginBottom: 8px;
`;

export const Botao = styled.TouchableOpacity`
    height: 42px;
    backgroundColor: #515151;
    justifyContent: center;
    alignItems: center;
    borderRadius: 10px
`;

export const LabelBotao = styled.Text`
color: #fff;
fontWeight: bold;
fontSize: 16px;
margin-right: 10px;
margin-left: 10px;
`

export const BotaoSecreto = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    marginTop:20px;
`;

export const LabelBotaoSecreto = styled.Text`
    color: #888;
    fontWeight:bold;
    fontSize:12px
`

export const Scroller = styled.ScrollView`
    flex:1;
`;
// flex-direction:row;  --> um ao lado do outro
// justify-content:space-between;  espaco entre os itens

export const HeaderArea = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`;
export const HeaderTitle = styled.Text`
    width:250px;
    font-size:24px;
    font-weight: bold;
    color: #444;
`;
export const SearchButton = styled.TouchableOpacity`
    width:26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    background-color: #999999;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
    margin-top:30px;
`;
export const LocationInput = styled.TextInput`
    flex:1;
    font-size:16px;
    color:#444;
`;
export const LocationFinder = styled.TouchableOpacity`
    width:24px;
    height:24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top:50px;
`;

export const ListArea = styled.View`
    margin-top:30px;
    margin-bottom:30px;
`;

export const PageBody = styled.View`
    background-color: #FFF;
    border-top-left-radius: 50px;
    margin-top:-50px
`;

export const UserInfoArea = styled.View`
    flex-direction:row;
    margin-top:-30px
`;

export const UserAvatar = styled.Image`
    width:110px;
    height:110px;
    border-radius:20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFF;
`;

export const UserInfo = styled.View`
    flex:1;
    justify-content:flex-end;
`;

export const UserInfoName = styled.Text`
    color:#000;
    font-size:18px;
    font-weight:bold;
    margin-bottom:10px;

`;

export const UserFavButton = styled.TouchableOpacity`
    width:40px;
    height:40px;
    background-color:#FFF;
    border:2px solid #999999;
    border-radius:20px;
    justify-content:center;
    align-items:center;
    margin-top:20px
    margin-right:20px;
    margin-left:20px;
`;


export const ServiceArea = styled.View`
    margin-top:20px;
`;

export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:20px;
`;

export const ServicesTitle = styled.Text`
    font-size:18px;
    font-weight:bold;
    color: #444;
    margin-left:30px;
    margin-bottom:20px;
`;

export const ServiceInfo = styled.View`
    flex:1
`;

export const ServiceInfoArea = styled.View`
    flex-direction: row;
    justify-content:space-between;
`;

export const ServiceName = styled.Text`
    font-size:16px;
    font-weight: bold;
    color: #444;
`;

export const ServicePrice = styled.Text`    
    font-size:14px;
    color: #444;
`;

export const TestimonialArea = styled.View`
    margin-top:30px;
    margin-bottom:50px;
`;

export const DepoimentoItem = styled.View`
    background-color: #AAA;
    padding:15px;
    border-radius:10px;
    height: 110px;
    justify-content:center;
    margin-left:50px;
    margin-right:50px;
`;

export const DepoimentoInfo = styled.View`
    flex-direction: row;
    justify-content:space-between;
    margin-bottom:5px;
`;

export const DepoimentoName = styled.Text`
    color:#FFF;
    font-size:14px;
    font-weight:bold;
`;

export const DepoimentoBody = styled.Text`
    color:#FFF;
    font-size:13px;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height:10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotAcvive = styled.View`
    width: 10px;
    height:10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex:1;
    background-color:#AAA;
`;

export const FakeSwiper = styled.View`
    width:100%;
    background-color: #AAA;
    height:140px;
`;

export const SwipeImage = styled.Image`
    width:100%;
    height:240px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top:18px;
    z-index:9;
`;

// parte meio acinzentada por traz do modal
export const ModalArea = styled.View`
    flex:1;
    background-color: rgba(0,0,0,0.5);
    justify-content:flex-end;    
`;

export const ModalBody = styled.View`
    background-color: #FFF;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    min-height: 300px;
    padding:10px 20px 40px 20px;
    border: 1px solid #999
`;

export const CloseButton = styled.TouchableOpacity`
    width:40px;
    height:40px;
`;

export const ModalItem = styled.View`
    background-color: #999;
    border-radius:10px;
    margin-bottom:15px;
    padding:10px;
`;
// justify-content:space-between;

export const BarberInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AvatarBarber = styled.Image`
    width:56px;
    height:56px;
    border-radius:20px;
    margin-right:10px;
`;

export const DateInfo = styled.View`
    flex-direction:row;
`;

export const DatePrev = styled.TouchableOpacity`
    flex:1;
    justify-content:flex-end;
    align-items:flex-end;
`;

export const DateTitleArea = styled.View`
    width:140px;
    justify-content:center;
    align-items:center;
`;

export const DateTitle = styled.Text`
    font-size:17px;
    font-weight:bold;
    color: #000;
`;

export const DateNext = styled.TouchableOpacity`
    flex:1;
    align-items:flex-start;
`;
var branco = "#FFF";
export const DateItem = styled.TouchableOpacity`
    width:45px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding-top:5px;
    padding-bottom:5px;
    
`;

export const LabelDay = styled.Text`
    font-size:16px;
    font-weight:bold;
`;

export const DateArea = styled.ScrollView``;

export const TimeList = styled.ScrollView``;

export const TimeItem = styled.TouchableOpacity`
    width:75px;
    height:40px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
`;
export const TimeItemText = styled.Text`
    font-size:16px;
`;