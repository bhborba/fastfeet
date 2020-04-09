import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import logo from '~/assets/logo.png';

import {Container, Form, Input, SubmitButton, Text} from './styles';
import {signInRequest} from '~/store/modules/auth/actions';

export default function SignIn() {
    const dispatch = useDispatch();

    const [id, setId] = useState('');

    function handleSubmit() {
        dispatch(signInRequest(id));
    }

    return (
        <Container>
            <Image source={logo} />

            <Form>
                <Input
                    keyboardType="numeric"
                    placeholder="Informe seu ID de cadastro"
                    placeholderTextColor="#999999"
                    onSubmitEditing={handleSubmit}
                    value={id}
                    onChangeText={setId}
                />
                <SubmitButton title="Entrar no Sistema" onPress={handleSubmit}>
                    <Text>Entrar no sistema</Text>
                </SubmitButton>
            </Form>
        </Container>
    );
}
