import React from 'react';
import {format} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {signOut} from '~/store/modules/auth/actions';

import {
    Container,
    Avatar,
    Information,
    Header,
    Data,
    Button,
    Text,
} from './styles';

export default function Profile() {
    const profile = useSelector((state) => state.user.profile);
    const dispatch = useDispatch();

    function convertDate(date) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatedDate = format(
            utcToZonedTime(date, timezone),
            'dd/MM/yyyy'
        );

        return formatedDate;
    }

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Avatar
                source={{
                    uri: profile.avatar.url,
                }}
            />
            <Information>
                <Header>Nome completo</Header>
                <Data>{profile.name}</Data>
            </Information>
            <Information>
                <Header>Email</Header>
                <Data>{profile.email}</Data>
            </Information>
            <Information>
                <Header>Data de cadastro</Header>
                <Data>{convertDate(profile.created_at)}</Data>
            </Information>
            <Button onPress={handleLogout}>
                <Text>Logout</Text>
            </Button>
        </Container>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({tintColor}) => (
        <Icon name="account-circle" size={20} color={tintColor} />
    ),
};
