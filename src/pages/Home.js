import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
// import { Platform } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, SearchButton, LocationArea, LocationInput, LocationFinder, ListArea, LoadingIcon } from '../components/gerais';

import { useNavigation } from '@react-navigation/native';
import { barberController } from '../controllers/barberController';
import BarberItem from '../components/BarberItem'

// import { request, PERMISSIONS } from 'react-native-permissions';
// import Geolocation from '@react-native-community/geolocation'

import SearchIcon from '../../assets/busca.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {

    const navigation = useNavigation();
    const [locationText, setLocationText] = useState('');
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setLoading(true);
        setList([]);
        getBarbers('São Paulo');
        // let result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

        // if (result == 'granted') {
        //     Geolocation.getCurrentPosition((info) => {
        //         alert(info.coords)
        //     });
        // }
    }

    const getBarbers = async (regiao) => {
        regiao = regiao || "São Paulo";
        setLoading(true);
        try {
            setList([]);

            var { ok, barbers } = await barberController.find(regiao);
            if (ok) {
                // alert(JSON.stringify(barbers));
                setList(barbers);
                setLocationText(regiao);
            }

        } catch (err) {
            alert(err)
        }
        setLoading(false);
    }

    // useEffect(() => {
    //     getBarbers('São Paulo');
    // })

    const onRefresh = () => {
        setRefreshing(false)
        getBarbers(locationText);
    }

    const handleLocationSearch = () => {
        getBarbers(locationText);
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro Favorito</HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Busca')}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#444"
                        value={locationText}
                        onChangeText={t => setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>
                {loading &&
                    <LoadingIcon size="large" color="#444" />
                }
                <ListArea>
                    {list.map((item, i) => (
                        <BarberItem key={i} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    );
}