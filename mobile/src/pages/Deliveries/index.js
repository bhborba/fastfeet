import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

// import { Container } from './styles';

export default function Deliveries() {
    return <View />;
}

Deliveries.navigationOptions = {
    tabBarLabel: 'Entregas',
    tabBarIcon: ({tintColor}) => (
        <Icon name="reorder" size={20} color={tintColor} />
    ),
};
