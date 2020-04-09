import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {format} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';

import api from '~/services/api';

import {
    Container,
    Header,
    List,
    Notification,
    NotificationDescription,
    Bottom,
    NotificationDate,
    MarkAsRead,
    MarkAsReadText,
} from './styles';

export default function Notifications() {
    const profile = useSelector((state) => state.user.profile);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        async function loadProblems() {
            const response = await api.get(`notifications/${profile.id}`);

            setNotifications(response.data);
        }

        loadProblems();
    }, []);

    function convertDate(date) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatedDate = format(
            utcToZonedTime(date, timezone),
            'dd/MM/yyyy'
        );

        return formatedDate;
    }

    async function handleMarkAsRead(id) {
        await api.put(`notifications/${id}`);

        setNotifications(
            notifications.map((notification) =>
                notification._id === id
                    ? {...notification, read: true}
                    : notification
            )
        );
    }

    return (
        <Container>
            <Header>Notificações</Header>
            <List
                data={notifications}
                keyExtractor={(item) => String(item._id)}
                renderItem={({item}) => (
                    <Notification unread={!item.read}>
                        <NotificationDescription unread={!item.read}>
                            {item.content}
                        </NotificationDescription>
                        <Bottom>
                            <NotificationDate unread={!item.read}>
                                {convertDate(item.createdAt)}
                            </NotificationDate>
                            <MarkAsRead
                                disabled={!!item.read}
                                onPress={() => handleMarkAsRead(item._id)}>
                                <MarkAsReadText disabled={!!item.read}>
                                    Marcar como lida
                                </MarkAsReadText>
                            </MarkAsRead>
                        </Bottom>
                    </Notification>
                )}
            />
        </Container>
    );
}

Notifications.navigationOptions = {
    tabBarLabel: 'Notificações',
    tabBarIcon: ({tintColor}) => (
        <Icon name="notifications" size={20} color={tintColor} />
    ),
};
