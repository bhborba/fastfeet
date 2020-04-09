import React, {useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import {Container, Form, Input, SubmitButton, Text} from './styles';

export default function ReportProblem(data) {
    const [problemDescription, setProblemDescription] = useState('');
    const {info} = data.navigation.state.params;

    async function handleSubmit() {
        await api.post(
            `delivery/${data.navigation.state.params.info.id}/problems`,
            {
                description: problemDescription,
            }
        );
        Alert.alert('Sucesso!', 'Problema reportado com sucesso');
        data.navigation.navigate('Details', {info});
    }

    return (
        <Background>
            <Container>
                <Form>
                    <Input
                        placeholder="Inclua aqui o problema que ocorreu na entrega."
                        placeholderTextColor="#999999"
                        onSubmitEditing={handleSubmit}
                        value={problemDescription}
                        onChangeText={setProblemDescription}
                        multiline
                    />

                    <SubmitButton title="Enviar" onPress={handleSubmit}>
                        <Text>Enviar</Text>
                    </SubmitButton>
                </Form>
            </Container>
        </Background>
    );
}

ReportProblem.navigationOptions = ({navigation}) => ({
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
