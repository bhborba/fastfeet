import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

export default function ListProblems() {
    return <Container />;
}

ListProblems.navigationOptions = ({navigation}) => ({
    title: 'Informar problema',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details');
            }}>
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
