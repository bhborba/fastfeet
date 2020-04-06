import React from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

import {Container, Form, Input, SubmitButton, Text} from './styles';

export default function SignIn() {
    return (
        <Container>
            <Image source={logo} />

            <Form>
                <Input
                    keyboardType="numeric"
                    placeholder="Informe seu ID de cadastro"
                />
                <SubmitButton onPress={() => {}}>
                    <Text>Entrar no sistema</Text>
                </SubmitButton>
            </Form>
        </Container>
    );
}
