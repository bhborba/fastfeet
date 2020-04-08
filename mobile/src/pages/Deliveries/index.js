import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {signOut} from '~/store/modules/auth/actions';
import Pack from '~/pages/Pack';

import {
    Container,
    Header,
    Avatar,
    Info,
    UserMessage,
    Welcome,
    UserName,
    LogoutButton,
    Content,
    ContentHeader,
    Deliver,
    Filter,
    Pending,
    Delivered,
    DeliveredText,
    PendingText,
    List,
} from './styles';

Icon.loadFont();

export default function Deliveries({navigation}) {
    const profile = useSelector((state) => state.user.profile);
    const dispatch = useDispatch();
    const [deliveries, setDeliveries] = useState([]);
    const [pending, setPending] = useState(true);
    const [delivered, setDelivered] = useState(false);

    async function loadDelivered() {
        const response = await api.get(`deliveryman/${profile.id}/delivered`);

        setDeliveries(response.data);
        setDelivered(true);
        setPending(false);
    }

    async function loadDeliveries() {
        const response = await api.get(`deliveryman/${profile.id}/deliveries`);

        setDeliveries(response.data);
        setDelivered(false);
        setPending(true);
    }

    useEffect(() => {
        loadDeliveries();
    }, []);

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
            <Header>
                <Info>
                    <Avatar
                        source={{
                            uri: profile.avatar.url,
                        }}
                    />
                    <UserMessage>
                        <Welcome>Bem vindo de volta,</Welcome>
                        <UserName>{profile.name}</UserName>
                    </UserMessage>
                </Info>
                <LogoutButton onPress={handleLogout}>
                    <Icon name="exit-to-app" size={25} color="#E74040" />
                </LogoutButton>
            </Header>

            <Content>
                <ContentHeader>
                    <Deliver>Entregas</Deliver>
                    <Filter>
                        <Pending onPress={loadDeliveries}>
                            <PendingText active={pending}>
                                Pendentes
                            </PendingText>
                        </Pending>
                        <Delivered onPress={loadDelivered}>
                            <DeliveredText active={delivered}>
                                Entregues
                            </DeliveredText>
                        </Delivered>
                    </Filter>
                </ContentHeader>

                <List
                    data={deliveries}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <Pack data={item} navigation={navigation} />
                    )}
                />
            </Content>
        </Container>
    );
}

Deliveries.navigationOptions = {
    tabBarLabel: 'Entregas',
    tabBarIcon: ({tintColor}) => (
        <Icon name="reorder" size={20} color={tintColor} />
    ),
};
