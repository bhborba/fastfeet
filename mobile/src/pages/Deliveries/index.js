import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Header,
    Avatar,
    Info,
    UserMessage,
    Welcome,
    UserName,
    Content,
    ContentHeader,
    Deliver,
    Filter,
    Pending,
    Delivered,
    DeliveredText,
    PendingText,
    List,
    ListContent,
    PackageName,
} from './styles';

Icon.loadFont();

export default function Deliveries() {
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
            <Header>
                <Info>
                    <Avatar
                        source={{
                            uri:
                                'https://www.diariodocentrodomundo.com.br/wp-content/uploads/2018/08/bolsonaro-4.jpg',
                        }}
                    />
                    <UserMessage>
                        <Welcome>Bem vindo de volta,</Welcome>
                        <UserName>Doidão do superpop</UserName>
                    </UserMessage>
                </Info>
                <Icon name="exit-to-app" size={25} color="#E74040" />
            </Header>

            <Content>
                <ContentHeader>
                    <Deliver>Entregas</Deliver>
                    <Filter>
                        <Pending>
                            <PendingText>Pendentes</PendingText>
                        </Pending>
                        <Delivered>
                            <DeliveredText>Entregues</DeliveredText>
                        </Delivered>
                    </Filter>
                </ContentHeader>

                <List>
                    <ListContent>
                        <Icon name="local-shipping" size={25} color="#7D40E7" />
                        <PackageName>Entrega</PackageName>
                    </ListContent>
                    <ListContent>
                        <Icon name="local-shipping" size={25} color="#7D40E7" />
                        <PackageName>Entrega</PackageName>
                    </ListContent>
                </List>
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
